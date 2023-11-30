const sifre_tesdiq = document.getElementById("sifre_tesdiq");
const eye_icon = document.getElementById("eye_icon");

eye_icon.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    sifre_tesdiq.type = sifre_tesdiq.type === "password" ? "text" : "password";
    eye_icon.className = sifre_tesdiq.type === "password" ? "fas fa-eye" : "fas fa-eye-slash";
}
