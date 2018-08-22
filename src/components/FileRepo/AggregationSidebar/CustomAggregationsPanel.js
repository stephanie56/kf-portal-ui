import React from 'react';
import { compose } from 'recompose';
import { injectState } from 'freactal';
import { withTheme } from 'emotion-theming';
import Component from 'react-component-component';
import styled from 'react-emotion';

import { AggregationsList } from '@arranger/components/dist/Arranger';
import Query from '@arranger/components/dist/Query';

import { FILE_AGGS_CONFIG, PARTICIPANT_AGGS_CONFIG } from './aggsConfig';
import { withApi } from 'services/api';
import Row from 'uikit/Row';
import Column from 'uikit/Column';

const TabsRow = styled(({ className, ...props }) => (
  <Row {...{ ...props, className: `${className} tabs-titles` }} />
))`
  padding-left: 10px;
  border-bottom: solid 3px ${({ theme }) => theme.primaryHover};
`;
const Tabs = ({ selectedTab, onTabSelect, options }) => (
  <TabsRow>
    {options.map(({ id, display }) => (
      <Row
        width={'100%'}
        center
        className={`tabs-title ${selectedTab === id ? 'active-tab' : ''}`}
        onClick={() => onTabSelect({ id })}
      >
        {display}
      </Row>
    ))}
  </TabsRow>
);

export default compose(injectState, withTheme, withApi)(
  ({
    api,
    sqon,
    containerRef,
    setSQON = () => {},
    onValueChange = () => {},
    projectId,
    graphqlField,
  }) => (
    <Query
      renderError
      shouldFetch={true}
      api={api}
      projectId={projectId}
      name={`aggsIntrospection`}
      query={`
        query dataTypes {
          __schema {
            types {
              name
              fields {
                name
                type {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ loading, data }) => {
        const containerRef = React.createRef();
        if (data) {
          return (
            <Component initialState={{ selectedTab: 'FILE' }}>
              {({ state: { selectedTab }, setState }) => {
                const { __schema: { types } } = data;
                const gqlAggregationFields = types.find(
                  ({ name }) => name === `${graphqlField}Aggregations`,
                ).fields;
                const aggConfigToRender =
                  selectedTab === 'FILE' ? FILE_AGGS_CONFIG : PARTICIPANT_AGGS_CONFIG;
                const extendedAggConfig = aggConfigToRender
                  .filter(({ show }) => show)
                  .map(config => ({
                    ...config,
                    type: gqlAggregationFields.find(
                      fileAggField => config.field === fileAggField.name,
                    ).type.name,
                  }));
                return (
                  <Column>
                    <Tabs
                      selectedTab={selectedTab}
                      options={[
                        { id: 'FILE', display: 'file' },
                        { id: 'PARTICIPANT', display: 'participant' },
                      ]}
                      onTabSelect={({ id }) => setState({ selectedTab: id })}
                    />
                    <Column scrollY innerRef={containerRef}>
                      <AggregationsList
                        {...{
                          onValueChange: onValueChange,
                          setSQON: setSQON,
                          sqon,
                          projectId,
                          graphqlField,
                          api,
                          containerRef,
                          aggs: extendedAggConfig,
                          debounceTime: 300,
                        }}
                      />
                    </Column>
                  </Column>
                );
              }}
            </Component>
          );
        } else {
          return null;
        }
      }}
    />
  ),
);
