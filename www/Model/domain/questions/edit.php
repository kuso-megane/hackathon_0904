<?php

namespace domain\questions;

use dataAccess\AnswersTable;
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

    $answers = (new AnswersTable)->findAllByQuestion_id($question_id);
    if (count($answers) > 0) {
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