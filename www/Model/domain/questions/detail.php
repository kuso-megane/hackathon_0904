<?php

namespace domain\questions;

use dataAccess\QuestionsTable;
use dataAccess\AnswerTable;

require_once '/var/www/Model/dataAccess/QuestionsTable.php';
require_once '/var/www/Model/dataAccess/AnswersTable.php';

function detail(array $input): array
{
    $question_id = $input['question_id'];

    $question = (new QuestionsTable)->findById($question_id);
    if ($question === NULL) {
        $question = [];
    }
    $answers = (new AnswerTable)->findByQuestion_id($question_id);
    if ($answers === NULL) {
        $answers = [];
    }


    return [
        'question' => $question,
        'answers' => $answers
    ];
}