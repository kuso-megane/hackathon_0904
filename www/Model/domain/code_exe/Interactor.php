<?php

namespace domain\code_exe;


/**
 * @param array $input [lang => string, code => string]
 * 
 * @return array [result => string]
 */
function interact(array $input)
{
    $lang_container_hosts_path = '../../../config/lang_container_hosts.json';

    #test
    $lang = 'python';
    $code = "
    for i in range(5):
        print(i)
    ";
    $code = "\"" . $code . "\"";

    $lang_container_hosts = json_decode(file_get_contents($lang_container_hosts_path), true);
    $lang_container_host = $lang_container_hosts[$lang];

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
    $output = file_get_contents($lang_container_host, false, $context); //json

    return json_decode($output, true);
}