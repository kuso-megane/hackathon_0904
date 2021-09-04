<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;

require_once '/var/www/Model/dataAccess/helpers/Connection.php';

class AnswerTable
{
    const TABLENAME = 'Answers';
    private $dbh;

    public function __construct()
    {
        $this->dbh = (new Connection)->connect();
    }


    /**
     * @return array|NULL
     * [the answer's rows whose question_id is designated one like [id => int, title => string, ...]]
     * if no record is found, return NULL
     */
    public function findByQuestion_id(int $question_id): ?array
    {
        $sql = 'SELECT * FROM ' . self::TABLENAME . ' where question_id = :question_id;';

        $sth = $this->dbh->myPrepare($sql);
        $sth->bindValue(':question_id', $question_id, PDO::PARAM_INT);
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_ASSOC)[0];
    }
}