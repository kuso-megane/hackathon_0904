<?php

namespace domain\questions;

use dataAccess\QuestionsTable;
use dataAccess\AnswersTable;

require_once '/var/www/Model/dataAccess/QuestionsTable.php';
require_once '/var/www/Model/dataAccess/AnswersTable.php';

function detail(array $input): array
{
    $question_id = $input['question_id'];

    $question = (new QuestionsTable)->findById($question_id);
    if ($question === NULL) {
        $question = [];
    }
    $answers = (new AnswersTable)->findAllByQuestion_id($question_id);


    return [
        'question' => $question,
        'answers' => $answers
    ];
}