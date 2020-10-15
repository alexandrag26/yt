
var Canal= mas();



function mas(){
    var yt = document.getElementById("buscar").value;
    Canal = String(yt);
    return Canal;
}



    function youtube (Canal){
        var Canal = mas();
        var Token = "";
        var resultados = 1;
        var paginas = 1;
        var key = "AIzaSyDvQqACie-xizTWfucZWii5mL17XntFcTY";
        var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + Canal + "&part=snippet,id&order=date&maxResults=" + resultados;
        var info_canal = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + Canal + "&key=" + key;


        $.getJSON(info_canal, function (data) {
                var canal_name = data.items[0]["snippet"].title;
                var canal_description = data.items[0]["snippet"].description;
                var canal_img = data.items[0]["snippet"].thumbnails.default["url"];
                var canal_subs = data.items[0]["statistics"].subscriberCount;


                $("#canal").append(
                    '<h3><label>Informacion del canal:</label></h3>'+'<p><label>Icono del canal:</label></p>'+'<img src="'+ canal_img + '"alt="" class="rounded-circle" width=150 height=150> <br>'+'<br>'+'<p><label>Nombre del canal:</label> '+canal_name+'</p>'+'<p><label>Descripcion del canal:</label> '+canal_description+'</p>'+'<p><label>Subscriptores:</label> '+canal_subs+'</p>'
                );

        });
        $.getJSON(url, function (data) {
            

            for (var k in data.items) {
                var titleVideo=data.items[k]["snippet"].title;
                var description_video=data.items[k]["snippet"].description;
                var urlVideo="https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
                var fechaVideo=data.items[k]["snippet"].publishedAt;
                var video_img = data.items[0]["snippet"].thumbnails.default["url"];
                console.log(k, data.items[k]["id"].videoId);
               
                $("#video").append(
                    '<h3><label>Informacion del ultimo video:</label></h3>'+'<p><label>Nombre del Video:</label> '+titleVideo+'</p>'+'<p><label>Descripcion del Video:</label> '+ description_video + '</p>'+'<p><label>Fecha y Hora de Publicacion:</label>'+fechaVideo+'</p>'+'<p><label>Url:</label> '+urlVideo+'</p>'+'<img src="'+ video_img + '"alt="" width=250 height=250> <br>'
                    );
              
            }
            
        });

    }   
        

