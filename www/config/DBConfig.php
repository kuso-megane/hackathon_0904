<?php

namespace config;

class DBConfig
{
    const MAIN_DB = 'app';
    const TEST_DB = 'test_db';

    private $db_host;
    private $db_pass;

    public function __construct()
    {
        #ひとまずdevのみ
        $this->db_host = 'db';
        $this->db_pass = ['root' => 'root'];
    }


    public function getDBHost()
    {
        return $this->db_host;
    }


    public function getDBPass()
    {
        return $this->db_pass;
    }
}