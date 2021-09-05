<?php
/**
 * @return
 * {
 *      currentuser: {id: int, name: string}, 
 *      is_successful: bool, 
 *      error: string
 * }
 */

namespace api\login\authenticate;

use domain\login\authenticate as authenticate;

$domainPath = '../../../Model/domain/';
require_once $domainPath . 'login/authenticate/Interactor.php';

$input = json_decode(file_get_contents("php://input")); //frontから渡されるpostデータ(json)を配列化

$output = authenticate\interact($input);

header("Content-type: application/json; charset=UTF-8");
echo json_encode($output);