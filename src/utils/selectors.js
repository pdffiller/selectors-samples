export const entityById = entities => id => entities[id];
export const mapIds = (ids, entities) => ids.map(entityById(entities));

export const DONT_MEMORIZE = null;

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

export const shalowCompareArgs = (args, _args) => (
  _args == null ||
  args.length !== _args.length ||
  args.some((a, index) => a !== _args[index])
);

export const memorize = (func, compare = shalowCompareArgs) => {
  let _args;
  let _res;
  return (...args) => {
    if (compare(args, _args)) {
      _args = args;
      _res = func(..._args);
    }
    return _res;
  };
};

export const combineSelectors = (entrySelectors, selector, memorizer = memorize) => {
  if (typeof memorizer === 'function') selector = memorizer(selector);
  return (...args) => selector(...entrySelectors.map(apply(args)));
};
