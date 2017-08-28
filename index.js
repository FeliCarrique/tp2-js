
var diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]
var dia= (prompt("escribe un dia de la semana"))



	switch (dia) { 
	   	case diasDeLaSemana[5]:
	   	case diasDeLaSemana[6]:
	   		console.log("es fin de semana")
	   	break
	   	case diasDeLaSemana[0]:
	   	case diasDeLaSemana[1]:
	   	case diasDeLaSemana[2]:
	   	case diasDeLaSemana[3]:
	   	case diasDeLaSemana[4]:
	   		console.log("no es fin de semana")
	   	default: 
	   		console.log("eso no es un día de la semana")
	   		
	}
