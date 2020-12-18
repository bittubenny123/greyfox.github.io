function myController($appml) {

    if ($appml.message == "ready") {
        $appml.today = new Date();
        $appml.copyright = "W3Schools";
    }


    if ($appml.message == "display") {
        if ($appml.display.name == "CustomerName") {
            $appml.display.value = $appml.display.value.toUpperCase();

        }
        
    }

   

}