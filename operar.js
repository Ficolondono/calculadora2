var que=function () {
	var n1=document.getElementById('irque');
	var n2=document.getElementById('nada');

    if(n1.className=="irque")
    {
    	console.log("hola");
    	n2.className="que";
    }
}

var eje=function () {
	var n3=document.getElementById('ireje');
	var n4=document.getElementById('nada');

    if(n3.className=="ireje")
    {
    	console.log("hola");
    	n4.className="eje";
    }
}

var pro=function () {
	var nu1=document.getElementById('nn1').value;
	var nu2=document.getElementById('nn2').value;
	var nu3=document.getElementById('nn3').value;
	var n5=document.getElementById('irpro');
	var n6=document.getElementById('nada');

	

    if(n5.className=="irpro")
    {
    	console.log("hola");
    	n6.className="Opera";
    }
}

var dar=function () {
    var nu1=document.getElementById('nn1').value;
	var nu2=document.getElementById('nn2').value;
	var nu3=document.getElementById('nn3').value;
	var opera=(parseInt(nu1)+parseInt(nu2)-parseInt(nu3));


    console.log(opera);
    alert('El resultado de tu operacion es:'+ opera); 

}