//F(n) = F(n-1) + F(n-2)

const lim = parseInt(prompt('enter limit'));

function fibo(lim){
    let a = 1;
    let b = a;
    let c;
    for(let i = 1; i < lim; i++){
        c = a;
        a = a + b;
        b = c;
    }
    document.write(b)
}
fibo(lim);