<?php

namespace domain\questions;

use config\AppConfig;
use dataAccess\QuestionsTable;

require_once '/var/www/config/Appconfig.php';
require_once '/var/www/Model/dataAccess/QuestionsTable.php';

function _list(array $input): array
{
    $page = $input['page'];

    $question_num_per_page = AppConfig::QUESTION_NUM_PER_PAGE;

    $rows = (new QuestionsTable)->findAll($page, $question_num_per_page);

    return [
        'questions' => $rows,
        'question_num_per_page' => $question_num_per_page
    ];
}
