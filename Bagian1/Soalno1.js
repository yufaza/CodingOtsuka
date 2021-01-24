let arrayA = [
    {code:"M", nama: "Mango"},
    {code:"A", nama: "Apple"},
    {code:"Me", nama: "Melon"},
    {code:"O", nama: "Orange"},
    {code:"P", nama: "Pineapple"}
];
let arrayB = [
    {code:"M", nama: "Mango"},
    {code:"P", nama: "Pineapple"},
    {code:"Pe", nama: "Pears"},
];


function getIrisan(A, B){
    let irisan = [];
    let namaA = A.map(el => el.nama);
    for(let elB of B){
        if(namaA.includes(elB.nama)){
            irisan.push(elB);
        }
    }
    return irisan;
}

function getGabungan(A, B){
    let irisan = [...A];
    let namaA = A.map(el => el.nama);
    for(let elB of B){
        if(!namaA.includes(elB.nama)){
            irisan.push(elB);
        }
    }
    return irisan;
}

function getUniqueA(A, B){
    let uniqueA = [];
    let namaB = B.map(el => el.nama);
    for(let elA of A){
        if(!namaB.includes(elA.nama)){
            uniqueA.push(elA);
        }
    }
    return uniqueA;
}

console.log(getIrisan(arrayA, arrayB));
console.log(getGabungan(arrayA, arrayB));
console.log(getUniqueA(arrayA, arrayB));