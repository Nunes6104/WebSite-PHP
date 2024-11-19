<?php 


if(isset($_REQUEST["num"])){
    $n = intval($_REQUEST["num"]);
    $resposta["num"] = $n;
    $resposta["dobro"] = 2 * $n;
}
echo json_encode( $resposta);


//const escola = "ISTEC";
//define ("nl", "<br/>");
//$idade = 22.8;
//$nome = 'Jose';
//$ok = true;
//$rslt = "$nome tem $idade";
//print ($idade);
//print $nome;
//echo $rslt;
//echo $rslt . " - " . $ok;
//$rslt2 = "$nome tem $idade";