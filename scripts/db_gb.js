// insert guest book form
const guestForm = document.querySelector(".guest-form");
guestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nama = guestForm["nama"].value;
  let nama_prhs = guestForm["nama_prhs"].value;
  let no_hp = guestForm["no_hp"].value;
  let suhu = guestForm["suhu"].value;
  let nama_peg = guestForm["nama_peg"].value;
  let keperluan = guestForm["keperluan"].value;

  let p1 = guestForm["p1"].value;
  let p2 = guestForm["p2"].value;
  let p3 = guestForm["p3"].value;
  let p4 = guestForm["p4"].value;
  let p5 = guestForm["p5"].value;
  let p6 = guestForm["p6"].value;

  let foto_ktp_file = document.querySelector("#fotoktp").files[0];
  let foto_ktp = new Date().toString();
  let metadata = {
    contentType:foto_ktp_file.type,
  };
  const task = ref.child(foto_ktp).put(foto_ktp_file,metadata);

  if (confirm("Apakah data yang anda masukan sudah benar?")) {
    db.collection("tamu")
      .add({
        nama: nama,
        nama_prhs: nama_prhs,
        no_hp: no_hp,
        suhu: suhu,
        nama_peg: nama_peg,
        keperluan: keperluan,
        foto_ktp: foto_ktp,
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        p6: p6,
      })
      .then(() => {
        task
          .then((snapshot) => snapshot.ref.getDownloadURL())
          .then((url) => {
            alert("Data anda berhasil disimpan");
            const image = document.querySelector("#image");
            image.src = url;
          });
      });
  }
});
