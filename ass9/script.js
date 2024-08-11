document.addEventListener('DOMContentLoaded', (event) => {
    const firebaseConfig = {
        apiKey: "AIzaSyA-y606Lx_ljXoeiqNYr7lwHgijefPwvJc",
        authDomain: "dnyx-4f7d8.firebaseapp.com",
        databaseURL: "https://dnyx-4f7d8-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "dnyx-4f7d8",
        storageBucket: "dnyx-4f7d8.appspot.com",
        messagingSenderId: "307900369713",
        appId: "1:307900369713:web:4dfcdce7bfb89af4afbe10"
      };
      const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
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
        event.preventDefault();

        validateNewPassword();
        validateConfirmPassword();

        if (newPasswordErrMsg.textContent || confirmPasswordErrMsg.textContent) {
            return;
        }

        const userId = "exampleUserId"; // Replace with the actual user ID or fetch dynamically

        firebase.database().ref('users/' + userId).update({
            password: newPassword.value
        }).then(() => {
            alert('Password updated successfully.');
            updatePasswordForm.reset();
        }).catch((error) => {
            alert('Failed to update password: ' + error.message);
        });
    });
});