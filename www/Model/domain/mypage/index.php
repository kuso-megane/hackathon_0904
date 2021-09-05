<?php

namespace domain\mypage;

use dataAccess\AnswersTable;
use dataAccess\QuestionsTable;

require_once '/var/www/Model/dataAccess/AnswersTable.php';
require_once '/var/www/Model/dataAccess/QuestionsTable.php';


function index(): array
{
    $user_id = 1; //仮

    $questions = (new QuestionsTable)->findAllByUser_id($user_id);
    $answers = (new AnswersTable)->findAllByUser_id($user_id);

    return [
        'questions' => $questions,
        'answers' => $answers
    ];
}