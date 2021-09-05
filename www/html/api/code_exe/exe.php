<?php
/**
 * @param json {lang: string, code: string}
 * 
 * @return json {result: string}
 */


use domain\code_exe as code_exe;

$domainPath = '/var/www/Model/domain/';
require_once $domainPath . 'code_exe/exe.php';

$input = json_decode(file_get_contents('php://input')); //array

$output = json_encode(code_exe\exe($input));

echo $output;
