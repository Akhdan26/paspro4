// login
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then(() => {
    window.location.href = "admin.php";
  }).catch(() => {
    alert("email atau password salah!");
  }).finally(() => {
    loginForm.reset();
  });

});