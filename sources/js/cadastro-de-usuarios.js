$(() => {
    $.ajax({
        method: "GET",
        url: "http://localhost/sistema-de-vendas/usuarios/get_usuarios.php",
        success: (result) => {
            if(result){
                let usuarios = result.split("@@");

                for(var i in usuarios){
                    let linha = "<tr>";
                    linha += "<td style='display:none;'>";
                    linha += usuarios[i].split("##")[0];
                    linha += "</td>";
                    linha += "<td>";
                    linha += usuarios[i].split("##")[1];
                    linha += "</td>";
                    linha += "<td>";
                    linha += usuarios[i].split("##")[2];
                    linha += "</td>";
                    linha += "<td>";
                    linha += usuarios[i].split("##")[3];
                    linha += "</td>";
                    linha += "<td>";
                    linha += "<button type='button' class='btn btn-warning'>Editar</button>&nbsp;<button type='button' class='btn btn-danger'>Excluir</button>";
                    linha += "</td>";
                    linha += "</tr>";

                    $("#tableUsuarios>tbody").append(linha);
                }
            }
        }
    })
})