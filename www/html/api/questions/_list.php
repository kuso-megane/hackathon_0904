<?php

/**
 * @param json {page: int}
 *
 * @return json {Questions: {}, question_num_per_page: int, questions_sum: int}
 */


use domain\questions as questions;

$domainPath = '/var/www/Model/domain/';
require_once $domainPath . 'questions/_list.php';

$input = json_decode(file_get_contents('php://input'), true); //array

$output = json_encode(questions\_list($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;

