let vector_uno = Array();
let vector_dos = Array();
let num

for (let i = 1; i <= 5; i++){
    vector_uno[i] = Number(prompt('Ingrese el num.' + i +' para el primer array'))
    num = vector_uno[i]
    while(vector_uno[i] <= vector_uno[i-1]){
    vector_uno[i] = Number(prompt('Ingrese un numero valido para el num'+i))   
    }

}
for (let i = 1; i <= 5; i++){
    vector_dos[i] = Number(prompt('Ingrese el num.' + i +' para el segundo array'))
    num = vector_dos[i]
    while(vector_dos[i] <= vector_dos[i-1]){
    vector_dos[i] = Number(prompt('Ingrese un numero valido para el num'+i))   
    }

}

let vector_lista = vector_uno.concat(vector_dos);
vector_lista.sort(function(a,b){
    return a - b;
});
console.log(vector_lista);


