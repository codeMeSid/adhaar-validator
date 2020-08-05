const d_matrix = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

const p_matrix = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

// converts string or number to an array and inverts it
const convertToInvertedArray = (value: string) =>
  value.split("").map(Number).reverse();

// validates checksum
const validator = (cardNumber: string) => {
  let c = 0;
  const invertedArray = convertToInvertedArray(cardNumber);
  const has_only_numbers = !invertedArray.some(isNaN);
  if (has_only_numbers == false) {
    return false;
  } else {
    for (var i = 0; i < invertedArray.length; i++) {
      c = d_matrix[c][p_matrix[i % 8][invertedArray[i]]];
    }
    return c === 0;
  }
};

export const isValid = (cardNumber: string | number) => {
  cardNumber = `${cardNumber}`;
  if (
    cardNumber.length != 12 ||
    cardNumber.startsWith("0") ||
    cardNumber.startsWith("1")
  ) {
    return false;
  }
  return validator(cardNumber);
};

export const isValidVID = (cardNumber: string | number) => {
  cardNumber = `${cardNumber}`;
  if (cardNumber.length != 16) {
    return false;
  }
  return validator(cardNumber);
};
