const tabel_data = document.querySelector(".tabel_data");
db.collection("tamu")
  .get()
  .then((snapshot) => {
    var x = 1
    snapshot.forEach((data) => {
        const each_data = data.data();
        html = `
            <tr>
            <th>${x}</th>
            <td>${each_data.nama}</td>
            <td>${each_data.nama_prsh}</td>
            <td>${each_data.no_hp}</td>
            <td>${each_data.suhu}</td>
            <td>${each_data.nama_peg}</td>
            <td>${each_data.keperluan}</td>
            <td>${each_data.foto_ktp}</td>
            <td>${each_data.p1}</td>
            <td>${each_data.p2}</td>
            <td>${each_data.p3}</td>
            <td>${each_data.p4}</td>
            <td>${each_data.p5}</td>
            <td>${each_data.p6}</td>
            </tr>   
        `;
    });
    tabel_data.innerHTML = html;
  });
