<?php
/**
 * @param json {lang: string, code: string}
 * 
 * @return json {result: string}
 */


use domain\code_exe as code_exe;

$domainPath = '../../../Model/domain/';
require_once $domainPath . 'code_exe/interactor.php';

#test
$input = [];
#json_decode(file_get_contents('php://input')); //array

$output = json_encode(code_exe\interact($input));

#test
print $output;
