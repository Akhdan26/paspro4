// insert guest book form
const guestForm = document.querySelector(".guest-form");
guestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nama = guestForm["nama"].value;
  let nama_prsh = guestForm["nama_prsh"].value;
  let no_hp = guestForm["no_hp"].value;
  let suhu = guestForm["suhu"].value;
  var keterangan = ""
  let nama_peg = guestForm["nama_peg"].value;
  let keperluan = guestForm["keperluan"].value;

  let foto_ktp_file = document.querySelector("#fotoktp").files[0];
  let foto_ktp = Math.random().toString(36).substr(2, 9);
  let foto_surat_file = document.querySelector("#suratsehat").files[0];
  let foto_surat = Math.random().toString(36).substr(2, 9);
  let metadata = {
    contentType:foto_ktp_file.type
  };
  const task = ref.child('tamu/'+foto_ktp).put(foto_ktp_file, metadata);
  
  if (suhu > 37.5) {
    keterangan = 'SAKIT'
  } else if (suhu = 37.5) {
    keterangan = 'DIAWASI'
  } else {
    keterangan = 'SEHAT GAN'
  }

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
        foto_surat: foto_surat,
        keterangan: keterangan,
      })
      .then(() => {
        task
          .then(() => {
            let metadata2 = {
              contentType:foto_surat_file.type
            };
            const task2 = ref.child('surat_sehat/'+foto_surat).put(foto_surat_file, metadata2);
            task2.then(() => {
              alert("Data anda berhasil disimpan!");
            })
          })
      });
  }
});
