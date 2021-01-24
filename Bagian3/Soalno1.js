let Tonasenya = [21, 22, 23, 24];

function inputTonase(inputnya, Tonase){
    let status;
    
    if (inputnya < Math.min(...Tonase)){
        status = `Nilai '${inputnya}' kurang dari yang ditetapkan ${Tonase}`;
    } else if (Tonase.includes(inputnya)){
        status = `Ok sip ${inputnya} berada dalam ${Tonase}`;
    } else {
        while(inputnya > Math.max(...Tonase)){
            Tonase = Tonase.map(x => x*2);
            if (inputnya < Math.min(...Tonase)){
                status = `Nilai '${inputnya}' kurang dari yang ditetapkan ${Tonase}`;
                break;
            } else if (Tonase.includes(inputnya)){
                status = `Ok sip ${inputnya} berada dalam ${Tonase}`;
                break;
            }
        }
    }
    return status;
}

console.log(inputTonase(21, Tonasenya));

