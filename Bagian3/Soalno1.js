function cariOptimal(nilai){
    let uang = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
    let kantong = [];
    let i = uang.length - 1;
    while (i>=1){
        while (nilai >= uang[i]){
            nilai = nilai - uang[i];
            kantong.push(uang[i]);
        }
        i--;
    }
    return kantong;
}
    
let duit = 93000
console.log(cariOptimal(duit));