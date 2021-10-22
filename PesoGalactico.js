function Calcular(){
	//declarar las variables
	var m,g,p;
	//recuperarlos valores
	m=parseFloat(document.getElementById("m").value);
	g=parseFloat(document.getElementById("g").value);
	//realizar la operacion
	pe=(m*g)/9.81;
    //mostrar el resultado
	document.getElementById("Peso").value=pe;
}
function Nuevo(){
    document.getElementById("m").value="";
	document.getElementById("g").value="";
	document.getElementById("Peso").value="";
		}
