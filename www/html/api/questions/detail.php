<?php

/**
 * @param json {question_id: int}
 * 
 * @return json {question: {}, answers: {}}
 */

use domain\questions as questions;

require_once '/var/www/Model/domain/questions/detail.php';

$input = json_decode(file_get_contents('php://input'), true); //array

$output = json_encode(questions\detail($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;