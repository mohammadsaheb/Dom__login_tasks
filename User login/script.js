"use strict"


 // Registration Logic
 const registerBtn = document.getElementById('register-btn');
 registerBtn.addEventListener('click', () => {
     const username = document.getElementById('reg-username').value;
     const password = document.getElementById('reg-password').value;
     const confirmPassword = document.getElementById('reg-confirm-password').value;

     if (password === confirmPassword) {
         localStorage.setItem('username', username);
         localStorage.setItem('password', password);
         alert('Registration successful! Redirecting to login...');
         document.getElementById('registration-container').style.display = 'none';
         document.getElementById('login-container').style.display = 'block';
     } else {
         alert('Passwords do not match!');
     }
 });

 // Enable Login Button When Input is Valid
 const loginInputs = document.querySelectorAll('#login-username, #login-password');
 loginInputs.forEach(input => {
     input.addEventListener('input', () => {
         const username = document.getElementById('login-username').value;
         const password = document.getElementById('login-password').value;
         const loginBtn = document.getElementById('login-btn');
         loginBtn.disabled = !(username && password);
     });
 });

 // Login Logic
 const loginBtn = document.getElementById('login-btn');
 loginBtn.addEventListener('click', () => {
     const storedUsername = localStorage.getItem('username');
     const storedPassword = localStorage.getItem('password');
     const username = document.getElementById('login-username').value;
     const password = document.getElementById('login-password').value;

     if (username === storedUsername && password === storedPassword) {
         alert('Login successful!');
         document.getElementById('login-container').style.display = 'none';
         document.getElementById('profile-container').style.display = 'block';
         document.getElementById('profile-username').innerText = storedUsername;
     } else {
         alert('Incorrect username or password!');
     }
 });

 // Enable Save Changes Button When Input is Valid
 const profileInputs = document.querySelectorAll('#new-username, #new-password');
 profileInputs.forEach(input => {
     input.addEventListener('input', () => {
         const newUsername = document.getElementById('new-username').value;
         const newPassword = document.getElementById('new-password').value;
         const saveBtn = document.getElementById('save-btn');
         saveBtn.disabled = !(newUsername || newPassword);
     });
 });

 // Save Profile Changes
 const saveBtn = document.getElementById('save-btn');
 saveBtn.addEventListener('click', () => {
     const newUsername = document.getElementById('new-username').value;
     const newPassword = document.getElementById('new-password').value;

     if (newUsername) {
         localStorage.setItem('username', newUsername);
         document.getElementById('profile-username').innerText = newUsername;
     }
     if (newPassword) {
         localStorage.setItem('password', newPassword);
     }
     alert('Profile updated successfully!');
     document.getElementById('new-username').value = '';
     document.getElementById('new-password').value = '';
 });

 // Logout Logic
 const logoutBtn = document.getElementById('logout-btn');
 logoutBtn.addEventListener('click', () => {
     document.getElementById('profile-container').style.display = 'none';
     document.getElementById('login-container').style.display = 'block';
 });