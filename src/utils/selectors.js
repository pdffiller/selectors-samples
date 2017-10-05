export const memorize2 = func => {
  let cachedA;
  let cachedB;
  let cachedRes;
  return (a, b) => {
    if (a !== cachedA || b !== cachedB) {
      cachedA = a;
      cachedB = b;
      cachedRes = func(cachedA, cachedB);
    }
    return cachedRes;
  };
};

const apply = args => func => func(...args);

export const combineSelectors = (entrySelectors, selector) => (
  (...args) => selector(...entrySelectors.map(apply(args)))
);
