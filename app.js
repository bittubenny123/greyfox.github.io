

if('serviceWorker' in navigator){

    console.log("service worker supported");
   
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register("./ServiceWorker.js")
        .then(reg => console.log("service worker registration successfull"))
        .catch(err => console.log(`error occupied : ${err }`))
        
    })

}


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