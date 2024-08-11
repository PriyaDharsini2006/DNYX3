document.addEventListener('DOMContentLoaded', (event) => {
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
    const confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
    const updatePasswordForm = document.getElementById('updatePasswordForm');

    function validateNewPassword() {
        if (newPassword.value.trim() === '') {
            newPasswordErrMsg.textContent = 'New password is required.';
        } else {
            newPasswordErrMsg.textContent = '';
        }
    }


    function validateConfirmPassword() {
        if (confirmPassword.value.trim() === '') {
            confirmPasswordErrMsg.textContent = 'Please confirm your password.';
        } else {
            confirmPasswordErrMsg.textContent = '';
        }
    }

    
    newPassword.addEventListener('blur', validateNewPassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);

    updatePasswordForm.addEventListener('submit', (event) => {
       
        validateNewPassword();
        validateConfirmPassword();

        if (newPasswordErrMsg.textContent || confirmPasswordErrMsg.textContent) {
            event.preventDefault();
        }
    });
});
