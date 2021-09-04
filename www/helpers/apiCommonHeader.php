<?php

//Reactのdev環境からのリクエストを許可

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');