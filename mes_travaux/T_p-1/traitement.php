$nom= securiser($_POST["name"][0]);
$mail= securiser($_POST["name"][1]);
$comment= securiser($_POST["name"][2]);

function securiser($var){
    $var= stripslashes($var);
    $var = strip_tags($var);
    $var= trim($var);
    return $var;
}