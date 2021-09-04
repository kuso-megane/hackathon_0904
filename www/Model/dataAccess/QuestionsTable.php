<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;
use PDOException;

require_once '/var/www/Model/dataAccess/helpers/Connection.php';

class QuestionsTable
{
    const TABLENAME = 'Questions';
    private $dbh;

    public function __construct()
    {
        $this->dbh = (new Connection)->connect();
    }


    /**
     * @return array [all questions's rows like [id => int, title => string, ...]]
     */
    public function findAll(int $page, int $num_per_page): array
    {
        $sql = 'SELECT * FROM ' . self::TABLENAME . ' order by created_at ' . 'limit :start, :end;';
        $start = $num_per_page * ($page - 1);
        $end = $num_per_page * $page;

        $sth = $this->dbh->myPrepare($sql);
        $sth->bindValue(':start', $start, PDO::PARAM_INT);
        $sth->bindValue(':end', $end, PDO::PARAM_INT);
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_ASSOC);
    }


    /**
     * @return array|NULL [the question whose id is designated]
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
     * @return int the number of all questions
     * 
     */
    public function count()
    {
        return $this->dbh->query("SELECT count(*) as sum from " . self::TABLENAME . ';')->fetch(PDO::FETCH_ASSOC)['sum'];
    }


    /**
     * @return bool whether an exception is not thrown
     */
    public function create(string $title, string $content, string $lang, string $code,
    int $user_id)
    {
        $sql = 'INSERT INTO ' . self::TABLENAME . 
        ' VALUES(id = 0, title = :title, content = :content, lang = :lang, code = :code, user_id = :user_id);';

        $sth = $this->dbh->myPrepare($sql);
        $sth->execute(
            [':title' => $title]
        );
    }
}