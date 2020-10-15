var canal = Mas();

function Mas (){
var yt = document.getElementById("buscar").value;
canal = String(yt);
return canal;
}



function youtube(canal) {
    var canal = Mas();
    var nextPageToken = "";
    var resPorPagina = 1;
    var paginas = 1;
    var key = "AIzaSyAoQH23oSCJQReeZbGWCH8f2eMyD1QkMwM";

    var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + canal + "&part=snippet,id&order=date&maxResults=" + resPorPagina; 
    var info_canal = "https://www.googleapis.com/youtube/v3/channels?part=snippett%2CcontentDetails%Cstatistics&id=" + canal + "$key=" + key;

    $("#contenedor").append(url);


    $.getJSON(inf_canal, function (data){
        var canal_img = data.items[0]["snippet"].thumbnails.default["url"];
        var canal_title = data.items[0]["snippet"].title;
        var canal_description = data.items[0]["snippet"].description;
        var canal_subs = data.items[0]["statistics"].suscriberCount;        


        $("#canal").append(
            "<p><lavel>Imagen: </lavel>" + canal_img + "</p>" + "<p><lavel>Nombre del canal: </lavel>" + canal_title + "</p>" + "<p><lavel>Descripcion: </lavel>" + canal_description + "</p>" + "<p><lavel>Suscriptores: </lavel>" + canal_subs + "</p>"
    
        );

    });

    $("#contenedor").append(url);
    $.getJSON(url, function (data) {

        for (var k in data.items) {
            var titleVideo = data.items[k]["snippet"].title;
            var description = data.items[k]["snippet"].description;
            var urlVideo = "https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
            var fechaVideo = data.items[k]["snippet"].publishedAt;
                            
            console.log(k, data.items[k]["id"].videoId);


            $("#video").append(
                "<p><lavel>Nombre del video: </lavel>" + titleVideo + "</p>" + "<p><lavel> Descripcion: </lavel>" + description + "</p>" + "<p><lavel>Direccion Url: </lavel>" + urlVideo + "</p>" + "<p><lavel> Fecha y hora de publicacion: </lavel>" + fechaVideo + "</p>"
    
            );
        }
        
    }


)};
