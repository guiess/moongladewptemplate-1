<?php
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

if (!defined('ABSPATH')) {
  exit;
}

function calculateDelivery(string $adressCityTo, string $adressPostalCodeTo, string $adressCountryCodeTo): string
{
  // echo $_POST['city'];

  $adressCityFrom = carbon_get_theme_option("delivery_from_city");
  $adressPostalCodeFrom = carbon_get_theme_option("delivery_from_postalcode");
  $adressCountryCodeFrom = carbon_get_theme_option("delivery_from_country");
  $deliveryWeight = carbon_get_theme_option("delivery_weight");

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

  /* configuration old
$access = "DDA73248ECBDDD92";
$userid = "moongladebali";
$passwd = "Moongladesuperfood21";
*/

  // configuration
  $userid = carbon_get_theme_option("ups_user_id");
  $passwd = carbon_get_theme_option("ups_user_pass");
  $access = carbon_get_theme_option("ups_user_key");

  $endpointurl = "https://wwwcie.ups.com/ups.app/xml/Rate"; //?testing url
  // $endpointurl = "https://onlinetools.ups.com/ups.app/xml/Rate"; //?prod url
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
    $shipperddress->addChild("City", $adressCityFrom);
    $shipperddress->addChild("PostalCode", $adressPostalCodeFrom);
    $shipperddress->addChild("CountryCode", $adressCountryCodeFrom);

    $shipTo = $shipment->addChild('ShipTo');
    // $shipTo->addChild("CompanyName", "Company Name");
    $shipToAddress = $shipTo->addChild('Address');
    // $shipToAddress->addChild("AddressLine1", "Address Line");
    $shipToAddress->addChild("City", $adressCityTo);
    $shipToAddress->addChild("PostalCode", $adressPostalCodeTo);
    $shipToAddress->addChild("CountryCode", $adressCountryCodeTo);

    $shipFrom = $shipment->addChild('ShipFrom');
    // $shipFrom->addChild("CompanyName", "Moonglade Bali");
    $shipFromAddress = $shipFrom->addChild('Address');
    // $shipFromAddress->addChild("AddressLine1", "Address Line");
    $shipFromAddress->addChild("City", $adressCityFrom);
    $shipFromAddress->addChild("PostalCode", $adressPostalCodeFrom);
    $shipFromAddress->addChild("CountryCode", $adressCountryCodeFrom);

    // code for the UPS Service associated with the shipment. 
    // NOTE: For a complete listing of 
    // values, refer to Service Codes in the 
    // Appendix. 
    // Valid domestic values: 
    // 01 = Next Day Air 
    // 02 = 2nd Day Air 
    // 03 = Ground 
    // 12 = 3 Day Select 
    // 13 = Next Day Air Saver 
    // 14 = UPS Next Day Air Early 
    // 59 = 2nd Day Air A.M. 
    // Valid international values: 
    // 07 = Worldwide Express 
    // 08 = Worldwide Expedited 
    // 11= Standard 
    // 54 = Worldwide Express Plus 
    // 65 = Saver 
    // 96 = UPS Worldwide Express 
    // Freight
    // 71 = UPS Worldwide Express 
    // Freight Midday
    // Required for Rating and ignored for 
    // Shopping.

    $service = $shipment->addChild('Service');
    $service->addChild("Code", "07");
    $service->addChild("Description", "Worldwide Express");

    // Package Valid values: 
    // 00 = UNKNOWN
    // 01 = UPS Letter 
    // 02 = Package
    // 03 = Tube 
    // 04 = Pak
    // 21 = Express Box
    // 24 = 25KG Box
    // 25 = 10KG Box
    // 30 = Pallet
    // 2a = Small Express Box 
    // 2b = Medium Express Box
    // 2c = Large Express Box

    $package = $shipment->addChild('Package');
    $packageType = $package->addChild('PackagingType');
    $packageType->addChild("Code", "02");
    $packageType->addChild("Description", "UPS Package");

    $packageWeight = $package->addChild('PackageWeight');
    $unitOfMeasurement = $packageWeight->addChild('UnitOfMeasurement');
    $unitOfMeasurement->addChild("Code", "KGS");
    $packageWeight->addChild("Weight", $deliveryWeight);

    // $packageDimensions = $package->addChild('Dimensions');
    // $unitOfMeasurement = $packageDimensions->addChild('UnitOfMeasurement');
    // $unitOfMeasurement->addChild("Code", "CM");
    // $unitOfMeasurement->addChild("Description", "Centimeters");
    // $packageDimensions->addChild("Length", "1");
    // $packageDimensions->addChild("Width", "1");
    // $packageDimensions->addChild("Height", "1");

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

      $shiping_method_array = [];
      $usd_cost_array = [];
      $shiping_array = [];
      $shiping_code_array = [];

      foreach ($resp->RatedShipment as $xmlValue) {
        $idr_cost = $xmlValue->TransportationCharges->MonetaryValue;
        $idr_cost = substr($idr_cost, 0, -3);
        $idr_cost = intval($idr_cost);
        // echo $idr_cost . "\n";

        $usd_rate = intval(carbon_get_theme_option("moon_dollar_rate"));
        // echo $usd_rate . "\n";

        $usd_cost =  $idr_cost / $usd_rate;
        $usd_cost = round($usd_cost);
        $usd_cost = $usd_cost;
        // echo $usd_cost . "\n";

        // $code_shiping = $xmlValue->Service->Code;
        // echo $code_shiping . "\n";

        $code_shiping = $xmlValue->Service->Code;
        $code_shiping_n = "n" . $code_shiping;
        $shiping_method = $list->$code_shiping_n;
        $shiping_method = "UPS " . $shiping_method;
        // echo $shiping_method . "\n";

        array_push($shiping_code_array, ltrim($code_shiping_n, 'n'));
        array_push($shiping_method_array, $shiping_method);
        array_push($usd_cost_array, $usd_cost);

        // $responseToFront->addChild($shiping_method, $usd_cost);
      }

      // echo "responseToFront";
      // echo var_export($responseToFront);
      // echo var_dump($responseToFront);

      $shiping_array['validity'] = "valid";
      $shiping_array['shippingcode'] = $shiping_code_array;
      $shiping_array['shippingmethod'] = $shiping_method_array;
      $shiping_array['price'] = $usd_cost_array;

      return (json_encode($shiping_array));

      //! проверку на Succes и только потом то, что выше Надо прпосто забить невалидный город и тд

      // echo '<pre>' . var_export($responseToFrontXML, true) . '</pre>';
    }
  } catch (Exception $ex) {
    return $ex;
  }
}