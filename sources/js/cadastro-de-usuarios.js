var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var usuarios = null;
var tiposUsuario = null;

var CONFIG;

function resetarSenhaUsuarioEditando(){
    if(confirm("Deseja realmente voltar a senha padrão para o usuário selecionado?")){
        $.ajax({
            method: "PUT",
            url: CONFIG.URL_API + "/resetarsenhausuario/" + $("#idUsuarioEditar").val(),
            success: (result) => {
                console.log(result);
                if(result){
                    alert("Senha resetada com sucesso!");
                    listarUsuarios();
                }
            }
        })
    }
}

function toogleDisabledInputUsuario(indice){
    let habilitado = $("#iUsuarioEditar").prop("disabled")
    $("#iUsuarioEditar").prop("disabled", !habilitado);
    if(!habilitado){
        $("#iUsuarioEditar").val(usuarios[indice].usuario);
    }
}

function cadastrarUsuario(){
    $("#modalEditarUsuarioTitulo").text("Cadastrar novo usuário");
    $("#btnToogleAlterarUsuario").hide();
    $("#divResetarSenha").hide();
    $("#iUsuarioEditar").removeAttr("disabled");
}

function editar(i){
    $("#modalEditarUsuarioTitulo").text("Editar usuário");
    $("#btnToogleAlterarUsuario").show();
    $("#divResetarSenha").show();

    let user = usuarios[i];
    $("#btnToogleAlterarUsuario").prop("indice-usuario", i);
    $("#idUsuarioEditar").val(user.id);
    $("#iUsuarioEditar").val(user.usuario);
    $("#iNomeEditar").val(user.nome);
    $("#iEmailEditar").val(user.email);
    $("#sTipoUsuarioEditar").val(user.tipo_usuario_id)
}

function excluir(i){
    if(confirm("Deseja realmente excluir o usuário " + usuarios[i].usuario + "?")){
        $.ajax({
            method: "DELETE",
            url: CONFIG.URL_API + "/usuarios/" + usuarios[i].id,
            success: (result) => {
                if(result){
                    alert("Usuário excluído com sucesso!");
                    getUsers();
                }
            }
        });
    }
}

function limparEdicao(){
    $("#iUsuarioEditar").prop("disabled", "disabled");
    $("#idUsuarioEditar").val('');
    $("#iUsuarioAntigoEditar").val('');
    $("#iUsuarioEditar").val('');
    $("#iNomeEditar").val('');
    $("#iEmailEditar").val('');
    $("#sTipoUsuarioEditar").val('');
}

function salvarEdicao(){
    if(confirm("Deseja realmente salvar os dados informados?")){

        let idUsuario = $("#idUsuarioEditar").val();

        if(idUsuario){
            $.ajax({
                url: CONFIG.URL_API + "/usuarios/" + idUsuario,
                method: "PUT",
                data: {
                    usuario: $("#iUsuarioEditar").val(),
                    nome: $("#iNomeEditar").val(),
                    email: $("#iEmailEditar").val(),
                    tipo_usuario_id: $("#sTipoUsuarioEditar option:selected").val()
                },
                success: (result) => {
                    if(result.id){
                        alert("Alteração realizada com sucesso.");
                        getUsers();
                    }else{
                        alert("Erro ao salvar alteração. Tente novamente.")
                    }
                }
            });
        }else{
            $.ajax({
                url: CONFIG.URL_API + "/usuarios",
                method: "POST",
                data: {
                    usuario: $("#iUsuarioEditar").val(),
                    nome: $("#iNomeEditar").val(),
                    email: $("#iEmailEditar").val(),
                    senha: MD5('123456'),
                    tipo_usuario_id: $("#sTipoUsuarioEditar option:selected").val()
                },
                success: (result) => {
                    if(result.id){
                        alert("Usuário criado com sucesso!");
                        getUsers();
                    }else{
                        alert("Erro ao cadastrar usuário. Tente novamente.");
                    }
                }
            })
        }
    }
}

function montarSelectTipoUsuario(tipo_usuario_id){
    let $select = "<select class='form-control' disabled>";

    for(var i in tiposUsuario){
        $select += "<option value='";
        $select += tiposUsuario[i].id;
        $select += "'";
        if(tipo_usuario_id == tiposUsuario[i].id) $select += " selected";
        $select += ">";
        $select += tiposUsuario[i].descricao;
        $select += "</option>";
    }

    $select += "</select>"
    return $select;
}

function listarUsuarios(){

    $("#tableUsuarios>tbody").html("");

    for(var i in usuarios){
        let linha = "<tr>";
        linha += "<td style='display:none;'>";
        linha += usuarios[i].id;
        linha += "</td>";
        linha += "<td class='toogle-visibility-nome'>";
        linha += "<input type='text' class='form-control' value='" + usuarios[i].nome + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-usuario'>";
        linha += "<input type='text' class='form-control' value='" + usuarios[i].usuario + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-email'>";
        linha += "<input type='text' class='form-control' value='" + usuarios[i].email + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-senha'>";
        linha += "<input type='password' class='form-control' value='" + usuarios[i].senha + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-tipo'>";
        linha += montarSelectTipoUsuario(usuarios[i].tipo_usuario_id);
        linha += "</td>";
        linha += "<td class='toogle-visibility-acoes'>";
        linha += "<div class='btn-group' role='group' aria-label='Basic example'><button type='button' class='btn btn-primary' onclick='editar(" + i + ");' data-bs-toggle='modal' data-bs-target='#modalEditarUsuario' data-toggle='tooltip' data-placement='top' title='Editar'><i class='fa fa-edit'></i></button>&nbsp;<button type='button' class='btn btn-danger' onclick='excluir(" + i + ")' data-toggle='tooltip' data-placement='top' title='Excluir'><i class='fa fa-trash'></i></button></div>";
        linha += "</td>";
        linha += "</tr>";

        $("#tableUsuarios>tbody").append(linha);
    }

    let ativos = {
        nome: $("#cVisivelNome").is(":checked"),
        usuario: $("#cVisivelUsuario").is(":checked"),
        email: $("#cVisivelEmail").is(":checked"),
        senha: $("#cVisivelSenha").is(":checked"),
        tipo: $("#cVisivelTipo").is(":checked")
    }

    if(!ativos.nome) $(".toogle-visibility-nome").hide()
    if(!ativos.usuario) $(".toogle-visibility-usuario").hide()
    if(!ativos.email) $(".toogle-visibility-email").hide()
    if(!ativos.senha) $(".toogle-visibility-senha").hide()
    if(!ativos.tipo) $(".toogle-visibility-tipo").hide()
}

function carregarTiposUsuario(){

    $("#sTipoUsuarioEditar").html("<option></option>");
    $("#iBuscarTipo").html("<option value='0'>Todos</option>");

    $.ajax({
        method: "GET",
        url: CONFIG.URL_API + "/tiposusuario",
        success: (result) => {
            tiposUsuario = result;
            for(var i in result){
                $("#sTipoUsuarioEditar").append("<option value='" + result[i].id + "'>" + result[i].descricao + "</option>");
                $("#iBuscarTipo").append("<option value='" + result[i].id + "'>" + result[i].descricao + "</option>");
            }
        }
    })
}

function changeBuscar(){
    let buscar = $("#sBuscarPor option:selected").val();
    $("[id^=iBuscar]").each((index, element) => {
        $(element).hide();
    });

    $("#iBuscar" + buscar).show();

    $("#iBuscarNome").val("");
    $("#iBuscarEmail").val("");
    $("#iBuscarTipo").val("0");
}

function getUsers(){
    $("#tableUsuarios>tbody").html("<tr><td colspan='6' class='text-center'><b>Carregando usuários...<b></td></tr>");

    $.ajax({
        method: "GET",
        url: CONFIG.URL_API + "/usuarios",
        success: (result) => {
            usuarios = result;
            listarUsuarios();
        }
    })
}

function getUsersByName(nome){
    if(nome != ''){
        $.ajax({
            method: "POST",
            url: CONFIG.URL_API + "/getusersbyname/",
            data: {
                nome: nome
            },
            success: (result) => {
                usuarios = result[0];
                listarUsuarios();
            }
        });
    }else{
        listarUsuarios();
    }
}

function getUsersByUsuario(usuario){
    if(usuario != ''){
        $.ajax({
            method: "POST",
            url: CONFIG.URL_API + "/getusersbyusuario/",
            data: {
                usuario: usuario
            },
            success: (result) => {
                usuarios = result[0];
                listarUsuarios();
            }
        });
    }else{
        listarUsuarios();
    }
}

function getUsersByEmail(email){
    if(email != ''){
        $.ajax({
            method: "POST",
            url: CONFIG.URL_API + "/getusersbyemail/",
            data: {
                email: email
            },
            success: (result) => {
                usuarios = result[0];
                listarUsuarios();
            }
        });
    }else{
        listarUsuarios();
    }
}

function getUsersByTipo(idTipo){
    if(idTipo != 0){
        $.ajax({
            method: "POST",
            url: CONFIG.URL_API + "/getusersbytipo/",
            data: {
                idtipo: idTipo
            },
            success: (result) => {
                usuarios = result[0];
                listarUsuarios();
            }
        });
    }else{
        getUsers();
    }
}

function maskSenha(senha){
    let retorno = '';
    for(var i in senha){
        retorno += '*';
    }
    return retorno;
}

function montarCabecalhoTabela(ativos){
    let retorno = '';
    if(ativos.nome){retorno += '<th>Nome</th>';}
    if(ativos.usuario){retorno += '<th>Usuário</th>';}
    if(ativos.email){retorno += '<th>Email</th>';}
    if(ativos.senha){retorno += '<th>Senha</th>';}
    if(ativos.tipo){retorno += '<th>Tipo</th>';}
    return retorno;
}

function montarCorpoTabela(ativos){
    let retorno = '';

    $("#tableUsuarios>tbody>tr").each((index, element) => {
        retorno += '<tr>';
        if(ativos.nome){
            retorno += '<td>' + $(element).find("td.toogle-visibility-nome").find("input").val() + '</td>';
        }
        if(ativos.usuario){
            retorno += '<td>' + $(element).find("td.toogle-visibility-usuario").find("input").val() + '</td>';
        }
        if(ativos.email){
            retorno += '<td>' + $(element).find("td.toogle-visibility-email").find("input").val() + '</td>';
        }
        if(ativos.senha){
            retorno += '<td>' + maskSenha($(element).find("td.toogle-visibility-senha").find("input").val()) + '</td>';
        }
        if(ativos.tipo){
            retorno += '<td>' + $(element).find("td.toogle-visibility-tipo").find("select option:selected").text() + '</td>';
        }
        retorno += '</tr>';
    });

    return retorno;
}

function montarTabelaUsuariosExportar(){
    let ativos = {
        nome: $("#cVisivelNome").is(":checked"),
        usuario: $("#cVisivelUsuario").is(":checked"),
        email: $("#cVisivelEmail").is(":checked"),
        senha: $("#cVisivelSenha").is(":checked"),
        tipo: $("#cVisivelTipo").is(":checked")
    }

    let tabela = "<table>";
    tabela += "<thead><tr>";
    tabela += montarCabecalhoTabela(ativos);
    tabela += "</tr></thead>";
    tabela += "<tbody>";
    tabela += montarCorpoTabela(ativos);
    tabela += "</tbody>";
    tabela += "</table>";

    return tabela;
}

$(async () => {

    await fetch("../js/config.json").then(response => response.text()).then(text => {
        CONFIG = JSON.parse(text);
    });

    carregarTiposUsuario();
    getUsers();

    $("#bCadastrarUsuario").click(() => {
        limparEdicao();
        cadastrarUsuario();
    })

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

    $("#iBuscarNome").keypress((event) => {
        let nome = $("#iBuscarNome").val() + event.key;
        getUsersByName(nome);
    });

    $("#iBuscarNome").keyup((event) => {
        if($("#iBuscarNome").val() == ''){
            getUsers();
        }else{
            getUsersByName($("#iBuscarNome").val());
        }
    });

    $("#iBuscarUsuario").keypress((event) => {
        let usuario = $("#iBuscarUsuario").val() + event.key;
        getUsersByUsuario(usuario);
    });

    $("#iBuscarUsuario").keyup((event) => {
        if($("#iBuscarUsuario").val() == ''){
            getUsers();
        }else{
            getUsersByUsuario($("#iBuscarUsuario").val());
        }
    });

    $("#iBuscarEmail").keypress((event) => {
        let email = $("#iBuscarEmail").val() + event.key;
        getUsersByEmail(email);
    });

    $("#iBuscarEmail").keyup((event) => {
        if($("#iBuscarEmail").val() == ''){
            getUsers();
        }else{
            getUsersByEmail($("#iBuscarEmail").val());
        }
    });

    $("#iBuscarTipo").on("change", (event) => {
        getUsersByTipo($("#iBuscarTipo option:selected").val())
    });

    $("#bExportarDadosUsuarios").click(() => {
        let tabelaUsuarios = montarTabelaUsuariosExportar();
        console.log(tabelaUsuarios);
        let style = "<style>";
        style += "table {width: 100%;font: 20px Calibri;}";
        style += "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style += "padding: 2px 3px;text-align: center;}";
        style += "</style>";

        let win = window.open("", "", "height=700, width=700");
        win.document.write("<html><head>");
        win.document.write("<title>Lista de funcionários</title>");
        win.document.write(style);
        //win.document.write("<link rel='stylesheet' href='../css/bootstrap.min.css' />");
        win.document.write("</head>");
        win.document.write("<body>");
        win.document.write(tabelaUsuarios);
        win.document.write("</body></html>");

        win.document.close();
        win.print();
    });
})