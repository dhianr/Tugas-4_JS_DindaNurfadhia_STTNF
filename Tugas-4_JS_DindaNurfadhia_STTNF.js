// class pelanggan untuk data pelanggan
class Pelanggan {
    constructor(nama, noTelp, kendaraan) {
        this.nama = nama;
        this.noTelp = noTelp;
        this.kendaraan = kendaraan;
    };
    getPelangganInfo(){
        if (this.kendaraan == null){
            return `${this.nama} | ${this.noTelp} (Tidak Menyewa)`;
        } else {
            return `${this.nama} | ${this.noTelp} (Menyewa: ${this.kendaraan.getKendaraanInfo()})`;
        }
    }
}

// class kendaraan yang disewa
// class parent kendaraan
class Kendaraan {
    constructor(jenis, merk, tahun){
        this.jenis = jenis;
        this.merk = merk;
        this.tahun = tahun;
    }
    getKendaraanInfo() {
        return `${this.jenis} ${this.merk} ${this.tahun}`;
    }
}

// child class dari kendaraan
class Mobil extends Kendaraan {
    constructor(jenis, merk, tahun, pintu){
        super(jenis, merk, tahun);
        this.pintu = pintu;
    }
    getMobilInfo() {
        return `${this.getKendaraanInfo()}, Pintu: ${this.pintu}`;
    }
}

class Motor extends Kendaraan {
    constructor (jenis, merk, tahun, cc) {
        super (jenis, merk, tahun);
        this.cc = cc;
    }
    getMotorInfo(){
        return `${this.getKendaraanInfo()}, CC: ${this.cc}`;
    }
}

// daftar mobil
const mobil1 = new Mobil ("Mobil", "Brio", 2020, 4);
const mobil2 = new Mobil ("Mobil", "Avanza", 2015, 4);
const mobil3 = new Mobil ("Mobil", "Lamborgini", 2020, 2);
const mobil4 = new Mobil ("Mobil", "Tesla", 2022, 4);
const mobil5 = new Mobil ("Mobil", "Carry", 2018, 2);

//daftar motor
const motor1 = new Motor ("Motor", "Beat", 2019, 120);
const motor2 = new Motor ("Motor", "Vario", 2022, 160);
const motor3 = new Motor ("Motor", "Mio", 2016, 120);
const motor4 = new Motor ("Motor", "NMAXX", 2024, 155);

// daftar pelanggan
const pelanggan1 = new Pelanggan("Junpi", "000213132", null);
const pelanggan2 = new Pelanggan("Hannie", "100123023", null);
const pelanggan3 = new Pelanggan("Seungcheol", "02131323", null);
const pelanggan4 = new Pelanggan("Kimingyu", "02343241", null);
const pelanggan5 = new Pelanggan("Hansol", "03483423", null);
const pelanggan6 = new Pelanggan("Diki", "012344523", null);

// transaksi sewa kendaraan
pelanggan1.kendaraan = motor3;
pelanggan2.kendaraan = mobil4;
pelanggan3.kendaraan = mobil3;
pelanggan4.kendaraan = motor2;
pelanggan6.kendaraan = mobil1;

// cetak data kendaraan
console.log("\nDAFTAR KENDARAAN ");
console.log("Mobil: ")
console.log("1. " + mobil1.getMobilInfo());
console.log("2. " + mobil2.getMobilInfo());
console.log("3. " + mobil3.getMobilInfo());
console.log("4. " + mobil4.getMobilInfo());
console.log("5. " + mobil5.getMobilInfo());

console.log("\nMotor: ")
console.log("1. " + motor1.getMotorInfo());
console.log("2. " + motor2.getMotorInfo());
console.log("3. " + motor3.getMotorInfo());
console.log("4. " + motor4.getMotorInfo());

// cetak data pelanggan
console.log("\nData Pelanggan: ");
console.log("1. " + pelanggan1.getPelangganInfo());
console.log("2. " + pelanggan2.getPelangganInfo());
console.log("3. " + pelanggan3.getPelangganInfo());
console.log("4. " + pelanggan4.getPelangganInfo());
console.log("5. " + pelanggan5.getPelangganInfo());
console.log("6. " + pelanggan6.getPelangganInfo());
