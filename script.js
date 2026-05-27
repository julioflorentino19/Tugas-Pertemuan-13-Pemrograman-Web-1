// Conditional
function cekNilai() {
  var nilai = parseInt(document.getElementById("nilai").value);
  if (nilai >= 90) document.getElementById("hasilNilai").innerHTML = "SANGAT MEMUASKAN";
  else if (nilai >= 75) document.getElementById("hasilNilai").innerHTML = "MEMUASKAN";
  else document.getElementById("hasilNilai").innerHTML = "TIDAK MEMUASKAN";
}

function cekWarna() {
  var warna = document.getElementById("warna").value.toUpperCase();
  switch (warna) {
    case "MERAH": document.getElementById("hasilWarna").innerHTML = "Anda memilih MERAH"; break;
    case "HIJAU": document.getElementById("hasilWarna").innerHTML = "Anda memilih HIJAU"; break;
    case "BIRU": document.getElementById("hasilWarna").innerHTML = "Anda memilih BIRU"; break;
    default: document.getElementById("hasilWarna").innerHTML = "WARNA TIDAK VALID";
  }
}

// Functions
function halo() { document.getElementById("hasilHalo").innerHTML = "HALO SEMUA"; }

function sapa() {
  var nama = document.getElementById("nama").value;
  document.getElementById("hasilSapa").innerHTML = "HALO " + nama;
}

function tambah() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  document.getElementById("hasilTambah").innerHTML = "Hasil: " + (a + b);
}

// Form Validation
function validateForm() {
  var nama = document.getElementById("formNama").value;
  var email = document.getElementById("formEmail").value;
  if (nama === "" || email === "") {
    document.getElementById("formResult").innerHTML = "Nama dan Email harus diisi!";
  } else {
    document.getElementById("formResult").innerHTML = "Form berhasil disubmit!";
  }
}

// Calculator
let calcInput = "";
function press(val) {
  if (calcInput === "0") calcInput = "";
  calcInput += val;
  document.getElementById("calc-display").value = calcInput;
}
function calculate() {
  try {
    calcInput = eval(calcInput).toString();
    document.getElementById("calc-display").value = calcInput;
  } catch {
    document.getElementById("calc-display").value = "Error";
  }
}
function clearCalc() {
  calcInput = "";
  document.getElementById("calc-display").value = "0";
}
