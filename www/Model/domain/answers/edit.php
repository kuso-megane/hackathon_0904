<?php

namespace domain\answers;

use dataAccess\AnswersTable;
use dataAccess\QuestionsTable;

require_once '/var/www/Model/dataAccess/QuestionsTable.php';
require_once '/var/www/Model/dataAccess/AnswersTable.php';


function edit(array $input)
{
    $answer_id = $input['answer_id'];

    $answer = (new AnswersTable)->findById($answer_id);
    if ($answer === NULL) {
        $answer = [];
        $question = [];
    }
    else {
        $question_id = $answer['question_id'];
        $question = (new QuestionsTable)->findById($question_id);
        if ($question === NULL) {
            $question = [];
        }
    }

    
    return [
        'question' => $question,
        'answer' => $answer
    ];
}

