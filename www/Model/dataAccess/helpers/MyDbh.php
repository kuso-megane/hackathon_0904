<?php

namespace dataAccess\helpers;

use PDO;
use PDOException;
use PDOStatement;

class MyDbh extends PDO
{
    const EXECUTE = 1;
    const ONLY_PREPARE = 2;

    /**
     * truncate table by ignoring foreign key constrict
     * @param string $tablename
     * 
     * @return void
     */
    public function truncate(string $tablename):void
    {
        $this->exec('SET foreign_key_checks=0');
        $this->exec('TRUNCATE TABLE ' . $tablename);
        $this->exec('SET foreign_key_checks=1');     
    }


    /**
     * prepare sql statement. If preparing fails, echo error message.
     * @param string $command
     * @param array $options
     * 
     * @return PDOStatement
     */
    public function myPrepare(string $command, array $options = []):PDOStatement
    {
        try {

            $sth = $this->prepare($command, $options);

        } catch (PDOException $e) {

            $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
            foreach($trace as $arr) {
                $class = $arr['class'];
                $function = $arr['function'];
                $type = $arr['type'];
                echo "\n#Stacktree: {$class}{$type}{$function}()";
            }
            echo "\nPDO::prepare() failed\ngiven command: {$command};\n {$e->getMessage()}\n";

        }

        return $sth;
    }
