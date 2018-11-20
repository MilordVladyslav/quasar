window.onload = function() {
    'use strict'

    
    let totalCredits = 1234;

    document.querySelector('#total-credits').innerHTML = `$${totalCredits}`;

    let bit = 500;

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
        let rand = Math.floor(Math.random() * 8 + 1)
        c(rand)
        return rand
    }   

    function Random_4_7 () {
        let rand = Math.floor(Math.random() * (7 - 4 + 1)) + 4
        c(rand)
        return rand
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

    document.querySelector('#play').addEventListener('click', function() {
        if(rand[0].classList.contains('active')) {
            Random_1_8();
        }
    })

    function c (arg) {
        console.log(arg)
    }
};