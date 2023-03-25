function mask(password){
    let retorno = '';
    for(var i in password){
        retorno += '*';
    }
    return retorno;
}

function editar(usuario, nome){
    $("#iUsuarioAntigoEditar").val(usuario);
    $("#iUsuarioEditar").val(usuario);
    $("#iNomeEditar").val(nome);
}

function listarUsuarios(){

    $("#tableUsuarios>tbody").html("");

    $.ajax({
        method: "GET",
        url: "http://localhost:3333/usuarios",
        success: (result) => {
            if(result){
                for(var i in result){
                    let linha = "<tr>";
                    linha += "<td style='display:none;'>";
                    linha += result[i].id;
                    linha += "</td>";
                    linha += "<td>";
                    linha += result[i].nome;
                    linha += "</td>";
                    linha += "<td>";
                    linha += result[i].usuario;
                    linha += "</td>";
                    linha += "<td>";
                    linha += mask(result[i].senha);
                    linha += "</td>";
                    linha += "<td>";
                    linha += "<button type='button' class='btn btn-warning' onclick='editar(\"" + result[i].usuario + "\", \"" + result[i].nome +  "\");' data-bs-toggle='modal' data-bs-target='#modalEditarUsuario'>Editar</button>&nbsp;<button type='button' class='btn btn-danger'>Excluir</button>";
                    linha += "</td>";
                    linha += "</tr>";

                    $("#tableUsuarios>tbody").append(linha);
                }
            }
        }
    });
}

$(() => {
    listarUsuarios();

    $("#bFechar").click(() => {
        window.electronAPI.fecharTelaAtual();
    });
})