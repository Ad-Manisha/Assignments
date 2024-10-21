
window.onload = function() {
    const savedMobileNum = localStorage.getItem('mobilenum');
    const savedPassword = localStorage.getItem('password');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (savedMobileNum && savedPassword && rememberMe) {
        document.getElementById('mobilenum').value = savedMobileNum;
        document.getElementById('password').value = savedPassword;
        document.getElementById('remember-me').checked = true;
    }
};

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobilenum = document.getElementById('mobilenum').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Perform login logic here (e.g., form validation, server-side authentication)
    
    // Save username/password in localStorage if 'Remember Me' is checked
    if (rememberMe) {
        localStorage.setItem('mobilenum', mobilenum);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', true);
    } else {
        localStorage.removeItem('mobilenum');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
    }

    alert('Login successful!');
});
