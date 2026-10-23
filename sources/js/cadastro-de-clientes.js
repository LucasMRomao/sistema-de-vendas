var CONFIG;

let clientes = null;

function listarClientes(){

    $("#tableClientes>tbody").html("");

    for(var i in clientes){
        let linha = "<tr>";
        linha += "<td style='display:none;'>";
        linha += clientes[i].id;
        linha += "</td>";
        linha += "<td class='toogle-visibility-nome'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].nome + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-endereco'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].endereco + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-telefone'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].telefone + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-email'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].email + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-limite'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].limite + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-ativo'>";
        linha += "<input type='text' class='form-control' value='" + clientes[i].ativo + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-acoes'>";
        linha += "<div class='btn-group' role='group' aria-label='Basic example'><button type='button' class='btn btn-primary' onclick='editar(" + i + ");' data-bs-toggle='modal' data-bs-target='#modalEditarCliente' data-toggle='tooltip' data-placement='top' title='Editar'><i class='fa fa-edit'></i></button>&nbsp;<button type='button' class='btn btn-danger' onclick='excluir(" + i + ")' data-toggle='tooltip' data-placement='top' title='Excluir'><i class='fa fa-trash'></i></button></div>";
        linha += "</td>";
        linha += "</tr>";

        $("#tableClientes>tbody").append(linha);
    }

    let ativos = {
        nome: $("#cVisivelNome").is(":checked"),
        endereco: $("#cVisivelEndereco").is(":checked"),
        telefone: $("#cVisivelTelefone").is(":checked"),
        email: $("#cVisivelEmail").is(":checked"),
        ativo: $("#cVisivelAtivo").is(":checked")
    }

    if(!ativos.nome) $(".toogle-visibility-nome").hide()
    if(!ativos.endereco) $(".toogle-visibility-endereco").hide()
    if(!ativos.telefone) $(".toogle-visibility-telefone").hide()
    if(!ativos.email) $(".toogle-visibility-email").hide()
    if(!ativos.ativo) $(".toogle-visibility-ativo").hide()
}

function getClientes(){
    $("#tableClientes>tbody").html("<tr><td colspan='6' class='text-center'><b>Carregando clientes...<b></td></tr>");

    $.ajax({
        method: "GET",
        url: CONFIG.URL_API + "/clientes",
        success: (result) => {
            clientes = result;
            listarClientes();
        }
    })
}

function limparEdicao(){
    $("#iNomeEditar").val('');
    $("#iEnderecoEditar").val('');
    $("#iTelefoneEditar").val('');
    $("#iEmailEditar").val('');
    $("#iLimiteEditar").val('');
    $("#cAtivoEditar").val(false);
    $("#sTipoUsuarioEditar").val('');
}

$(async () => {

    await fetch("../js/config.json").then(response => response.text()).then(text => {
        CONFIG = JSON.parse(text);
    });

    getClientes();

    $("#bFechar").click(() => {
        window.electronAPI.fecharTelaAtual();
    });

    $("[id^=cVisivel]").each((index, element) => {
        $(element).attr("checked", true);

        $(element).on("change", (e) => {
            let visible = $(element).is(":checked");
            let el = $(element).attr("toogle-visibility");

            visible ? $(".toogle-visibility-" + el).show() : $(".toogle-visibility-" + el).hide();
        });
    });

});