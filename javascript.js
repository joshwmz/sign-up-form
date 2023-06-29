// ensure password input aligns

const form = document.querySelector("form");
const pwd = document.getElementById("password");
const pwdConfirm = document.getElementById("confirm");
const errorText = document.getElementById("on-error");

form.addEventListener("submit", (event) => {
    if (pwd.value !== pwdConfirm.value) {
        event.preventDefault();
        pwd.style.cssText='border-color: red';
        pwdConfirm.style.cssText='border-color: red';
        errorText.textContent = '* Passwords do not match';

        pwd.addEventListener("focus", () => {
            pwd.style.cssText='border-color: #E5E7EB';
            pwdConfirm.style.cssText='border-color: #E5E7EB';
            errorText.textContent = '';
    });    
        
    }
});