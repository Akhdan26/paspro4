auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html";
    }
})

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  alert("anda telah keluar dari admin!");
});