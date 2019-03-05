<?php
require "../QuickBooks/vendor/autoload.php";

use QuickBooksOnline\API\DataService\DataService;
use QuickBooksOnline\API\Core\Http\Serialization\XmlObjectSerializer;
use QuickBooksOnline\API\Data\IPPCustomer;

$dataService = DataService::Configure("../QuickBooks/src/sdk.config");

if (!$dataService)
	exit("Problem while initializing DataService.\n");

$totalData = new stdClass;
$totalData->lstCustomer = new stdClass;
$totalData->lstItems = new stdClass;

$allCustomers = $dataService->Query("SELECT * FROM Customer");

$error = $dataService->getLastError();
if ($error != null) {
    echo "The Status code is: " . $error->getHttpStatusCode() . "\n";
    echo "The Helper message is: " . $error->getOAuthHelperError() . "\n";
    echo "The Response message is: " . $error->getResponseBody() . "\n";
}
else {
    $totalData->lstCustomer = $allCustomers;
    // echo(json_encode($allCustomers));
}

$allItems = $dataService->Query("SELECT * FROM Item");
$error = $dataService->getLastError();
if ($error != null) {
    echo "The Status code is: " . $error->getHttpStatusCode() . "\n";
    echo "The Helper message is: " . $error->getOAuthHelperError() . "\n";
    echo "The Response message is: " . $error->getResponseBody() . "\n";
}
else {
    $totalData->lstItems=$allItems;
    // echo(json_encode($allItems));
}
echo (json_encode($totalData));
?>