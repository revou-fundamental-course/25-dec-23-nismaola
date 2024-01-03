// Menghitung Luas Segitiga
function menghitungLuas() {
    const tinggi = parseInt(document.getElementById('input-tinggi').value);
    const alas = parseInt(document.getElementById('input-alas').value);
    const luas = 0.5 * alas * tinggi;
    alert(`Luas Segitiga adalah: ${luas}`);
}

// Menghitung Keliling Segitiga
function menghitungKeliling() {
    const sisiA = parseInt(document.getElementById('input-sisiA').value);
    const sisiB = parseInt(document.getElementById('input-sisiB').value);
    const sisiC = parseInt(document.getElementById('input-sisiC').value);
    const keliling = sisiA + sisiB + sisiC;
    alert(`Keliling Segitiga adalah: ${keliling}`);
}

// Menampilkan Hasil Luas
function tampilHasilLuas(hasil) {
    document.getElementById('hasilLuas').innerText =  `Luas Segitiga adalah: ${hasil}`;
}

// Menampilkan Hasil Keliling
function tampilHasilKeliling(hasil) {
    document.getElementById('hasilKeliling').innerText = `Keliling Segitiga adalah: ${hasil}`;
}

// Mereset Nilai Input Luas
function resetLuas() {
    document.getElementById('input-tinggi').value = '';
    document.getElementById('input-alas').value = '';
}

// Mereset Nilai Input Keliling
function resetKeliling() {
    document.getElementById('input-sisiA').value = '';
    document.getElementById('input-sisiB').value = '';
    document.getElementById('input-sisiC').value = '';
}


