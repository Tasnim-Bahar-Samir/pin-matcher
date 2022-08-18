function generateRandomPin(){
    const pin = Math.floor(1000 + Math.random()*9000);
    return pin;
}
document.getElementById('random-pin').addEventListener('click',function(){
    const randomPinNUm = generateRandomPin();
    const pinInputField = document.getElementById('pin-input');
    pinInputField.value = randomPinNUm;
})


//here we use the power of event delgation
document.getElementById('calculator').addEventListener('click',function(e){
    const display = document.getElementById('numbers-input');
    console.log(e.target.innerText)
   if(isNaN(e.target.innerText)){
    if(e.target.innerText === 'C'){
        display.value = ''
    }else if(e.target.innerText === '<'){
        display.value = display.value.slice(0, -1);
    }
   } 
    else{
        display.value += e.target.innerText;
    }
})


document.getElementById('match-test').addEventListener('click',function(){
    console.log('match clicked')
    const submitBtn = document.getElementById('match-test');
    const pinField = document.getElementById('pin-input');
    const display = document.getElementById('numbers-input');
    const successAlert = document.getElementById('success');
    const failAlert = document.getElementById('fail');

    const tryString = document.getElementById('try');
    const tryValue = parseInt(tryString.innerText);
    if(pinField.value === display.value){
        successAlert.style.display = 'block';
        failAlert.style.display = 'none';
        tryString.innerText = 3;
        pinField.value = '';
        display.value = '';

    }else{
        failAlert.style.display = 'block';
        successAlert.style.display = 'none';
        display.value = '';
        tryString.innerText = tryValue - 1;
        if(tryString.innerText == 0){
            submitBtn.setAttribute('disabled',true);
        }
    }
})