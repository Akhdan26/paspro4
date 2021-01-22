const tabel_data = document.querySelector(".tabel_data");
const tabel_data2 = document.querySelector(".tabel_data2");
let foto_ktp = {};
let foto_ktp2 = {};

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
        foto_ktp2[data.id] = data.data();
      });
      let x = 0;
      let table_html = "";
      let table_html2 = "";
      for (let k in foto_ktp) {
        ref
          .child("surat_sehat/" + foto_ktp[k].foto_surat)
          .getDownloadURL()
          .then((url1) => {
            foto_ktp[k].foto_surat = url1;
          })
        ref
          .child("tamu/" + foto_ktp[k].foto_ktp)
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
            <td><img style="width: 100px; height: 100px;" src="${
              foto_ktp[k].foto_surat
            }"/></td>
            <td>${foto_ktp[k].keterangan}</td>
            </tr>
            `;
            //table_data2
            table_html2 += `
            <tr>
            <th>${x + 1}</th>
            <td>${foto_ktp2[k].nama}</td>
            <td>${foto_ktp2[k].nama_prsh}</td>
            <td>${foto_ktp2[k].no_hp}</td>
            <td>${foto_ktp2[k].suhu}</td>
            <td>${foto_ktp2[k].nama_peg}</td>
            <td>${foto_ktp2[k].keperluan}</td>
            <td>${foto_ktp2[k].foto_ktp}</td>
            <td>${foto_ktp2[k].foto_surat}</td>
            <td>${foto_ktp2[k].keterangan}</td>
            </tr>
            `;
            x++;
            if (x == Object.keys(foto_ktp).length) {
              tabel_data.innerHTML = table_html;
              tabel_data2.innerHTML = table_html2;
            }
          });
      }
    }
  });
