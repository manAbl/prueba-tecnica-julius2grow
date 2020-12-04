export default function errorsHandler(err) {
  console.error(err);
  return new Error(err);
}
