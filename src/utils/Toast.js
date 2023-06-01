import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export const setToast = (type, data) => {
  return toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
};
