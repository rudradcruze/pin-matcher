function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    
    if(pinString.length === 4)
        return pin;
    else
        getPin();
}

function generatePin() { 
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    displayPin.value = getPin();
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const buttonValue = event.target.innerText;
    const typingPing = document.getElementById('typing-pin');
    if(isNaN(buttonValue))
    {
        if(buttonValue === 'C')
            typingPing.value = '';
        if(buttonValue === '<')
        {
            const removeAble = typingPing.value.split('');
            removeAble.pop();
            const joinPin = removeAble.join('');
            typingPing.value = joinPin;
        }
    }
    else
    {
        const previousValue = typingPing.value;
        typingPing.value = previousValue + buttonValue;
    }
})