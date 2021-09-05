<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;

require_once '/var/www/Model/dataAccess/helpers/Connection.php';



class UsersTable
{
    const TABLENAME = 'UsersTable';

    private $dbh;


    public function __construct()
    {
        $this->dbh = (new Connection)->connect();
    }


    /**
     * @return array|NULL
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
}