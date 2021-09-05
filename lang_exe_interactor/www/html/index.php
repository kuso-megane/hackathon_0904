<?php

/**
 * @param post {lang: string, code: string}
 * 
 * @return json {result: string}
 */

require_once '/var/www/config.php';

$input = json_decode(file_get_contents('php://input'), true); //array

$lang = $input['lang'];
$code = "\"" .  $input['code'] . "\"";

$docker_img = LANG_IMG[$lang];
$exe_command = LANG_EXE_COMMANDS[$lang];

$result = shell_exec('docker run --rm ' . $docker_img . $exe_command . $code);


header("Content-type: application/json; charset=UTF-8");
echo json_encode(['result' => $result]);
