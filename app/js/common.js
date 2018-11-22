window.onload = function() {
    'use strict'

    
    let totalCredits = 5000;

    document.querySelector('#total-credits').innerHTML = `$${totalCredits}`;

    let bit = 500;
    let errors = [];

    document.querySelector('#add').addEventListener('click', function(e){
        bit < totalCredits - 100 ? bit += 100 : bit += totalCredits - bit;
        document.querySelector('#bit').value = bit;
    })
    
    document.querySelector("#substract").addEventListener('click', function(e) {
        if(bit > 0) bit -= 100;
        if(bit < 0) bit = 0;
        document.querySelector('#bit').value = bit;
    })

    function Random_1_8 () {
        let randomDigit = Math.floor(Math.random() * 8 + 1)
        return randomDigit
    }   

    function Random_4_7 () {
        let randomDigit = Math.floor(Math.random() * (7 - 4 + 1)) + 4
        return randomDigit
    }

    let rand = document.querySelectorAll(".rand");

    document.querySelector("#random-1-8").addEventListener('click', function() {
        for(let i = 0; i<rand.length; i++) {
            rand[i].classList.remove('active')
        }
        rand[0].classList.add('active')

        
    })

    document.querySelector("#random-4-7").addEventListener('click', function() {
        
        for(let i = 0; i<rand.length; i++) {
            rand[i].classList.remove('active')
        }
        rand[1].classList.add('active')
    })
    
    document.querySelector('#bit').value = bit;

    let userResult = 0;

    document.querySelector('#user-result').innerHTML = userResult;

    let userValue;
    let stopButton      = document.querySelector('#stop > button')
    let bitInput        = document.querySelector('#bit')
    let substractButton = document.querySelector('#substract > button')
    let addButton       = document.querySelector('#add > button')

    document.querySelector('#play').addEventListener('click', function() {

        stopButton.removeAttribute('disabled', 'disabled')
        stopButton.classList.remove('red')
        bitInput.setAttribute('disabled', 'disabled')
        bitInput.classList.add('red')

        substractButton.setAttribute('disabled', 'disabled')
        substractButton.classList.add('red')
        addButton.setAttribute('disabled', 'disabled')
        addButton.classList.add('red')
        let randomDigit;
        if(rand[0].classList.contains('active')) {
            randomDigit = Random_1_8();
        }
        if(rand[1].classList.contains('active')) {
            randomDigit = Random_4_7();
        } 
        bit = parseInt(document.querySelector('#bit').value, 10)
        userResult += randomDigit
        function printNumbersInterval() {
            var i = parseInt (document.querySelector('#user-result').textContent, 10)
            var timerId = setInterval(function() {
              userValue = document.querySelector('#user-result').innerHTML = i;
                console.log(userResult)
                if (i == userResult) {
                    clearInterval(timerId);
                }
              i++;
            }, 50);
          }
          // вызов
        if(userResult <= 20) {
            printNumbersInterval();
        }  
      
        // userValue = document.querySelector('#user-result').innerHTML = userResult;

        if(userResult > 20) {
            totalCredits -= bit
            document.querySelector('#total-credits').innerHTML = `$${totalCredits}`;
            RemoveDisabled()
            userResult = 0
            document.querySelector('#user-result').innerHTML = userResult;  
            document.querySelector('#stop > button').setAttribute('disabled', 'disabled')
        }
    
    })

    document.querySelector('#stop').addEventListener('click', function() {
        prize(userValue);
        
        RemoveDisabled()

        userResult = 0
        document.querySelector('#user-result').innerHTML = userResult;
        
        stopButton.setAttribute('disabled', 'disabled')
        stopButton.classList.add('red')
    })
    
    function RemoveDisabled() {
        bitInput.removeAttribute('disabled', 'disabled')
        bitInput.classList.remove('red')
        
        substractButton.removeAttribute('disabled', 'disabled')
        substractButton.classList.remove('red')
        
        addButton.removeAttribute('disabled', 'disabled')
        addButton.classList.remove('red')
    }


    function prize (userValue) {
        if(userValue > 16 && userValue <= 20 ) {
            switch(userValue) {
                case 17:
                return PercentToMoney(25, bit)
                case 18: 
                return PercentToMoney(50, bit)
                case 19:
                return PercentToMoney(100, bit)
                case 20: 
                return PercentToMoney(200, bit)
            }
        }

    }


    function PercentToMoney(percent, bit) {
        let result = percent / 100 * bit;
        // bit += result;
        totalCredits += result;
        c(totalCredits);
        document.querySelector('#total-credits').innerHTML = `$${totalCredits}`;
        return `You Win ${bit += result} Credits (${percent}$)`
    }



      




    function c (arg) {
        console.log(arg)
    }
};