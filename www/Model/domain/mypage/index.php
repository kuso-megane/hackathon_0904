<?php

namespace domain\mypage;

use dataAccess\AnswersTable;
use dataAccess\QuestionsTable;
use dataAccess\UsersTable;
use Exception;

require_once '/var/www/Model/dataAccess/AnswersTable.php';
require_once '/var/www/Model/dataAccess/QuestionsTable.php';
require_once '/var/www/Model/dataAccess/UsersTable.php';


function index($input): array
{
    $name = $input['name'];

    try {
        $user_id = (new UsersTable)->findByName($name)['id'];

        $questions = (new QuestionsTable)->findAllByUser_id($user_id);
        $answers = (new AnswersTable)->findAllByUser_id($user_id);
    }
    catch (Exception $e) {
        #debug
        #echo $e->getMessage();
        return [];
    }

    
    return [
        'questions' => $questions,
        'answers' => $answers
    ];
}