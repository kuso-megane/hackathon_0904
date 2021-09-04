<?php

/**
 * @param post {code: string}
 * 
 * @return json {result: string}
 */


$input = json_decode(file_get_contents('php://input'), true); //array

$code = "\"" .  $input['code'] . "\"";

#debug
echo $code;

shell_exec('touch tmp.py');
shell_exec('echo ' . $code . ' >> tmp.py');
$result = shell_exec('python tmp.py');
#shell_exec('rm tmp.py');


header("Content-type: application/json; charset=UTF-8");
echo json_encode(['result' => $result]);
