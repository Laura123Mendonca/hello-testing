<?php 

        $con = mysqli_connect('localhost','root','','datos_personales');
        if(!$con)
        {
            die (' Please Your Connectino '.mysqli_error());
        }

?>