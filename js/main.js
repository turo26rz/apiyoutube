 
 $(document).ready(function()
     {  
        var API_KEY = "AIzaSyA1yCEh0lcCYrVc8QrUkdM4cU-V7R_nWVw" //Clave de API, extraidad de google cloud plataform
        var video = ''

        var search = $("#search").val()
        videoSearch(API_KEY,search,8) //Limitamos la cantidad de videos que se muestran por pantalla

        $("#form").submit(function (event){ // Submit: Lo utilizamos para consultar los video mediante el boton
            event.preventDefault()
            var search = $("#search").val()
            videoSearch(API_KEY,search,16) //Limitamos la cantidad de videos que se muestran por pantalla
            
        })
        
        function videoSearch(key, search, maxResults)
        {
            
            $("#videos").empty() // videos: Funcion donde mostramos los videos

            //Link extraido de la documentacion brindada de la api de Youtube 
            $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults="
             + maxResults + "&q=" + search,function(data) {
                 
                data.items.forEach(item => { 
                    video = `
                    <iframe width="363" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    ` //Iframe brindado por Youtube
                   
                    $("#videos").append(video)
                }); 
           
           })

        }
    })



//Inicio de la funcion para el reloj
function actual()
 {
    fecha=new Date(); //Actualizar fecha.
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual
        if (hora<10) { //dos cifras para la hora
            hora="0"+hora;
            }
        if (minuto<10) { //dos cifras para el minuto
            minuto="0"+minuto;
            }
        if (segundo<10) { //dos cifras para el segundo
            segundo="0"+segundo;
            }
    //devolver los datos:
    mireloj = hora+" : "+minuto+" : "+segundo;	
    return mireloj; 
 }
    function actualizar()
     { //función del temporizador
        mihora=actual(); //recoger hora actual
        mireloj=document.getElementById("reloj"); //buscar elemento reloj
        mireloj.innerHTML=mihora; //incluir hora en elemento
     }
        setInterval(actualizar,1000); //iniciar temporizador

     //Fin de la funcion para el reloj



  