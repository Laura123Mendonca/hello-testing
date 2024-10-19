<?php
     require_once('conexion.php');
     function InsetarRecord()
{
    global $con;
    $UserName = $_POST['UName'];
    $UserEmail = $_POST['UEmail'];

    $query =" insert into usuarios(UserName,UserEmail) values('$UserName','$UserEmail')";
    $result = mysqli_query($con,$query);
    if($result)
    {
        echo 'El registro se creo exitosamente';
    }
    else
    {
        echo 'Por favor chequear la Query'
         
    }
} 