import _ from 'lodash';

// last отдает последнее значение в массиве

export default (Num) => {
  const lastNum = _.last(['one', 'twooo']);

  return lastNum;
};

// console.log(_.last(['one', 'two']));
