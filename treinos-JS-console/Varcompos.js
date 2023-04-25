var valores = [9,12,7,6,5,4,3,2,1]
var conta = ''
for (var c in valores) {
    conta += `${valores[c]} oi `
    console.log(conta) 
    

    
}
var d = 0
for (d;d<=(valores.length - 1);d++) {
console.log(`o número ${valores[d]} está na posição ${d}`)
}