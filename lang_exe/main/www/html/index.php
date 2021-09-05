<?php

/**
 * @param post {lang: string, code: string}
 * 
 * @return json {result: string}
 */


#コンパイル不必要の言語のみ

require_once '/var/www/config.php';

$input = json_decode(file_get_contents('php://input'), true); //array

$lang = $input['lang'];
$code = "\"" .  $input['code'] . "\"";

$exe_command = COMMAND[$lang];
$filename = '/mnt/exe.' . EXT[$lang];
$container = CONTAINER[$lang];


shell_exec('touch ' . $filename);
shell_exec('chmod 755 ' . $filename);
shell_exec('echo ' . $code . ' >> ' . $filename);


$result = shell_exec('docker-compose exec ' . "$container $exe_command $filename");

shell_exec('rm ' . $filename);

header("Content-type: application/json; charset=UTF-8");
echo json_encode(['result' => $result]);
