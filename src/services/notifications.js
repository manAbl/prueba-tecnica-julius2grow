import { toast } from 'react-toastify';

export function errorsHandler(err) {
  toast('Something wrong happened!');
  console.info(err);
}
