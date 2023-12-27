// Sakelar Ruang Keluarga START
function sakelarKLG(){
    // Sakelar Ruang Keluarga
    let keluarga1 = document.getElementById("keluarga1");
    let keluarga2 = document.getElementById("keluarga2");
    let keluarga3 = document.getElementById("keluarga3");
    let keluargaall = document.getElementById("keluargaall");

    if (keluargaall.checked) {

        keluarga1.checked = true;
        keluarga2.checked = true;
        keluarga3.checked = true;

    } else {

        keluarga1.checked = false;
        keluarga2.checked = false;
        keluarga3.checked = false;

    }
    sakelar()
}

// Sakelar Ruang Keluarga END

// Sakelar Ruang Makan START
function sakelarMKN() {
    
    // Sakelar
    let makan1 = document.getElementById("makan1");
    let makan2 = document.getElementById("makan2");
    let makanall = document.getElementById("makanall");

    if (makanall.checked) {

        makan1.checked = true;
        makan2.checked = true;

    } else {

        makan1.checked = false;
        makan2.checked = false;

    }

    sakelar()
}
// Ssakelar Ruang Makan END

// Sakelar Ruang Tamu Start
function sakelarTM() {

    let tamu1 = document.getElementById("tamu1");
    let tamu2 = document.getElementById("tamu2");
    let tamu3 = document.getElementById("tamu3");
    let tamuall = document.getElementById("tamuall");

    if (tamuall.checked) {

        tamu1.checked = true;
        tamu2.checked = true;
        tamu3.checked = true;

    } else {

        tamu1.checked = false;
        tamu2.checked = false;
        tamu3.checked = false;

    }

    sakelar()

    
}
// Sakelar Ruang Tamu END

// Sakelar Tampil
function sakelar() {
     let utama = document.getElementById("utama");
     
    //  Switch Lampu Keluarga
     let keluarga1 = document.getElementById("keluarga1");
     let keluarga2 = document.getElementById("keluarga2");
     let keluarga3 = document.getElementById("keluarga3");

    //  Lampu Ruang Keluarga
     let lkeluarga1 = document.getElementById("lkeluarga1");
     let lkeluarga2 = document.getElementById("lkeluarga2");
     let lkeluarga3 = document.getElementById("lkeluarga3");
     
    //  Switch Lampu Ruang Makan
     let makan1 = document.getElementById("makan1");
     let makan2 = document.getElementById("makan2");

    //  Lampu Ruang Makan
    let lmakan1 = document.getElementById("lmakan1");
    let lmakan2 = document.getElementById("lmakan2");

    // Switch Lampu Ruang Tamu
     let tamu1 = document.getElementById("tamu1");
     let tamu2 = document.getElementById("tamu2");
     let tamu3 = document.getElementById("tamu3");

    //  Lampu Ruang Tamu
    let ltamu1 = document.getElementById("ltamu1");
    let ltamu2 = document.getElementById("ltamu2");
    let ltamu3 = document.getElementById("ltamu3");

    // Switch Lampu Kamar Tidur
    let tidur = document.getElementById("tidur");
    
    //  Lampu Kamar Tidur
    let ltidur = document.getElementById("ltidur");
     
    // Keluarga
    if (keluarga1.checked == true) {
        
        lkeluarga1.src = 'Asset/image/on.gif';

    } 
    if (keluarga1.checked == false) {

        lkeluarga1.src = 'Asset/image/off.gif';

    }
    if (keluarga2.checked == true) {
        
        lkeluarga2.src = 'Asset/image/on.gif';

    } 
    if (keluarga2.checked == false) {

        lkeluarga2.src = 'Asset/image/off.gif';

    }
    if (keluarga3.checked == true) {
        
        lkeluarga3.src = 'Asset/image/on.gif';

    } 
    if (keluarga3.checked == false) {

        lkeluarga3.src = 'Asset/image/off.gif';

    }

    // Makan
    if (makan1.checked == true) {
        
        lmakan1.src = 'Asset/image/on.gif';

    } if (makan1.checked == false) {

        lmakan1.src = 'Asset/image/off.gif';

    }
    if (makan2.checked == true) {
        
        lmakan2.src = 'Asset/image/on.gif';

    } if (makan2.checked == false) {

        lmakan2.src = 'Asset/image/off.gif';

    }

    // Tamu
    if (tamu1.checked == true) {
        
        ltamu1.src = 'Asset/image/on.gif';

    } 
    if (tamu1.checked == false) {

        ltamu1.src = 'Asset/image/off.gif';

    }
    if (tamu2.checked == true) {
        
        ltamu2.src = 'Asset/image/on.gif';

    } 
    if (tamu2.checked == false) {

        ltamu2.src = 'Asset/image/off.gif';

    }
    if (tamu3.checked == true) {
        
        ltamu3.src = 'Asset/image/on.gif';

    } 
    if (tamu3.checked == false) {

        ltamu3.src = 'Asset/image/off.gif';

    }

    // Tidur
    if (tidur.checked == true) {
        
        ltidur.src = 'Asset/image/on.gif';
    }
    if (tidur.checked == false) {

        ltidur.src = 'Asset/image/off.gif';

    }

    console.log(tidur.checked);

}

// Sakelar UTAMA
function utama() {

    let utama = document.getElementById("utama");
    let keluargaall = document.getElementById("keluargaall");
    let makanall = document.getElementById("makanall");
    let tamuall = document.getElementById("tamuall");
    let tidur = document.getElementById("tidur");

    if (utama.checked) {
        
        keluargaall.checked = true;
        makanall.checked = true;
        tamuall.checked = true;
        tidur.checked = true;
    } else {

        keluargaall.checked = false;
        makanall.checked = false;
        tamuall.checked = false;
        tidur.checked = false;

    }

    sakelarKLG()
    sakelarMKN()
    sakelarTM()
    sakelar()
    
}