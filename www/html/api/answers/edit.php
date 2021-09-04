<?php

/**
 * @param json {answer_id: int}
 * 
 * @return json {question: {}, answer: {}}
 */

use domain\answers as answers;

require_once '/var/www/Model/domain/answers/edit.php';

$input = json_decode(file_get_contents('php://input'), true);

$output = json_encode(answers\edit($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;