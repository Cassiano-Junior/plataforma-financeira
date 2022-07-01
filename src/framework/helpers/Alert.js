import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const simpleWithoutButton = function (title, text, icon) {
    return MySwal.fire({
        title,
        heightAuto: false,
        html: text,
        icon,
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            popup: 'dark:bg-secondary  overflow-visible',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
            closeButton: 'absolute -top-5 -right-5 bg-primary rounded-full text-light'
        },
    });
};

const simple = function (title, text, icon) {
    return MySwal.fire({
        title,
        heightAuto: false,
        html: text,
        icon,
        customClass: {
            popup: 'dark:bg-secondary overflow-visible',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
        },
    });
};

const preConfirm = function (data) {
    return MySwal.fire({
        title: data.title,
        heightAuto: false,
        html: data.html,
        icon: data.icon,
        preConfirm: data.confirm,
        showCloseButton: true,
        confirmButtonText: data.confirmButtonText,
        didClose: data.close,
        customClass: {
            popup: 'dark:bg-secondary',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
            closeButton: 'absolute -top-5 -right-5 bg-primary rounded-full text-light   '
        },
    });
};
const wait = function () {
    Swal.fire({
        heightAuto: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            popup: 'dark:bg-secondary',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
        },
    });
    Swal.showLoading();
};

const waitBlack = function () {
    Swal.fire({
        heightAuto: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            container: 'bg-black',
            popup: 'dark:bg-secondary',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
        },
    });
    Swal.showLoading();
};

const simpleBackBlack = function (title, text, icon, buttonText) {
    return MySwal.fire({
        title,
        heightAuto: false,
        html: text,
        icon,
        confirmButtonText: buttonText ?  buttonText : 'OK',
        allowOutsideClick: false,
        showConfirmButton: buttonText ,
        customClass: {
            container: 'bg-black',
            popup: 'dark:bg-secondary overflow-visible',
            title: 'dark:text-light',
            htmlContainer: 'dark:text-light',
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
        },
    });
};

const close = function () {
    return Swal.close();
}

const Alert = {
    simple,
    wait,
    close,
    preConfirm,
    simpleBackBlack,
    waitBlack,
    simpleWithoutButton
};
export default Alert;
