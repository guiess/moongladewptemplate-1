<?php
/*
Template Name: Страница для тестов
*/

// echo "test";

// Valid domestic values 
// 01 = Next Day Air 
// 02 = 2nd Day Air 
// 03 = Ground 
// 12 = 3 Day Select 
// 13 = Next Day Air Saver 
// 14 = UPS Next Day Air Early 
// 59 = 2nd Day Air A.M.
// 07 = Worldwide Express 
// 08 = Worldwide Expedited 
// 11 = Standard 
// 54 = Worldwide Express Plus 
// 65 = Saver 
// 96 = UPS Worldwide Express Freight
// 71 = UPS Worldwide Express Freight Midday

$validDomesticValuesXML = new SimpleXMLElement("<ValidDomesticValues></ValidDomesticValues>");

$list = $validDomesticValuesXML->addChild('Request');

$list->addChild("n01", "Next Day Air");
$list->addChild("n02", "2nd Day Air");
$list->addChild("n03", "Ground");
$list->addChild("n12", "3 Day Select");
$list->addChild("n13", "Next Day Air Saver");
$list->addChild("n14", "Next Day Air Early");
$list->addChild("n59", "2nd Day Air A.M.");
$list->addChild("n07", "Worldwide Express");
$list->addChild("n08", "Worldwide Expedited");
$list->addChild("n11", "Standard");
$list->addChild("n54", "Worldwide Express Plus");
$list->addChild("n65", "Saver");
$list->addChild("n96", "Worldwide Express Freight");
$list->addChild("n71", "Worldwide Express Freight Midday");

// echo '<pre>' . var_export($validDomesticValuesXML, true) . '</pre>
// echo $list->n02 . "\n";

// configuration
$access = "DDA73248ECBDDD92";
$userid = "moongladebali";
$passwd = "Moongladesuperfood21";

$endpointurl = "https://wwwcie.ups.com/ups.app/xml/Rate";
$outputFileName = "XOLTResult.xml";

try {

	// create a simple xml object for AccessRequest & RateRequest
	$accessRequesttXML = new SimpleXMLElement("<AccessRequest></AccessRequest>");
	$rateRequestXML = new SimpleXMLElement("<RatingServiceSelectionRequest></RatingServiceSelectionRequest>");

	// create AccessRequest XML
	$accessRequesttXML->addChild("AccessLicenseNumber", $access);
	$accessRequesttXML->addChild("UserId", $userid);
	$accessRequesttXML->addChild("Password", $passwd);

	// create RateRequest XML
	$request = $rateRequestXML->addChild('Request');
	$request->addChild("RequestAction", "Shop");
	$request->addChild("RequestOption", "Shop");

	$shipment = $rateRequestXML->addChild('Shipment');
	$shipper = $shipment->addChild('Shipper');
	// $shipper->addChild("Name", "Name");
	// $shipper->addChild("ShipperNumber", "");
	$shipperddress = $shipper->addChild('Address');
	// $shipperddress->addChild("AddressLine1", "Address Line");
	$shipperddress->addChild("City", "Badung");
	$shipperddress->addChild("PostalCode", "80361");
	$shipperddress->addChild("CountryCode", "ID");

	$shipTo = $shipment->addChild('ShipTo');
	// $shipTo->addChild("CompanyName", "Company Name");
	$shipToAddress = $shipTo->addChild('Address');
	// $shipToAddress->addChild("AddressLine1", "Address Line");
	$shipToAddress->addChild("City", "Samara");
	$shipToAddress->addChild("PostalCode", "443100");
	$shipToAddress->addChild("CountryCode", "RU");

	$shipFrom = $shipment->addChild('ShipFrom');
	// $shipFrom->addChild("CompanyName", "Moonglade Bali");
	$shipFromAddress = $shipFrom->addChild('Address');
	// $shipFromAddress->addChild("AddressLine1", "Address Line");
	$shipFromAddress->addChild("City", "Badung");
	$shipFromAddress->addChild("PostalCode", "80361");
	$shipFromAddress->addChild("CountryCode", "ID");

	$service = $shipment->addChild('Service');
	$service->addChild("Code", "02");
	$service->addChild("Description", "2nd Day Air");

	$package = $shipment->addChild('Package');
	$packageType = $package->addChild('PackagingType');
	$packageType->addChild("Code", "02");
	$packageType->addChild("Description", "UPS Package");

	$packageWeight = $package->addChild('PackageWeight');
	$unitOfMeasurement = $packageWeight->addChild('UnitOfMeasurement');
	$unitOfMeasurement->addChild("Code", "KGS");
	$packageWeight->addChild("Weight", "1.2");

	$requestXML = $accessRequesttXML->asXML() . $rateRequestXML->asXML();

	// create Post request
	$form = array(
		'http' => array(
			'method' => 'POST',
			'header' => 'Content-type: application/x-www-form-urlencoded',
			'content' => "$requestXML"
		)
	);

	$request = stream_context_create($form);
	$browser = fopen($endpointurl, 'rb', false, $request);
	if (!$browser) {
		throw new Exception("Connection failed.");
	}

	// get response
	$response = stream_get_contents($browser);
	fclose($browser);

	if ($response == false) {
		throw new Exception("Bad data.");
	} else {
		// save request and response to file
		$fw = fopen($outputFileName, 'w');
		fwrite($fw, "Request: \n" . $requestXML . "\n");
		fwrite($fw, "Response: \n" . $response . "\n");
		fclose($fw);

		// get response status
		$resp = new SimpleXMLElement($response);

		// echo $resp->Response->ResponseStatusDescription . "\n";

		$responseToFrontXML = new SimpleXMLElement("<ResponseToFront></ResponseToFront>");
		$responseToFront = $responseToFrontXML->addChild('Response');

		foreach ($resp->RatedShipment as $xmlValue) {
			$idr_cost = $xmlValue->TransportationCharges->MonetaryValue;
			$idr_cost = substr($idr_cost, 0, -3);
			$idr_cost = intval($idr_cost);
			// echo $idr_cost . "\n";

			$usd_rate = intval(carbon_get_theme_option("moon_dollar_rate"));
			// echo $usd_rate . "\n";

			$usd_cost =  $idr_cost / $usd_rate;
			$usd_cost = round($usd_cost);
			$usd_cost = "USD" . $usd_cost;
			echo $usd_cost . "\n";

			// $code_shiping = $xmlValue->Service->Code;
			// echo $code_shiping . "\n";

			$code_shiping = $xmlValue->Service->Code;
			$code_shiping = "n" . $code_shiping;
			$shiping_method = $list->$code_shiping;
			$shiping_method = "UPS " . $shiping_method;
			echo $shiping_method . "\n";


			$responseToFront->addChild($shiping_method, $usd_cost);
		}

		echo '<pre>' . var_export($responseToFrontXML, true) . '</pre>';
	}
} catch (Exception $ex) {
	echo $ex;
}
