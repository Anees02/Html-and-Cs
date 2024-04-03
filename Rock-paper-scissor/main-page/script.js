function subscribe(){
    var btn = document.querySelector('.js-subscribe-button');
    if(btn.innerHTML == 'Subscribed'){
        btn.innerHTML = 'Subscribe';
        btn.classList.remove("js-subscribed");
    }
    else{
        btn.innerHTML = 'Subscribed';
        btn.classList.add("js-subscribed");
    }
}

function calculateTotal(){
    const input = document.querySelector('.js-cost-input');
    let cost = Number(input.value);
    if(cost < 40){
        cost += 10;
    }
    document.querySelector('.total-cost')
        .innerHTML = `$${cost}`;
}


function keydownInput(event){
    let key = event.key;
    if(key == 'Enter'){
        calculateTotal();
    }else if(key == 'Escape'){
        document.querySelector('.js-cost-input')
        .innerHTML = '';
    }
}