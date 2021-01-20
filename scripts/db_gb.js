// insert guest book form
const guestForm = document.querySelector(".guest-form");
guestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nama = guestForm["nama"].value;
  let nama_prsh = guestForm["nama_prsh"].value;
  let no_hp = guestForm["no_hp"].value;
  let suhu = guestForm["suhu"].value;
  let nama_peg = guestForm["nama_peg"].value;
  let keperluan = guestForm["keperluan"].value;

  let foto_ktp_file = document.querySelector("#fotoktp").files[0];
  let foto_ktp = Math.random().toString(36).substr(2, 9);
  let metadata = {
    contentType:foto_ktp_file.type,
  };
  const task = ref.child('tamu/'+foto_ktp).put(foto_ktp_file, metadata);

  if (confirm("Apakah data yang anda masukan sudah benar?")) {
    db.collection("tamu")
      .add({
        nama: nama,
        nama_prsh: nama_prsh,
        no_hp: no_hp,
        suhu: suhu,
        nama_peg: nama_peg,
        keperluan: keperluan,
        foto_ktp: foto_ktp,
      })
      .then(() => {
        task
          .then(() => {
            alert("Data anda berhasil disimpan!");
          });
      });
  }
});
