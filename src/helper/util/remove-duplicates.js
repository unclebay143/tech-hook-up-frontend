// Remove duplicate values from the array
const fromArray = (arr, prop) => {
  // see: https://stackoverflow.com/a/9229821
  return arr?.filter((obj, pos, arr) => {
    return arr?.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};
const removeDuplicates = {
  fromArray,
};

export default removeDuplicates;
