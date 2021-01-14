auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html";
    }
})

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();

  if (confirm("Apakah anda yakin ingin logout?")) {
    auth.signOut();
    alert("Logout berhasil!");
  }
  
});