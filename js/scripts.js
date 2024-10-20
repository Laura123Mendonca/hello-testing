$(document).ready(function()

{
    insertar_registro();
})

function  insertar_registro()
{
    var usuario=$('#Usuario').val()
    var password=$('#Password').val()
    var name=$('#Name').val()
    var apellido=$('#Apellido').val()
    var dni=$('#dni').val()
    var fechaDeNacimiento=$('#FechaDeNacimiento').val()
    var masculino=$('#masculino').val()
    var femenino=$('#femenino').val()
    var nobinario=$('#nobinario').val()
    var pais=$('#Pais').val()
    var provincia=$('#Provincia').val()
    var localidad=$('#Localidad').val()
    var adress=$('#Adress').val()
    var telefono=$('#Telefono').val()
    var fav_language=$('#soltero').val()
    var fav_language=$('#casado').val()
    var fav_language=$('#divorciado').val()
    var fav_language=$('#si').val()
    var fav_language=$('#no').val()
    var subject=$("").val()

 //vamos a definir el codigo correspondiente al evento click en el boton
   $(document).on('click','#btn_enviar',function()
   {
    // aca vamos hacer la validacion de front end
    // si la validacion dio correcta vamos a ejecutar una llamada ajax
    // la llamada ajax va a enviar los datos del frontend hacia el backend
    $.ajax(
    {
        url : 'insertar.php',
        method : 'post',
        data : {uuser:usuario,upassword:password,unombre:nombre,uapellido:apellido,udni:dni,
               ufechadenacimiento:fechaDeNacimiento,umasculino:masculino,ufemino:femenino,unobinario:nobinario,
               upais:pais,uprovincia:provincia,ulocalidad:localidad,uadress:adress,utelefono:telefono,}
        //uuser:pepe en el input ingrese pepe
    }




    )

   }

)

}






function funcion1()
{ 
let x;
x=parseInt(document.getElementById("num").value);
let text;
if ( x<1 || x>10)
{
    text= "Ingreso no valido";
}
else
{
    text = "ingreso valido";
}
x= x+1;
document.getElementById("demo").innerHTML=text;
document.getElementById("res").innerHTML=x.toString()}

function sumar(){ 

    let x;
    x=parseInt(document.getElementById("num").value);
    let p;
    p=parseInt(document.getElementById("num1").value);
    let res;
    
    let text;
    if ( x<1 || x>10)
    {
        text= "Ingreso no valido";
    }
    else
    {
        text= "ingreso valido";
    }
    res= x+p;
        
    document.getElementById("res").innerHTML=res.toString();
    }
    function restar()
    {
        let x;
        x=parseInt(document.getElementById("num").value);
        let p;
        p=parseInt(document.getElementById("num1").value);
        let res;
        
        let text;
        if ( x<1 || x>10)
        {
            text= "Ingreso no valido";
        }
        else
        {
            text= "ingreso valido";
        }
        res= x-p;
        document.getElementById("res").innerHTML=res.toString();
        }
        function multiplicar(){
            let x;
            x=parseInt(document.getElementById("num").value);
            let p;
            p=parseInt(document.getElementById("num1").value);
            let res;
            
            let text;
            if ( x<1 || x>10)
            {
                text= "Ingreso no valido";
            }
            else
            {
                text= "ingreso valido";
            }
            res= x*p;
            document.getElementById("res").innerHTML=res.toString();
            }
            function dividir(){
                let x;
                x=parseInt(document.getElementById("num").value);
                let p;
                p=parseInt(document.getElementById("num1").value);
                let res;
                
                let texto;
                if ( x<1 || x>10)
                {
                    texto= "Ingreso no valido";
                }
                else
                {
                    texto= "ingreso valido";
                }
                res= x/p;
                document.getElementById("res").innerHTML=res.toString();
                }
            
                function validacion()
                {
                    var usuario = document.getElementById("Usuario").value;
                    var password= document.getElementById("Password").value;
                    var resultado;
                    
                    console.log("entro");
                    alert("entro");
                    //Validación de que el email este completo
                    //alert(nombre + " " + apellido);
                    
                    if (usuario == "" || password =="") {
                        alert ("Todos los campos son obligatorios");
                        //return false;
                    } else {
                      alert('Los datos ingresados son correctos');  }  
                      return true;
                    
                      //console.log(validateEmail("javier@g,ail.com"));
                    if(validateEmail())
                        {
                            alert('El mail esta correcto');                
                        }
                        else
                        {
                            alert('el mail no esta correcto');    
                        }
                      
                      
                    
                      return true;     
                }
                
                function validateEmail(usario) {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(usario);
                  }
                function validatePassword(password)
                 {
                    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
                    return re.test(password);
                    
                }
               function validacion()
                {
                    var  nombre = document.getElementById("Name").value;
                    var  direccion = document.getElementById("Address").value;
                    //const vehiculo = document.querySelectorAll('input[name="vehiculo"]');
                    var email = document.getElementById( "Email" ).value;
                    var resultado;
                    
                    console.log("entro");
                    alert("entro");
                    //Validación de que el email este completo
                    //alert(nombre + " " + apellido);
                    
                    if (nombre == "" || direccion == "" || email =="") {
                        alert ("Todos los campos son obligatorios");
                        //return false;
                    } else {
                      //alert('Los datos ingresados son correctos');    
                      //return true;
                    }
                      //console.log(validateEmail("javier@g,ail.com"));
                    if(validateEmail())
                        {
                            alert('El mail esta correcto');                
                        }
                        else
                        {
                            alert('el mail no esta correcto');    
                        }
                      if(vehiculo.checked)
                      {
                          alert('Los datos ingresados son correctos');    
                          }
                          else
                          {
                              alert ('Debe seleccionar una opción en el campo Vehículo') ;  
                          }
                      
                    
                      return true;     
                }
                
                function validateEmail(email) {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(email);
                  }
                
                function funcion1() {
                    //Toma el valor del input con el id="num" y lo guarda en la variable x
                    let x;  // define una variable llamada x 
                    x = parseInt(document.getElementById("num").value);
                    // chequea el valor ingesado
                    let texto;
                    if ( x < 1 || x > 10) // tengo tres condiciones con que una sea verdadera entra al if
                    {     
                      texto = "Ingreso no valido";
                    } 
                    else 
                    {
                      texto = "Ingreso valido";
                    }
                  
                    x = x+1;
                    document.getElementById("demo").innerHTML = texto;
                    document.getElementById("res").innerHTML = x.toString();// convierte a string para mostrarlo
                  }
                  // van a crear otro archivo html
                  // En el html van a colocar 2 inputs y un boton
                  // el boton va a llamar a la funcion sumar()
                // la funcion sumar va a sumar los dos valores ingresados en los inputs
                // y mostrar el resultado en el parrafo con el id="res"*/