// @flow
import React from 'react';
import { injectState } from 'freactal';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';

const WizardProgress = ({ index, steps, setIndex }) => (
  <div>
    {steps.map((title, i) => (
      <div onClick={() => i < index && setIndex(i)}>
        <div style={i === index ? { color: 'red' } : {}}>{i}</div> {title}
      </div>
    ))}
  </div>
);

export default compose(
  injectState,
  withState('index', 'setIndex', 0),
  withHandlers({
    nextStep: ({ index, setIndex, steps }) => event =>
      setIndex(index + 1 >= steps.length ? index : index + 1),
    prevStep: ({ index, setIndex, steps }) => event => setIndex(index - 1 < 0 ? index : index - 1),
  }),
  withPropsOnChange(['index'], ({ index, setIndex, steps }) => ({
    currentStep: steps[index] || { title: 'no step', Component: '--' },
  })),
)(
  ({
    steps,
    state,
    index,
    nextStep,
    prevStep,
    currentStep,
    setIndex,
  }: {
    steps: Array<{ title: string, Component: any }>,
    state: string,
    index: number,
    setIndex: Function,
    currentStep: any,
    nextStep: Function,
    prevStep: Function,
    setIndex: Function,
  }) => (
    <div>
      <WizardProgress setIndex={setIndex} index={index} steps={steps.map(({ title }) => title)} />
      <h2>{currentStep.title}</h2>
      {currentStep.Component}
      <button onClick={prevStep}>Prev step</button>
      <button onClick={nextStep}>Next step</button>
    </div>
  ),
);
