// Class Declaration
function Mahasiswa(nama, nim){
    // public
    this.nama = nama;
    this.nim = nim;

    this.aktifitas = "Gak ngapa ngapain"

    // this.perkenalan = function(){
    //     console.log("Perkenalkan : ")
    //     console.log("Saya " + this.nama)
    //     console.log("Mahasiswa dengan NIM = " + this.nim)
    // }
}

Mahasiswa.prototype.perkenalan = function(){
    console.log("Perkenalkan : ")
    console.log("Saya " + this.nama)
    console.log("Mahasiswa dengan NIM = " + this.nim)
}

Mahasiswa.prototype.ngapain = function(){
    console.log(this.aktifitas);
}

Mahasiswa.prototype.belajar = function(pelajaran){
    this.aktifitas = "Saya sedang belajar " + pelajaran;
    this.ngapain();
}

// var fahmi = new Mahasiswa("Fahmi", "987654321")
// fahmi.perkenalan();
// fahmi.belajar("O a o e");

// console.log("---------")
// fahmi.nama = "Toni"
// fahmi.perkenalan();
// var fahmi = new Mahasiswa("Fahmi", "987654321")
// fahmi.perkenalan();
// fahmi.belajar("O a o e")

// fahmi.nama = "Toni"
// fahmi.perkenalan();

module.exports = Mahasiswa;