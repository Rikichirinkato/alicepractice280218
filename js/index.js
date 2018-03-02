//F(n) = F(n-1) + F(n-2)

const lim = parseInt(prompt('enter limit'));

function fibo(lim){
    let first = 1;
    let acum = first;
    let c;
    for(let i = 1; i < lim; i++){
        c = first;
        first = first + acum;
        acum = c;
    }
    document.write(acum)
}
fibo(lim);

