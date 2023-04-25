/*function parimp(n) {
    if(n%2===0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

var res = parimp(11)
console.log(res)*/

/*function soma(n1=0,n2=0) {
    return (n1 + n2)
} 
console.log(soma(3,6))*/

/*function fatorial(x) {
    var c = 1
    for (var n=x;n>=1;n--) {
        c = c*n
    }
    return c 
}
var res = fatorial(9)
console.log(res)*/

/*function soma(x) {
    var c = Number()
    for (x;x>=1;x--) {
        c = c + x
    }
    return c

}
var res = soma(7)
console.log(res)*/

/*function fatorial(x) {
    if (x===1) {
        return (1)
    } else {
        return(x * fatorial(x - 1))
    }

}
var res = fatorial(5)
console.log (res)*/

var amigo = {nome:'josé',peso:85, engordar(p=0){
    console.log('Engordou')
    amigo.peso = amigo.peso + p
    return amigo.peso
}}
console.log(`${amigo.nome} engordou para ${amigo.engordar(5)}`)