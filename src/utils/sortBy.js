export default function sortBy(a, b, property) {
  try {
    const aSort = a[property].toLowerCase();
    const bSort = b[property].toLowerCase();

    if (aSort < bSort) return -1;
    if (aSort > bSort) return 1;
  } catch (err) {
    console.info(err);
    return 0;
  }
};