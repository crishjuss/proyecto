document.querySelector('#btnIngresar').addEventListener('click',
iniciarSesion);


function iniciarSesion(){
    var sUsuario='';
    var sContrasenna='';
    var bAcceso=false;
   
    sUsuario=document.querySelector('#txtlogin').value;
    sContrasenna=document.querySelector('#txtContrasenna').value;
    bAcceso=validarCredenciales(sUsuario,sContrasenna);
    
    if(bAcceso==true){
        ingresar();
    }
    else
    {
        alert("POR FAVOR INGRESE DATOS CORRECTOS, Y USUARIOS EXISTENTES");
    }
}

function ingresar(){
   
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case'1':
            window.location.href='index.html';
        break;
        case '2':
            window.location.href='index1.html';
         case '2':
            case '3':
                window.location.href='index2.html';
        break;


    }
}



