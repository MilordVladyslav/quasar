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
        let rand = Math.floor(Math.random() * 8)
        c(rand);
    }   

    
    document.querySelector('#bit').value = bit;

    

    function c (arg) {
        console.log(arg)
    }
};