var llaves = ["ai","enter","imes","ober","ufat"];
var mensajeEncriptado = "";

function ocultarMunieco() {
    var mensaje = document.getElementById("idTBMensaje").value;
    if (mensaje == ""){
        
        document.getElementById("idMensaje01").style.visibility = "visible";
        document.getElementById("idMensaje02").style.visibility = "visible";
        document.getElementById("idMunieco").style.visibility = "hidden";
    }
    else
    {
         = encriptado(mensaje);
        document.getElementById("idMunieco").style.visibility = "hidden";
        document.getElementById("idMensaje01").style.visibility = "hidden";
        document.getElementById("idMensaje02").style.visibility = "hidden";
        document.getElementById("idTBResultado").value = mensajeEncriptado;
        document.getElementById("idTBResultado").style.visibility = "visible"; 
    }
    
}

function encriptado(mensajeOriginal){
    var nuevoMensaje = ""
    largoMensaje = mensajeOriginal.lenght();
    for (x = 1; x<=largoMensaje; x++){
        if (mensajeOriginal[x]=="a"){
            nuevoMensaje = nuevoMensaje + llaves[0];
        }
        else if (mensajeOriginal[x]=="e"){
            nuevoMensaje = nuevoMensaje + llaves[1];
        }
        else if (mensajeOriginal[x]=="i"){
            nuevoMensaje = nuevoMensaje + llaves[2];
        }
        else if (mensajeOriginal[x]=="o"){
            nuevoMensaje = nuevoMensaje + llaves[3];
        }
        else if (mensajeOriginal[x]=="u"){
            nuevoMensaje = nuevoMensaje + llaves[4];
        }
        else {
            nuevoMensaje = nuevoMensaje + mensajeOriginal[x]
        }
    }    
    return (nuevoMensaje)
}

function btnEncriptar() {
    ocultarMunieco();    
}

function btnDesencriptar () {

}