import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastNotification(message, TYPE){
    return toast(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        role: "alert",
        type: TYPE,
        autoClose: 3000,
        rtl: true,
        // theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}

export default ToastNotification;