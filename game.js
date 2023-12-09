var xp = 1000
var health = 100
var gold = 1000

var healthtag = document.querySelector('.health')
healthtag.innerHTML = health

var xptag = document.querySelector('.xp')
xptag.innerHTML = xp

var goldtag = document.querySelector('.gold')
goldtag.innerHTML = gold



function healthf(x){
    if (x == 'inc' & health < 100){
        health = health + 10
        healthtag.innerHTML  =  '&#129657; '+health


    }else if (x == 'dec' & health >= 10 ){
        health = health - 10
        healthtag.innerHTML  =  '&#129657; '+health

    }
}

function xpf(x){
    if (x == 'inc'){
        xp = xp + 100
        xptag.innerHTML  = '&#9195; '+ xp
    }
}

function goldf(x){
    if (x == 'inc' & gold < 1500){
        gold = gold + 50
        goldtag.innerHTML  = '&#129689; '+ gold

    }else if (x == 'dec' & gold >= 15 ){
        gold = gold - 25
        goldtag.innerHTML  = '&#129689; '+ gold

    }
}





