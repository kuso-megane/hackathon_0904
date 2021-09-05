<?php

namespace dataAccess;

use dataAccess\helpers\Connection as Connection;
use PDO;

require_once '/var/www/Model/dataAccess/helpers/Connection.php';



class UsersTable
{
    const TABLENAME = 'Users';

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


    /**
     * @return array|NULL
     * if no record is found, return NULL
     */
    public function findByName(string $name): ?array
    {
        $sql = 'SELECT * FROM ' . self::TABLENAME . ' WHERE name = :name;';

        $sth = $this->dbh->myPrepare($sql);
        $sth->execute([':name' => $name]);

        return $sth->fetchAll(PDO::FETCH_ASSOC)[0];
    }
}