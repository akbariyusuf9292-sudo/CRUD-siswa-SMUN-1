let dataSiswa = JSON.parse(localStorage.getItem("siswa")) || [];

function simpan() {
  localStorage.setItem("siswa", JSON.stringify(dataSiswa));
}

function tambahData() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;

  if (!nama || !kelas) {
    alert("Isi semua data!");
    return;
  }

  dataSiswa.push({ nama, kelas });

  simpan();
  tampilkanData();

  // reset input
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
}

function hapusData(index) {
  dataSiswa.splice(index, 1);
  simpan();
  tampilkanData();
}

function tampilkanData() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const tbody = document.getElementById("tableBody");

  tbody.innerHTML = "";

  dataSiswa
    .filter(d => d.nama.toLowerCase().includes(keyword))
    .forEach((d, i) => {
      tbody.innerHTML += `
        <tr>
          <td>${d.nama}</td>
          <td>${d.kelas}</td>
          <td>
            <button class="delete" onclick="hapusData(${i})">Hapus</button>
          </td>
        </tr>
      `;
    });
}

tampilkanData();