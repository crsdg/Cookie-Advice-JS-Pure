# Cookie-Advice JS Pure

Para implementar este script en tu página web, incluye el script engine.js dentro de tu codigo html entre las etiquetas <body> y </body>.

Luego añade un script para llamar a la función que muestra el div del aviso de cookies.

Se pueden modificar el texto y la url de la política en este script. Si dejas la url de la política en blanco, no dirá nada sobre la política de cookies.

Ejemplo:

<script src="engine.js"></script>
<script>
    texto = "Cambiando el texto";
    urlpolitica="/politicacookies.pdf";
    ca_cambiardatos(texto,urlpolitica);
    ca_showadvice();
</script>
Si prefieres utilizar el texto que viene por defecto, comenta o borra las lineas texto...   urlpolitica... y ca_cambiardatos...
Ejemplo: 

<script src="engine.js"></script>
<script>
    ca_showadvice();
</script>
