document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const loginButton = document.getElementById("login");
    const registerButton = document.getElementById("register");

    loginButton.addEventListener("click", () => {
        container.classList.remove("active");
    });

    registerButton.addEventListener("click", () => {
        container.classList.add("active");
    });

    const signUpForm = document.getElementById("signUpForm");
    const signInForm = document.getElementById("signInForm");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = signUpForm.querySelector('input[placeholder="Name"]').value;
        const email = signUpForm.querySelector('input[placeholder="Email"]').value;
        const password = signUpForm.querySelector('input[placeholder="Password"]').value;

        if (name && email && password) {
            if (password.length >= 8) {
                alert("Sign up successful!");
            } else {
                alert("Password must be at least 8 characters long.");
            }
        } else {
            alert("All fields are required.");
        }
    });

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = signInForm.querySelector('input[placeholder="Email"]').value;
        const password = signInForm.querySelector('input[placeholder="Password"]').value;
        const rememberMe = document.getElementById('rememberMe') ? document.getElementById('rememberMe').checked : false;

        if (email && password) {
            alert(`Sign in successful! Remember Me: ${rememberMe}`);
        } else {
            alert("All fields are required.");
        }
    });

    // Show/hide password functionality
    const togglePasswordVisibility = (toggleButtonId, passwordFieldId) => {
        const toggleButton = document.getElementById(toggleButtonId);
        const passwordField = document.getElementById(passwordFieldId);

        toggleButton.addEventListener('click', () => {
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            toggleButton.classList.toggle('fa-eye-slash');
        });
    };

    togglePasswordVisibility('toggleSignUpPassword', 'signUpPassword');
    togglePasswordVisibility('toggleSignInPassword', 'signInPassword');

    // Password strength meter for sign-up form
    document.getElementById('signUpPassword').addEventListener('input', function () {
        const passwordStrength = document.getElementById('signUpPasswordStrength');
        const password = this.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++; // Special character

        switch (strength) {
            case 0:
                passwordStrength.innerHTML = "";
                break;
            case 1:
                passwordStrength.innerHTML = '<div style="height:100%; width:100%; color:aliceblue; background-color:red;">&nbsp;&nbsp;Weak&nbsp;&nbsp;</div>';
                break;
            case 2:
                passwordStrength.innerHTML = '<div style="height:100%; width:100%; color:aliceblue;background-color:orange">&nbsp;&nbsp;Medium&nbsp;&nbsp;</div>';
                break;
            case 3:
                passwordStrength.innerHTML = '<div style="height:100%; width:100%; color:aliceblue;background-color:green;">&nbsp;&nbsp;Strong&nbsp;&nbsp;</div>';
                break;
            case 4:
                passwordStrength.innerHTML = '<div style="height:100%; width:100%; color:aliceblue;background-color:blue;">&nbsp;&nbsp;Excellent&nbsp;&nbsp;</div>';
                break;
        }
    });
});