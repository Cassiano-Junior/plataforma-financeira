import Swal from "sweetalert2";

const simple = function (title, text, icon) {
    return Swal.fire({
        title,
        heightAuto: false,
        html: text,
        icon,
        customClass: {
            confirmButton: "bg-primary border-0 focus:outiline-none focus:ring-0",
        },
    });
};
const wait = function () {
    Swal.fire({
        heightAuto: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
    Swal.showLoading();
};
const swal = {
    simple,
    wait,
};
export default swal;
