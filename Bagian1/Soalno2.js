let ArrayLama = [
    {code: 2000000000091, name: "PT. TULUS MAJU PANTANG MUNDUR"},
    {code: 2000000000091, name: "PT. PANTANG MUNDUR TULUS MAJU"},
]



function mapping(ArrayLama){
    for(let v of ArrayLama){
        v.customer = ArrayLama.map((el) => {
            return el.customer = `${el.code} - ${el.name}`; 
        })
    }
    return ArrayLama;
}

console.log(mapping(ArrayLama));