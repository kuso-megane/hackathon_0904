<?php

/**
 * @param json {answer: {}}
 * 
 * @return json {is_successful: bool, error: string}
 */

use domain\answers as answers;

require_once '/var/www/Model/domain/answers/post.php';

$input = json_decode(file_get_contents('php://input'), true);

$output = json_encode(answers\post($input));

require_once '/var/www/helpers/apiCommonHeader.php';

echo $output;