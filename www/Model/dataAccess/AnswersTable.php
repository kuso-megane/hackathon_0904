<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;

require_once '/var/www/Model/dataAccess/helpers/Connection.php';

class AnswersTable
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


    /**
     * @return array|NULL answer
     * if no record is found, return NULL
     */
    public function findById(int $id): ?array
    {
        $sql = 'SELECT * FROM ' . self::TABLENAME . ' WHERE id = :id;';

        $sth = $this->dbh->myPrepare($sql);
        $sth->bindValue(':id', $id, PDO::PARAM_INT);
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_ASSOC)[0];
    }


    /**
     * @return void
     */
    /**
     * @return void
     */
    public function create(string $title, string $content, ?string $lang, ?string $code,
    int $user_id, int $question_id)
    {
        $sql = 'INSERT INTO ' . self::TABLENAME . 
        ' VALUES(0, :title, :content, :lang, :code, :user_id, :question_id, :created_at, :modified_at, 0);';

        $now = date('Y:m:d:H:i:s');

        $sth = $this->dbh->myPrepare($sql);
        $sth->execute(
            [
                ':title' => $title, ':content' => $content, ':lang' => $lang, ':code' => $code,
                ':user_id' => $user_id, ':question_id' => $question_id, ':created_at' => $now, ':modified_at' => $now
            ]
        );
    }


    /**
     * @return void
     * 
     */
    public function update(int $id, string $title, string $content, ?string $lang, ?string $code)
    {
        $sql = 'UPDATE ' . self::TABLENAME . ' SET title = :title, content = :content, lang = :lang,
        code = :code, modified_at = :modified_at' . ' where id = :id;';
        $now = date('Y:m:d:H:i:s');

        $sth = $this->dbh->myPrepare($sql);
        $sth->execute([
           ':id' => $id, ':title' => $title, ':content' => $content, ':lang' => $lang, ':code' => $code,
           ':modified_at' => $now
        ]);

    }
}