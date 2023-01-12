const iconEye = document.querySelector('.input_password .bi');
const pswInput = document.querySelector('.input_password input');

const iconEyeConfirm = document.querySelector('.form_confirm-password .input_password .bi');
const formConfirmPasswordInput = document.querySelector('.form_confirm-password .input_password input');

iconEye.addEventListener('click', function() {
    if(iconEye.classList[1] === 'bi-eye-fill') {
        iconEye.classList.remove('bi-eye-fill');
        iconEye.classList.add('bi-eye-slash-fill');
        pswInput.setAttribute('type', 'password');
    } else {
        iconEye.classList.add('bi-eye-fill');
        iconEye.classList.remove('bi-eye-slash-fill');
        pswInput.setAttribute('type', 'text');
    }
})

if(iconEyeConfirm !== null) {
    iconEyeConfirm.addEventListener('click', function() {
        if(iconEyeConfirm.classList[1] === 'bi-eye-fill') {
            iconEyeConfirm.classList.remove('bi-eye-fill');
            iconEyeConfirm.classList.add('bi-eye-slash-fill');
            formConfirmPasswordInput.setAttribute('type', 'password');
        } else {
            iconEyeConfirm.classList.add('bi-eye-fill');
            iconEyeConfirm.classList.remove('bi-eye-slash-fill');
            formConfirmPasswordInput.setAttribute('type', 'text');
        }
    })
}   