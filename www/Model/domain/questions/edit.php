<?php

namespace domain\questions;

use dataAccess\AnswerTable;
use dataAccess\QuestionsTable;

require_once '/var/www/Model/dataAccess/questionsTable.php';
require_once '/var/www/Model/dataAccess/AnswersTable.php';

function edit(array $input): array
{
    $question_id = $input['question_id'];

    $question = (new QuestionsTable)->findById($question_id);
    if ($question === NULL) {
        $question = [];
    }

    $answers = (new AnswerTable)->findByQuestion_id($question_id);
    if ($answers !== NULL) {
        $is_answered = TRUE;
    }
    else {
        $is_answered = FALSE;
    }

    return [
        'question' => $question,
        'is_answered' => $is_answered
    ];
}