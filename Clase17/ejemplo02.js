function ocultarMensaje(){
    const mensaje=document.getElementsById('mensaje');
    mensaje.style.display='none';
}
setTimeout(ocultarMensaje,5000);//5 segundos