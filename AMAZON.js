function convertINR(number) {
  const ones = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    0: '',
  };

  const tens = {
    2: 'TWENTY',
    3: 'THIRTY',
    4: 'FOURTY',
    5: 'FIFTY',
    6: 'SIXTY',
    7: 'SEVENTY',
    8: 'EIGHTY',
    9: 'NINETY',
    0: '',
  };

  const elevenToNineteen = {
    10: 'TEN',
    11: 'ELEVEN',
    12: 'TWELVE',
    13: 'THIRTEEN',
    14: 'FOURTEEN',
    15: 'FIFTEEN',
    16: 'SIXTEEN',
    17: 'SEVENTEEN',
    18: 'EIGHTTEEN',
    19: 'NINETEEN',
  };

  const numberInString = number + '';
  const n = numberInString.length;

  if (n === 1) {
    const item = parseInt(numberInString);
    if (item === 0) {
      return 0;
    } else {
      return ones[item];
    }
  }

  if (n === 2) {
    const item = parseInt(numberInString);
    if (elevenToNineteen[item]) {
      return elevenToNineteen[item];
    } else {
      const t = parseInt(numberInString.slice(0, 1));
      const o = parseInt(numberInString.slice(1, 2));
      return tens[t] + ' ' + ones[o];
    }
  }

  if (n === 3) {
    const h = numberInString.slice(0, 1);
    const t = numberInString.slice(1, n);
    if (elevenToNineteen[parseInt(t)]) {
      return ones[parseInt(h)] + ' HUNDRED ' + elevenToNineteen[parseInt(t)];
    } else {
      return (
        ones[parseInt(h)] +
        ' HUNDRED ' +
        tens[parseInt(t[0])] +
        ' ' +
        ones[parseInt(t[1])]
      );
    }
  }

  const oneTenHundredNum = number % 1000;
  const thousandNum = ((number % 100000) / 1000).toFixed(0);
  const lakhsNum = ((number % 10000000) / 100000).toFixed(0);
  const croreNum = (number / 10000000).toFixed(0);

  console.log(oneTenHundredNum);
  console.log(thousandNum);
  console.log(lakhsNum);
  console.log(croreNum);

  const croreOP =
    croreNum && convertINR(croreNum) ? convertINR(croreNum) + ' CRORE ' : '';
  const lakhsOP =
    lakhsNum && convertINR(lakhsNum) ? convertINR(lakhsNum) + ' LAKH ' : '';
  const thousandOP =
    thousandNum && convertINR(thousandNum)
      ? convertINR(thousandNum) + ' THOUSAND '
      : '';
  const oneTenHundredOP = convertINR(oneTenHundredNum)
    ? convertINR(oneTenHundredNum)
    : '';

  return croreOP + lakhsOP + thousandOP + oneTenHundredOP;
}

export const f = convertINR;
