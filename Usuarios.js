function obtenerListaUsuarios(){
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'));
    if(ListaUsuarios==null){
    ListaUsuarios=
    [
        ['marcelo','Mendoza','1234','1'],
        ['julio','Arrazabal','567','2'],
        ['esteban','JImenez','890','3']
    ]
    }
    return ListaUsuarios;
}
function validarCredenciales(login,contrasenna){
 var ListaUsuarios = obtenerListaUsuarios();
 var bAcceso = false;
 for(var i=0; i<ListaUsuarios.length;i++){
    if(login ==ListaUsuarios[i][0]&&contrasenna==ListaUsuarios[i][2]){
        bAcceso=true;
        sessionStorage.setItem('usuarioActivo',ListaUsuarios[i][0]+' '+ ListaUsuarios[i][1]);
        sessionStorage.setItem('rolUsuarioActivo',ListaUsuarios[i][3]);
    }
 }
 return bAcceso;
}