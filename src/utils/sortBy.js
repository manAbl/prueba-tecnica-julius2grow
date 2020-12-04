export default function sortBy(a, b, property) {
  try {
    const aSort = a[property].toLowerCase();
    const bSort = b[property].toLowerCase();

    if (aSort < bSort) return -1;
    if (aSort > bSort) return 1;
  } catch (err) {
    console.trace(err);
    return 0;
  }
};