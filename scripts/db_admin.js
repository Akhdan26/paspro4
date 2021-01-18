const tabel_data = document.querySelector(".tabel_data");
let foto_ktp_url = {};
let foto_ktp_huhe = [];

db.collection("tamu")
  .get()
  .then((snapshot) => {
    const ref = firebase.storage().ref();
    if (snapshot.size == "0") {
      document.querySelector(".table").style.display = "none";
      document.querySelector("#datatamutext").innerHTML += " (masih kosong)";
    } else {
      let x = 0;
      let html = "";
      snapshot.forEach((data) => {
        const each_data = data.data();
        html += `
        <tr>
        <th>${x + 1}</th>
        <td>${each_data.nama}</td>
        <td>${each_data.nama_prsh}</td>
        <td>${each_data.no_hp}</td>
        <td>${each_data.suhu}</td>
        <td>${each_data.nama_peg}</td>
        <td>${each_data.keperluan}</td>
        <td><img id="${"image" + x}" style="width: 100px; height: 100px;"/></td>
        <td>${each_data.p1}</td>
        <td>${each_data.p2}</td>
        <td>${each_data.p3}</td>
        <td>${each_data.p4}</td>
        <td>${each_data.p5}</td>
        <td>${each_data.p6}</td>
        </tr>   
        `;
        foto_ktp_huhe.push(each_data.foto_ktp);
        x++;
      });
      tabel_data.innerHTML = html;
    }
  })
  .finally(() => {
    let y = 0;
    foto_ktp_huhe.forEach((foto_ktp) => {
      ref
        .child(foto_ktp)
        .getDownloadURL()
        .then((url) => {
          foto_ktp_url["image" + y] = url;
          var each = document.getElementById("image" + y);
          each.src = foto_ktp_url["image" + y];
          y++;
        });
    });
  });
