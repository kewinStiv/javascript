var operacion = {
            operador: "",
            operadorant: "",
            numeroant: 0
        }


var calculadora = {
	init: function(){
		var self = this;

        // cambio de tamaño de tecla
		document.addEventListener('mousedown', function(event){
			var elemento = event.target;
			var tecla = document.getElementsByClassName('tecla');
			for(var i = 0; i<tecla.length; i++){
				if(elemento == tecla[i]){

					elemento.style.transform='scale(0.9,0.9)';
				}

			}
	
		});

		document.addEventListener('mouseup', function(event){
			var elemento = event.target;
			var tecla = document.getElementsByClassName('tecla');
			for(var i = 0; i<tecla.length; i++){
				if(elemento == tecla[i]){

					elemento.style.transform='scale(1,1)';
				}

			}
		});

        // fin codigo cambio de tamaño


        //codigo central 

		document.addEventListener('click', function(event){
			var tecla = event.target;
			var display = document.getElementById('display');

			if(display.innerHTML.length < 8){
			switch(tecla.id){
				case '0':
					console.log('presionastes 0');
					if(display.innerHTML == '0'){
						display.innerHTML = '0';
					}else{
						display.innerHTML+='0';
					}
					break;

				case '1':
					self.mostrar("1")

					break;

				case '2':
					self.mostrar("2")
		
					break;

				case '3':
					self.mostrar("3")
					break;

				case '4':
					self.mostrar("4")
					break;

				case '5':
					self.mostrar("5")
		
					break;

				case '6':
					self.mostrar("6")
		
					break;

				case '7':
					self.mostrar("7")
		
					break;

				case '8':
					self.mostrar("8")
		
					break;

				case '9':
					self.mostrar("9")
		
					break;

				case 'punto':
					if(display.innerHTML.indexOf('.') == -1){
						display.innerHTML += '.';
					}

					break;	

		
			}

		}else{
			display.innerHTML = display.innerHTML;
		}	

		switch(tecla.id){
			case 'on':
					display.innerHTML = '0';
		
				break;

			case 'sign':
				if(display.innerHTML == 0){
					display.innerHTML = '0';
				}else if(display.innerHTML.indexOf('-') == -1){
					display.innerHTML = '-'+display.innerHTML;
				}else if(display.innerHTML.indexOf('-') == 0){
					display.innerHTML = display.innerHTML.replace('-', '');
				}
		
				break;

			case 'mas':

				self.operacion("+")
				break;

			case 'menos':
			
				self.operacion("-")
				break;

			case 'por':
			
				self.operacion("*")
				break;

			case 'dividido':

				self.operacion("/")
				break;

			case 'igual':
			
				self.operacion("=")
				break;				
			}
		});		
	},

    mostrar: function(n){
       var num = display.innerHTML
       var self = this
       var digitos = 8
    
       if(num.indexOf(".") != -1){
        if (n =="."){
            n = ""
        }   
        digitos = 9
       } 
       
       if (num=="0" && n != "."){
           num = ""
       }
       if (operacion.operador.length > 0){
           num = ""
           operacion.operadorant = operacion.operador
           operacion.numeroant = parseFloat(display.innerHTML)
           operacion.operador = ""
       }
       if (display.innerHTML.length < digitos) {
           display.innerHTML = num + n
       }


	},

	operacion: function(Operador){

		switch(Operador){
            case "+":   
                        operacion.operador = Operador 
                        switch(operacion.operadorant) {
                            case "+": 
                                        operacion.numeroant = operacion.numeroant + parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                             case "-": 
                                        operacion.numeroant = operacion.numeroant - parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operandos.operador
                                        mostrarisplay()
                                        break
                            case "*": 
                                        operacion.numeroant = operacion.numeroant * parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                            case "/": 
                                        operacion.numeroant = operacion.numeroant / parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                        }                     
                        
                        break
            case "-": 
                       operacion.operador = Operador                       
                        switch(operacion.operadorant) {
                            case "+": 
                                        operacion.numeroant = operacion.numeroant + parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                             case "-": 
                                        operacion.numeroant = operacion.numeroant - parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                            case "*": 
                                        operacion.numeroant = operacion.numeroant * parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                            case "/": 
                                        operacion.numeroant = operacion.numeroant / parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                        }    
                        
                        break
            case "*": 
                        operacion.operador = Operador                       
                        switch(operacion.operadorant) {
                            case "+": 
                                        operacion.numeroant = operacion.numeroant + parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                             case "-": 
                                        operacion.numeroant = operacion.numeroant - parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                            case "*": 
                                        operacion.numeroant = operacion.numeroant * parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                            case "/": 
                                        operacion.numeroant = operacion.numeroant / parseFloat(display.innerHTML)
                                        display.innerHTML = operacion.numeroant
                                        operacion.operadorant = operacion.operador
                                        mostrardisplay()
                                        break
                        }    
                       
                        break
            case "/": 
                        operacion.operador = Operador                       
                        if (operacion.operadorant.length > 0){
                            operacion.numeroant = operacion.numeroant / parseFloat(display.innerHTML)
                            display.innerHTML = operacion.numeroant
                            mostrardisplay()
                        }  
                        
                        break
             case "=":  
                        switch(operacion.operadorant){
                            case "+" : 
                                        operacion.numeroant += parseFloat(display.innerHTML) 
                                        break
                            case "-" : 
                                        operacion.numeroant -= parseFloat(display.innerHTML) 
                                        break
                             case "/" : 
                                        operacion.numeroant /= parseFloat(display.innerHTML) 
                                        break
                             case "*" : 
                                        operacion.numeroant *= parseFloat(display.innerHTML) 
                                        break
                        }
                        display.innerHTML = operacion.numeroant
                        mostrardisplay()
                        operacion.operadorant = ""
                        operacion.operador = ""
                        break
        }
	},
};

function mostrardisplay(){
    var cadena = display.innerHTML
    var numero = parseFloat(cadena)
    digitos = 8
    if (cadena.indexOf(".") != -1){
        digitos++
    }
    if (cadena.indexOf("-")!= -1){
        digitos++
    }
    
    if (cadena.length > digitos){
        if (numero - numero.toFixed(0) == 0){
            display.innerHTML = numero
        }
         else {
             display.innerHTML = parseFloat(cadena).toPrecision(8)
         }
        
    }
}

calculadora.init();

