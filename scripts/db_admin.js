const tabel_data = document.querySelector(".tabel_data");
let foto_ktp = {};

db.collection("tamu")
  .get()
  .then((snapshot) => {
    if (snapshot.size == "0") {
      //run program dibawah kalo data tamu masih kosong
      document.querySelector(".table").style.display = "none";
      document.querySelector("#datatamutext").innerHTML += " (masih kosong)";
    } else {
      //ambil url foto ktp dari masing-masing data
      snapshot.forEach((data) => {
        foto_ktp[data.id] = data.data();
      });
      let x = 0;
      let table_html = "";
      for (let k in foto_ktp) {
        ref
          .child(foto_ktp[k].foto_ktp)
          .getDownloadURL()
          .then((url) => {
            foto_ktp[k].foto_ktp = url;
          })
          .finally(() => {
            table_html += `
            <tr>
            <th>${x + 1}</th>
            <td>${foto_ktp[k].nama}</td>
            <td>${foto_ktp[k].nama_prsh}</td>
            <td>${foto_ktp[k].no_hp}</td>
            <td>${foto_ktp[k].suhu}</td>
            <td>${foto_ktp[k].nama_peg}</td>
            <td>${foto_ktp[k].keperluan}</td>
            <td><img style="width: 100px; height: 100px;" src="${
              foto_ktp[k].foto_ktp
            }"/></td>
            <td>${foto_ktp[k].p1}</td>
            <td>${foto_ktp[k].p2}</td>
            <td>${foto_ktp[k].p3}</td>
            <td>${foto_ktp[k].p4}</td>
            <td>${foto_ktp[k].p5}</td>
            <td>${foto_ktp[k].p6}</td>
            </tr>
            `;
            x++;
            if (x == Object.keys(foto_ktp).length) {
              tabel_data.innerHTML = table_html;
            }
          });
      }
    }
  });
