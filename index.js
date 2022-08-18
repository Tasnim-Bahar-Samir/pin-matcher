function generateRandomPin(){
    const pin = Math.floor(1000 + Math.random()*9000);
    return pin;
}
document.getElementById('random-pin').addEventListener('click',function(){
    const randomPinNUm = generateRandomPin();
    const pinInputField = document.getElementById('pin-input');
    pinInputField.value = randomPinNUm;
})


document.getElementById('calculator').addEventListener('click',function(e){
    const display = document.getElementById('numbers-input');
    console.log(e.target.innerText)
    
    if(e.target.innerText === 'C'){
        display.value = ''
    }else if(e.target.innerText === '<'){
        display.value = display.value.slice(0, -1);
    }else{
        display.value += e.target.innerText;
    }
})