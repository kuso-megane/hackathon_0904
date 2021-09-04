<?php

/**
 * @param json {question_id: int}
 * 
 * @return json {question: {}, is_answered: bool}
 */

use domain\questions as questions;

require_once '/var/www/Model/domain/questions/edit.php';

$input = json_decode(file_get_contents('php://input'), true);

$output = json_encode(questions\edit($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;