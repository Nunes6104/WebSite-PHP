/*window.onload = function(){
    let x;
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    x = 3.4;
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    x = 'Istec';
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    x = null;
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    x = false;
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    x = [1, 2, 3, 4];
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x}`);
    for(v in x){
        console.log(v);
    }
    let soma = 0;
    x.forEach((v)=>{
        soma += v;
    });
    console.log(`Soma = ${soma}`);
    console.log(x.join("*")); //mosrtar valores do array
    //prototype
    ze = {num: 3, nome:'José', ver:function(){
        console.log(`eu tenho o número ${this.num} e chamo-me ${this.nome}`)
    }};
    ze.ver.call(x);
    console.log(ze);
    ze.ver();
    console.log("-----------------------------------");
    //x.prototype.xpto=234;
    console.log(x);
    x = function(num){
        return 2 * num;
    };
    const z = Symbol("Curso");
    console.log(`Tipo de Variável: ${typeof(x)} Valor: ${x} resultado: ${x(3)} ${x.prototype}`);
    console.log(`Tipo de Variável: ${typeof(z)}`);
    ss = {z: 345};
    console.log(ss);

};*/

window.onload = function(){
    let txtinput = document.getElementById("txtinput");
    let btndobro = document.getElementById("btndobro");
    let labelresult = document.getElementById("labelresult");
    btndobro.addEventListener("click", (evt)=>{
        evt = evt?evt: window.event;
        evt.preventDefault();
    });
    labelresult.innerHTML = dobro(parseInt(txtinput));
};
//----------------------windo onload

let dobro =(n)=>parseInt(n)*2;