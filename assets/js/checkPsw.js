const nextBtn = document.querySelector('.form_button-next');
const notificationBox = document.querySelector('.notification');
const inputPassword = document.querySelector('.input_password input');
const formConfirmPassword = document.querySelector('.form_confirm-password input');
const inputEmail = document.querySelector('.input_email input'); 
let text = '';

function checkPassword(password, email) {
    if(email.length === 0) {
        text = 'Email không được để trống';
        return false;
    }

    if(password.length < 8) {
        text = 'Password phải trên 8 ký tự';
        return false;
    }

    if(formConfirmPassword) {
        if(inputPassword.value !== formConfirmPassword.value) {
            text = 'Password nhập lại không đúng';
            return false;
        }
    }

    return true;
}

nextBtn.addEventListener("click",(e)=>{
    if(!checkPassword(inputPassword.value, inputEmail.value)) {
        e.preventDefault();
        let div =  document.createElement('div'); 
        div.classList.add('notification_item');
        div.innerHTML = 
            `
                <div class="notification_status">
                   
                <i class="bi bi-exclamation-circle-fill"></i>
                </div>
                <div class="notification_content">
                    <div class="notification_content-title">Error</div>
                    <div class="notification_content-text">${text}</div>
                    <div class="notification_duration"></div>
                </div> 
            `
        notificationBox.appendChild(div);
        setTimeout(()=> {
            div.remove();
        }, 2000)
        }
            
})

