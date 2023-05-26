function operaciones(){
    let nume1, nume2,suma, resta,mul,div;
    nume1=parseInt(document.getElementById('num1').value);
    nume2=parseInt(document.getElementById('num2').value);
    suma=nume1+nume2;
    resta=nume1-nume2;
    mul=nume1*nume2;
    div=nume1/mune2;
    alert("la suma es: "+suma +"\nla resta es: "+resta  +"\nla multiplicacion es: "+mul +"\nla division es: "+div);
}