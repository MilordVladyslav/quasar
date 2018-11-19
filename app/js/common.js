window.onload = function() {
    'use strict'

    
    
    let bit = 500;
    document.querySelector('#add').addEventListener('click', function(e){
        bit += 100;
        c(bit);
        document.querySelector('#bit').value = bit;
    })
    document.querySelector('#bit').value = bit;

    function c (arg) {
        console.log(arg)
    }
};