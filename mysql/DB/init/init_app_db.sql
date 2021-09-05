drop database if exists app;
create database app;
use app;

drop TABLE if exists Users;
create table Users(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL UNIQUE,
    password varchar(200) NOT NULL,
    locked_time varchar(50) default "2021:09:04:00:00:00",
    fail_count TINYINT UNSIGNED NOT NULL default 0
);


drop TABLE IF exists Questions;
create Table Questions(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    content varchar(1000) NOT NULL default "",
    lang varchar(100) default NULL,
    code varchar(1000) default "",
    user_id INT UNSIGNED,
    created_at varchar(50) default "2021:09:04:00:00:00",
    modified_at varchar(50) default "",
    is_deleted boolean default 0,

    CONSTRAINT fk_Questions_Users_id
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE SET NULL ON UPDATE CASCADE
);


drop TABLE IF exists Answers;
create Table Answers(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    content varchar(1000) NOT NULL default "",
    lang varchar(100) default NULL,
    code varchar(1000) default "",
    user_id INT UNSIGNED,
    question_id INT UNSIGNED,
    created_at varchar(50) default "2021:09:04:00:00:00",
    modified_at varchar(50) default "",
    is_deleted boolean default 0,

    CONSTRAINT fk_Answers_Users_id
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE SET NULL ON UPDATE CASCADE,

    CONSTRAINT fk_Answers_Questions_id
        FOREIGN KEY (question_id)
        REFERENCES Questions(id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

