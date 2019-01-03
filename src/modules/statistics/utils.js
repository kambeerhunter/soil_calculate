import * as data from '../../data/t_a_values.json';

const getMinValue = (values) => Math.min.apply( Math, values);

const getMaxValue = (values) => Math.max.apply( Math, values);

const getAverageValue = (values) => {
  if (values.length) {
    const sum = values.reduce((acc, current) => acc + parseFloat(current), 0);
    return sum / values.length;
  }
  return 0;
};

const getStandartDeviation = (values, average) => {
  const sum = values.reduce((acc, current) => (acc + parseFloat((current - average) ** 2)), 0);
  return Math.sqrt(sum / (values.length - 1));
};

const getVariationCoefficient = (deviation, average) => {
  if (deviation && average) {
    return parseFloat(deviation / average);
  }
  return 0;
};

export const getFinalCharacteristic = (rawValues) => {
  const values = rawValues.map(item => item.value);
  const min = getMinValue(values);
  const max = getMaxValue(values);
  const average = getAverageValue(values);
  const deviation = getStandartDeviation(values, average);
  const coefficient = getVariationCoefficient(deviation, average);
  const freedomDegree = values.length - 1;
  const tValue = [...data.default].find(item => item.freedomDegrees === freedomDegree);

  const final085 = average * (
    1 - parseFloat(tValue.confidence085 * coefficient) / (Math.sqrt(values.length))
  );
  const final095 = average * (
    1 - parseFloat(tValue.confidence095 * coefficient) / (Math.sqrt(values.length))
  );

  return {
    min,
    max,
    average,
    deviation: deviation.toFixed(4),
    coefficient: coefficient.toFixed(4),
    final085: final085.toFixed(4),
    final095: final095.toFixed(4),
  };
};
