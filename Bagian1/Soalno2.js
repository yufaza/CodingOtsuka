let ArrayLama = [
    {code: 2000000000091, name: "PT. TULUS MAJU PANTANG MUNDUR"},
    {code: 2000000000091, name: "PT. PANTANG MUNDUR TULUS MAJU"},
]

function mapping(Array){
    for(let v of Array){
        v.customer = `${v.code} - ${v.name}`; 
    }
    return Array;
}

console.log(mapping(ArrayLama));