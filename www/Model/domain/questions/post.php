<?php

namespace domain\questions;

use dataAccess\QuestionsTable;
use Exception;
use PDOException;

require_once '/var/www/Model/dataAccess/QuestionsTable.php';


function post(array $input): array
{
    $posted_question = $input['question'];
    foreach($posted_question as $key => $value) {
        $$key = $value;
    }


    $isNew = ($id === NULL) ? TRUE : FALSE;

    $is_successful = TRUE;

    //validation
    if ($posted_question['title'] === NULL) {
        $is_successful = FALSE;
        $error = 'titleが空です。';
    }
    else if ($posted_question['content'] === NULL) {
        $is_successful = FALSE;
        $error = '質問内容が空です。';
    }
    else {
        try {
            if ($isNew) {
                (new QuestionsTable)->create($title, $content, $lang, $code, $user_id);
            }
            else {
                (new QuestionsTable)->update($id, $title, $content, $lang, $code);
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