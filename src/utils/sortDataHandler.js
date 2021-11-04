export const sortDataHandler = (nameOfProperty, arrayOfObjects, mode) => {
  if (mode)
    return arrayOfObjects.sort((a, b) => b[nameOfProperty] - a[nameOfProperty]);

  return arrayOfObjects.sort((a, b) => a[nameOfProperty] - b[nameOfProperty]);
};
