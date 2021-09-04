<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;

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
     * @return bool whether an exception is not thrown
     */
    public function create(string $title, string $content, $)
}