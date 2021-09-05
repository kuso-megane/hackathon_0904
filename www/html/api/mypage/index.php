<?php

/**
 * @param void
 * 
 * @return json {questions: {{}, ...}, answers: {{}, ...}}
 * 
 */


use domain\mypage;

require_once '/var/www/Model/domain/mypage/index.php';


$input = json_decode(file_get_contents('php://input'), true); // array

$output = json_encode(mypage\index());

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;