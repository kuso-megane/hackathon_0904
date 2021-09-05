<?php

namespace domain\code_exe;

use config\NetworkConfig;

require_once '/var/www/config/NetworkingConfig.php';


/**
 * @param array $input [lang => string, code => string]
 * 
 * @return array [result => string]
 */
function exe(array $input)
{

    #test
    $lang = 'python';
    $code = "
    for i in range(5):
        print(i)
    ";

    $lang_container_host = NetworkConfig::LANG_EXE_CONTAINER_HOST;

    $data = [
        'code' => $code
    ];
    $option = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-type: application/json; charset=UTF-8',
            'content' => json_encode($data)
        ]
    ];
    $context = stream_context_create($option);
    $output = file_get_contents($lang_container_host . '/', false, $context); //json

    return json_decode($output, true);
}