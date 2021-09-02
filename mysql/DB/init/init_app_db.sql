drop database if exists app;
create database app;
use app;

drop TABLE if exists TestTable;
create table TestTable(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name varchar(100)
);
