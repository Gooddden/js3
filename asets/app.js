
let number = +prompt ('Введите любое целое число');
console.log(`введенное число`);

    let Prime_number = true ;
    console.log(`flag1`);

for (let i=2 ; i < number ; i++ ){

    if (number % i == 0) {
        
        Prime_number = false;
        break;

    } else {
        
    let check = number / i;
    }

    }
    if(Prime_number){
        alert(`Число ${number}- простое`);

    } else {
            alert(`Число ${number}-составное`);
    }