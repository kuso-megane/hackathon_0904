<?php

namespace domain\answers;

use dataAccess\AnswersTable;
use Exception;


require_once '/var/www/Model/dataAccess/AnswersTable.php';


function post(array $input): array
{
    $posted_answer = $input['answer'];
    foreach($posted_answer as $key => $value) {
        $$key = $value;
    }


    $isNew = ($id === NULL) ? TRUE : FALSE;

    $is_successful = TRUE;

    //validation
    if ($posted_answer['title'] === NULL) {
        $is_successful = FALSE;
        $error = 'titleが空です。';
    }
    else if ($posted_answer['content'] === NULL) {
        $is_successful = FALSE;
        $error = '回答内容が空です。';
    }
    else {
        try {
            if ($isNew) {
                (new AnswersTable)->create($title, $content, $lang, $code, $user_id, $question_id);
            }
            else {
                (new AnswersTable)->update($id, $title, $content, $lang, $code);
            }
        }
        catch(Exception $e) {
            $is_successful = FALSE;
            $error = $e->getMessage();
        }
    }

    return [
        'is_successful' => $is_successful,
        'error' => $error
    ];
}