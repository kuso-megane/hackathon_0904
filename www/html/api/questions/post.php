<?php

/**
 * @param json {question: {}, 'name': }
 * 
 * @return json {is_successful: bool, error: string, question_id: int}
 */

use domain\questions as questions;

require_once '/var/www/Model/domain/questions/post.php';

$input = json_decode(file_get_contents('php://input'), true);

$output = json_encode(questions\post($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;