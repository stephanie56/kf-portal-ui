import * as React from 'react';
import { get } from 'lodash';
import { compose } from 'recompose';
import { withTheme } from 'emotion-theming';
import Query from '@arranger/components/dist/Query';
import DownloadFileButton from 'components/FileRepo/DownloadFileButton';
import { arrangerGqlRecompose } from 'services/arranger';
import { withApi } from 'services/api';
import DownloadIcon from 'icons/DownloadIcon';
import { ControlledIcon, TableSpinner } from './ui';
import Row from 'uikit/Row';
import Tooltip from 'uikit/Tooltip';
import { arrangerProjectId } from 'common/injectGlobals';

export default ({ theme, userProjectIds, loadingGen3User }) => [
  {
    index: 13,
    content: {
      accessor: 'kf_id',
      Header: () => <DownloadIcon width={13} fill={theme.greyScale3} />,
      Cell: compose(withApi, withTheme)(({ value, api, theme }) => (
        <Query
          renderError
          api={arrangerGqlRecompose(api, 'TableRowStudyId')}
          projectId={arrangerProjectId}
          shouldFetch={true}
          query={`query ($sqon: JSON) {
            file {
              aggregations(filters: $sqon) {
                participants__study__external_id {
                  buckets {
                    key
                  }
                }
              }
            }
          }`}
          variables={{
            sqon: {
              op: 'and',
              content: [
                {
                  op: 'in',
                  content: {
                    field: 'kf_id',
                    value: [value],
                  },
                },
              ],
            },
          }}
          render={({ loading: loadingQuery, data }) => {
            const studyIdBucket = (get(
              data,
              'file.aggregations.participants__study__external_id.buckets',
            ) || [])[0];
            return (
              <Row center height={'100%'}>
                {studyIdBucket ? (
                  userProjectIds.includes(studyIdBucket.key) ? (
                    <DownloadFileButton kfId={value} />
                  ) : (
                    <Tooltip
                      position="bottom"
                      interactive
                      html={<Row p={'10px'}>You do not have access to this file.</Row>}
                    >
                      <ControlledIcon fill={theme.primary} />
                    </Tooltip>
                  )
                ) : loadingQuery || loadingGen3User ? (
                  <TableSpinner style={{ width: 20, height: 20 }} />
                ) : (
                  <ControlledIcon fill={theme.primary} />
                )}
              </Row>
            );
          }}
        />
      )),
      width: 40,
      sortable: false,
      resizable: false,
    },
  },
];