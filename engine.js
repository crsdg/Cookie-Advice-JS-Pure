var ca_texto = "Este sitio web utiliza cookies propias y de terceros para realizar estadísticas relacionadas con la afluencia de tráfico del mismo. Si no está de acuerdo, por favor, abandone el sitio web.";
var ca_urlpolitica="/";
var ca_estilosdiv='display: block;position: fixed;bottom: 0;left: 0;right: 0;text-align: center;padding: 15px 30px;background-color: rgba(255,255,255,0.9);border: 1px solid #BDBDBD;';
document.body.innerHTML += "<div class='cookie-advice' style='display:none;'></div>";
function ca_showadvice(){
    var textopolitica="";
    if (ca_urlpolitica!=""){
        textopolitica="<br>Puede consultar la política de cookies pinchando <a href='"+ca_urlpolitica+"' target='_blank'>aquí</a>";
    }
    document.getElementsByClassName("cookie-advice")[0].innerHTML=ca_texto+textopolitica+" <button onclick='ca_hideadvice()'>Aceptar y cerrar</button>";
    document.getElementsByClassName("cookie-advice")[0].setAttribute("style",ca_estilosdiv);
    document.getElementsByClassName("cookie-advice")[0].style.display="block";
}
function ca_hideadvice(){
    document.getElementsByClassName("cookie-advice")[0].style.display="none";
}
function ca_cambiardatos(tex,urlpol){
    ca_hideadvice();
    ca_texto = tex;
    ca_urlpolitica=urlpol;
}