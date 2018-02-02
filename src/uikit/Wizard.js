// @flow
import React from 'react';
import { injectState } from 'freactal';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';

const WizardProgress = ({ index, steps, setIndex }) => (
  <div>
    {steps.map(({ title }, i) => (
      <div
        onClick={() => i < index && (steps[i] || { canGoBack: false }).canGoBack && setIndex(i)}
        key={title}
      >
        <div style={i === index ? { color: 'red' } : {}}>{i}</div> {title}
      </div>
    ))}
  </div>
);

export default compose(
  injectState,
  withState('index', 'setIndex', 0),
  withState('nextDisabled', 'setNextDisabled', false),
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
    nextDisabled,
    setNextDisabled,
  }: {
    steps: Array<{
      title: string,
      Component?: any,
      render?: Function,
      canGoBack: boolean,
      renderNext?: Function,
    }>,
    state: string,
    index: number,
    setIndex: Function,
    currentStep: any,
    nextStep: Function,
    prevStep: Function,
    setIndex: Function,
    nextDisabled: boolean,
    setNextDisabled: Function,
  }) => (
    <div>
      <WizardProgress setIndex={setIndex} index={index} steps={steps} />
      <h2>{currentStep.title}</h2>
      {currentStep.render
        ? currentStep.render({ nextStep, prevStep, disableNextStep: setNextDisabled })
        : currentStep.Component}
      <button onClick={prevStep} disabled={index - 1 < 0 || !steps[index - 1].canGoBack}>
        Back
      </button>
      {currentStep.renderNext ? (
        currentStep.renderNext({ nextStep, nextDisabled })
      ) : (
        <button onClick={nextStep} disabled={nextDisabled}>
          Next
        </button>
      )}
    </div>
  ),
);
