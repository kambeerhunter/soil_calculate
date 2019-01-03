import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import { getFinalCharacteristic } from '../utils';
import './style.css';

const initialValues = {
  soilSamples: [
    { value: 0.00 },
    { value: 0.00 },
    { value: 0.00 },
    { value: 0.00 },
    { value: 0.00 },
    { value: 0.00 },
  ],
};

class StatisticsForm extends React.Component {
  state = {
    results: null,
  }

  getResults = (values) => {
    const results = getFinalCharacteristic(values.soilSamples);
    this.setState({ results });
  };

  render() {
    const { results } = this.state;
    const minSamples = 6;
    const maxSamples = 15;

    return (
      <Form
        initialValues={initialValues}
        onSubmit={this.getResults}
        mutators={{ ...arrayMutators }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
            reset,
          },
          pristine,
          submitting,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  if (values.soilSamples.length < maxSamples) {
                    return push('soilSamples', { value: 0.00 });
                  }
                  return false;
                }}
              >
                Add sample
              </button>
              <button
                type="button"
                onClick={() => {
                  if (values.soilSamples.length > minSamples) { pop('soilSamples')};
                }}
              >
                Remove sample
              </button>
            </div>
            <FieldArray name="soilSamples">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div
                    key={name}
                    className="form-group"
                  >
                    <div>{`Sample ${index + 1}`}</div>
                    <Field
                      name={`${name}.value`}
                      component="input"
                      type="number"
                      step="0.01"
                    />
                    <button
                      onClick={() => {
                        if (fields.length > minSamples) return fields.remove(index);
                        return false;
                      }}
                      type="button"
                    >
                      <span
                        role="img"
                        aria-label="delete-sample"
                      >
                        ❌
                      </span>
                    </button>
                  </div>
                ))}
            </FieldArray>

            <div className="buttons">
              <button
                type="submit"
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {
              results &&
              (
                <div className="result-values">
                  <div className="result-values__item">
                    min:
                    {results.min}
                  </div>
                  <div className="result-values__item">
                    max:
                    {results.max}
                  </div>
                  <div className="result-values__item">
                    average:
                    {results.average}
                  </div>
                  <div className="result-values__item">
                    standart deviation:
                    {results.deviation}
                  </div>
                  <div className="result-values__item">
                    coefficient of variation:
                    {results.coefficient}
                  </div>
                  <div className="result-values__item">
                    calculated value at confidence level 0.85:
                    {results.final085}
                  </div>
                  <div className="result-values__item">
                    calculated value at confidence level 0.95:
                    {results.final095}
                  </div>
                </div>
              )
            }
          </form>
        )}
      />
    );
  }
}

export { StatisticsForm };
