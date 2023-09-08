import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleCopyToClipboard = () => {
  navigator.clipboard.writeText('Medranoector@yahoo.com');
  toast('copied', { hideProgressBar: true, autoClose: 2000, type: 'success' ,position:'bottom-right' })
};