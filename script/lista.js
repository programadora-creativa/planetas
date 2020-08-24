var usuario = prompt ("cual es tu peso?");
var planeta = parseInt(prompt("Elige un planeta.\n1 es mercurio\n2 es venus\n3 es tierra\n4 es marte\n5 es jupiter\n6 es saturno\n7 es urano\n8 es neptuno"));
var peso= parseInt(usuario);
var g_mercurio = 3.7;
var g_venus = 8.9;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_neptuno = 11.15;
var peso_final;
var nombre ="";
if(planeta ==1)
{ 
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "Mercurio";
}
else if(planeta ==2)
{ 
    peso_final=peso*g_venus/g_tierra;
    nombre = "Venus";
}
else if(planeta ==3)
{ 
    peso_final=peso*g_tierra/g_tierra;
    nombre = "Tierra";
}
else if(planeta ==4)
{ 
    peso_final=peso*g_marte/g_tierra;
    nombre = "Marte";
}
else if(planeta ==5)
{ 
    peso_final=peso*g_jupiter/g_tierra;
    nombre = "Jupiter";
}
else if(planeta ==6)
{ 
    peso_final=peso*g_saturno/g_tierra;
    nombre = "Saturno";
}
else if(planeta ==7)
{ 
    peso_final=peso*g_urano/g_tierra;
    nombre = "Urano";
}
else if(planeta ==8)
{ 
    peso_final=peso*g_neptuno/g_tierra;
    nombre = "Neptuno";
}
else
{ 
    peso_final= 400;
    nombre = " el Sol" ;
}
peso_final=parseInt(peso_final);
document.write("Tu peso en " +     nombre  +"  es :  <strong>" + peso_final + " kilos </strong>");
