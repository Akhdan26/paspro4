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
          .then((url) => {
            foto_ktp[k].foto_surat = url;
          })
          .finally(() => {
            ref
              .child("tamu/" + foto_ktp[k].foto_ktp)
              .getDownloadURL()
              .then((url) => {
                foto_ktp[k].foto_ktp = url;
              })
              .finally(() => {
                // add icon for keterangan
                let src_url = ""
                if (foto_ktp[k].suhu > 37.5) {
                  src_url = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDU1LjExMSA0NTUuMTExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuMTExIDQ1NS4xMTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UyNEM0QjsiIGN4PSIyMjcuNTU2IiBjeT0iMjI3LjU1NiIgcj0iMjI3LjU1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0QxNDAzRjsiIGQ9Ik00NTUuMTExLDIyNy41NTZjMCwxMjUuMTU2LTEwMi40LDIyNy41NTYtMjI3LjU1NiwyMjcuNTU2Yy03Mi41MzMsMC0xMzYuNTMzLTMyLjcxMS0xNzcuNzc4LTg1LjMzMw0KCWMzOC40LDMxLjI4OSw4OC4xNzgsNDkuNzc4LDE0Mi4yMjIsNDkuNzc4YzEyNS4xNTYsMCwyMjcuNTU2LTEwMi40LDIyNy41NTYtMjI3LjU1NmMwLTU0LjA0NC0xOC40ODktMTAzLjgyMi00OS43NzgtMTQyLjIyMg0KCUM0MjIuNCw5MS4wMjIsNDU1LjExMSwxNTUuMDIyLDQ1NS4xMTEsMjI3LjU1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzMxLjM3OCwzMzEuMzc4Yy04LjUzMyw4LjUzMy0yMi43NTYsOC41MzMtMzEuMjg5LDBsLTcyLjUzMy03Mi41MzNsLTcyLjUzMyw3Mi41MzMNCgljLTguNTMzLDguNTMzLTIyLjc1Niw4LjUzMy0zMS4yODksMGMtOC41MzMtOC41MzMtOC41MzMtMjIuNzU2LDAtMzEuMjg5bDcyLjUzMy03Mi41MzNsLTcyLjUzMy03Mi41MzMNCgljLTguNTMzLTguNTMzLTguNTMzLTIyLjc1NiwwLTMxLjI4OWM4LjUzMy04LjUzMywyMi43NTYtOC41MzMsMzEuMjg5LDBsNzIuNTMzLDcyLjUzM2w3Mi41MzMtNzIuNTMzDQoJYzguNTMzLTguNTMzLDIyLjc1Ni04LjUzMywzMS4yODksMGM4LjUzMyw4LjUzMyw4LjUzMywyMi43NTYsMCwzMS4yODlsLTcyLjUzMyw3Mi41MzNsNzIuNTMzLDcyLjUzMw0KCUMzMzkuOTExLDMwOC42MjIsMzM5LjkxMSwzMjIuODQ0LDMzMS4zNzgsMzMxLjM3OHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                } else if (foto_ktp[k].suhu == 37.5) {
                  src_url = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzg3LjQgMzg3LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4Ny40IDM4Ny40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUQ2NjRDOyIgZD0iTTE5My43LDEwYzEwMS41LDAsMTgzLjcsODIuMywxODMuNywxODMuN3MtODIuMiwxODMuNy0xODMuNywxODMuN1MxMCwyOTUuMiwxMCwxOTMuNw0KCVM5Mi4yLDEwLDE5My43LDEweiBNMTY0LjgsMjczLjZsMTMwLjMtMTMwLjRsLTI5LjQtMjkuNEwxNjQuOCwyMTQuN2wtNDMuMS00My4xTDkyLjMsMjAxTDE2NC44LDI3My42eiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZEQzc1QjsiIHBvaW50cz0iMjk1LjEsMTQzLjIgMTY0LjgsMjczLjYgOTIuMywyMDEgMTIxLjcsMTcxLjYgMTY0LjgsMjE0LjcgMjY1LjcsMTEzLjggIi8+DQo8cGF0aCBkPSJNMTkzLjcsMzg3LjRjMTA2LjgsMCwxOTMuNy04Ni45LDE5My43LTE5My43UzMwMC41LDAsMTkzLjcsMFMwLDg2LjksMCwxOTMuN1M4Ni45LDM4Ny40LDE5My43LDM4Ny40eiBNMTkzLjcsMjANCgljOTUuOCwwLDE3My43LDc3LjksMTczLjcsMTczLjdzLTc3LjksMTczLjctMTczLjcsMTczLjdTMjAsMjg5LjUsMjAsMTkzLjdTOTcuOSwyMCwxOTMuNywyMHoiLz4NCjxwYXRoIGQ9Ik0xNTcuOCwyODAuN2MxLjksMS45LDQuNCwyLjksNy4xLDIuOXM1LjItMS4xLDcuMS0yLjlsMTMwLjMtMTMwLjRjMy45LTMuOSwzLjktMTAuMiwwLTE0LjFsLTI5LjUtMjkuNQ0KCWMtMS45LTEuOS00LjQtMi45LTcuMS0yLjlzLTUuMiwxLjEtNy4xLDIuOWwtOTMuOCw5My44bC0zNi0zNmMtMy45LTMuOS0xMC4yLTMuOS0xNC4xLDBsLTI5LjQsMjkuNGMtMy45LDMuOS0zLjksMTAuMiwwLDE0LjENCglMMTU3LjgsMjgwLjd6IE0xMjEuNywxODUuN2wzNiwzNmMzLjksMy45LDEwLjIsMy45LDE0LjEsMGw5My44LTkzLjhsMTUuMywxNS4zTDE2NC44LDI1OS41bC01OC40LTU4LjRMMTIxLjcsMTg1Ljd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                } else {
                  src_url = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzY3LjgwNSAzNjcuODA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNjcuODA1IDM2Ny44MDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQkI1NEE7IiBkPSJNMTgzLjkwMywwLjAwMWMxMDEuNTY2LDAsMTgzLjkwMiw4Mi4zMzYsMTgzLjkwMiwxODMuOTAycy04Mi4zMzYsMTgzLjkwMi0xODMuOTAyLDE4My45MDINCgkJUzAuMDAxLDI4NS40NjksMC4wMDEsMTgzLjkwM2wwLDBDLTAuMjg4LDgyLjYyNSw4MS41NzksMC4yOSwxODIuODU2LDAuMDAxQzE4My4yMDUsMCwxODMuNTU0LDAsMTgzLjkwMywwLjAwMXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDRFMUY0OyIgcG9pbnRzPSIyODUuNzgsMTMzLjIyNSAxNTUuMTY4LDI2My44MzcgODIuMDI1LDE5MS4yMTcgMTExLjgwNSwxNjEuOTYgMTU1LjE2OCwyMDQuODAxIA0KCQkyNTYuMDAxLDEwMy45NjggCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                }

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
                <td><img style="width: 20px; height: 20px;" src="${
                  src_url
                }"/></td>
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
                <td>${foto_ktp2[k].src_url}</td>
                </tr>
                `;
                x++;
                if (x == Object.keys(foto_ktp).length) {
                  tabel_data.innerHTML = table_html;
                  tabel_data2.innerHTML = table_html2;
                }
              });
          });
      }
    }
  });
