var CONFIG;

var setores = null;
var produtos = null;
var contPaginas = 0;
var paginaAtual = 0;

function excluir(i){
    if(confirm("Deseja realmente excluir o produto " + produtos[i].descricao + "?")){
        $.ajax({
            method: "DELETE",
            url: CONFIG.URL_API + "/produtos/" + produtos[i].id,
            success: (result) => {
                if(result){
                    alert("Usuário excluído com sucesso!");
                    getProdutos();
                }
            }
        });
    }
}

function editar(i){
    $("#modalEditarProdutoTitulo").text("Editar produto");

    let produto = produtos[i];
    $("#idProdutoEditar").val(produto.id);
    $("#iDescricaoEditar").val(produto.descricao);
    $("#iCustoEditar").val(produto.preco_custo);
    $("#iVendaEditar").val(produto.preco_venda);
    $("#iLucroEditar").val(produto.porcentagem_lucro);
    $("#iEstoqueEditar").val(produto.quantidade_estoque);
    $("#iSetorEditar").val(produto.id_setor);
}

function carregarSetores(){

    $("#sSetorEditar").html("<option></option>");
    $("#iBuscarSetor").html("<option value='0'>Todos</option>");
    $("#iSetorEditar").html("<option value='0'></option>")

    $.ajax({
        method: "GET",
        url: CONFIG.URL_API + "/setores",
        success: (result) => {
            setores = result;
            for(var i in result){
                $("#iBuscarSetor").append("<option value='" + result[i].id + "'>" + result[i].descricao + "</option>");
                $("#iSetorEditar").append("<option value='" + result[i].id + "'>" + result[i].descricao + "</option>");
            }
        }
    });
}

function changeBuscar(){
    let buscar = $("#sBuscarPor option:selected").val();
    $("[id^=iBuscar]").each((index, element) => {
        $(element).hide();
    });

    $("#iBuscar" + buscar).show();

    $("#iBuscarDescricao").val("");
    $("#iBuscarSetor").val("0");
}

function montarSelectSetor(id_setor){
    let $select = "<select class='form-control' disabled>";

    for(var i in setores){
        $select += "<option value='";
        $select += setores[i].id;
        $select += "'";
        if(id_setor == setores[i].id) $select += " selected";
        $select += ">";
        $select += setores[i].descricao;
        $select += "</option>";
    }

    $select += "</select>"
    return $select;
}

function listarProdutos(pagina){
    $("#tableProdutos>tbody").html("");

    indexInicial = (pagina - 1) * CONFIG.MAX_RESULT_PRODUCTS;
    
    let contShow = 0;

    for(var i = indexInicial; i < indexInicial + CONFIG.MAX_RESULT_PRODUCTS; i++){
        if(!produtos[i]) break; //Se não tiver o produto, encerra o loop

        let linha = "<tr>";
        linha += "<td style='display:none;'>";
        linha += produtos[i].id;
        linha += "</td>";
        linha += "<td class='toogle-visibility-descricao'>";
        linha += "<input type='text' class='form-control' value='" + produtos[i].descricao + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-custo'>";
        linha += "<input type='text' class='form-control' value='" + produtos[i].preco_custo + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-venda'>";
        linha += "<input type='text' class='form-control' value='" + produtos[i].preco_venda + "' disabled />";
        linha += "</td>";
        linha += "<td class='toogle-visibility-lucro'>";
        linha += "<input type='text' class='form-control' value='" + produtos[i].porcentagem_lucro + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-estoque'>";
        linha += "<input type='text' class='form-control' value='" + produtos[i].quantidade_estoque + "' disabled/>";
        linha += "</td>";
        linha += "<td class='toogle-visibility-setor'>";
        linha += montarSelectSetor(produtos[i].id_setor);
        linha += "</td>";
        linha += "<td class='toogle-visibility-acoes'>";
        linha += "<div class='btn-group' role='group' aria-label='Basic example'><button type='button' class='btn btn-primary' onclick='editar(" + i + ");' data-bs-toggle='modal' data-bs-target='#modalEditarProduto' data-toggle='tooltip' data-placement='top' title='Editar'><i class='fa fa-edit'></i></button>&nbsp;<button type='button' class='btn btn-danger' onclick='excluir(" + i + ")' data-toggle='tooltip' data-placement='top' title='Excluir'><i class='fa fa-trash'></i></button></div>";
        linha += "</td>";
        linha += "</tr>";

        $("#tableProdutos>tbody").append(linha);
        contShow++;
    }

    let init = produtos.length ? indexInicial + 1 : 0;
    $("#sInitCont").text(init);
    $("#sFinalCont").text(indexInicial + contShow);
    $("#sTotalResultados").text(produtos.length);

    pagina == 1 ? $("#aPaginaAnterior").addClass("disabled") : $("#aPaginaAnterior").removeClass("disabled");
    pagina == contPaginas ? $("#aPaginaPosterior").addClass("disabled") : $("#aPaginaPosterior").removeClass("disabled");
    if(!init) $("#aPaginaPosterior").addClass("disabled");
}

function atribuirClique(pagina){
    return $(pagina).click(() => {
        let numeroPagina = $($(pagina).children()[0]).attr("numero-pagina");
        paginaAtual = numeroPagina;

        $("#dPaginacaoResultados>li.active").removeClass("active");
        $($("#dPaginacaoResultados>li")[numeroPagina - 1]).addClass("active");

        listarProdutos(numeroPagina);
    });
}

function gerarPaginacao(contResultados){
    $("#dPaginacaoResultados").html("");
    contPaginas = Math.ceil(Number(contResultados / CONFIG.MAX_RESULT_PRODUCTS));
    paginaAtual = 1;

    for(var i = 0; i<contPaginas; i++){
        let pagina = `<li class='page-item'><a class='page-link' href='#' numero-pagina='${i+1}'>${i+1}</a></li>`;
        $("#dPaginacaoResultados").append(atribuirClique(pagina));
    }

    $($("#dPaginacaoResultados>li")[0]).addClass("active");
}

function getProdutos(){
    $("#tableProdutos>tbody").html("<tr><td colspan='7' class='text-center'><b>Carregando produtos...<b></td></tr>");

    $.ajax({
        method: "GET",
        url: CONFIG.URL_API + "/produtos",
        success: (result) => {
            produtos = result;
            gerarPaginacao(produtos.length);
            listarProdutos(1);
        }
    });
}

function cadastrarProduto(){
    $("#modalEditarProdutoTitulo").text("Cadastrar novo produto");
}

function limparEdicao(){
    $("#idProdutoEditar").val("");
    $("#iDescricaoEditar").val("");
    $("#iCustoEditar").val("");
    $("#iVendaEditar").val("");
    $("#iLucroEditar").val("");
    $("#iEstoqueEditar").val("");
    $("#iSetorEditar").val("0");
}

function salvarEdicao(){
    if(confirm("Deseja realmente salvar os dados informados?")){
        
        let idProdutoEditar = $("#idProdutoEditar").val();
        let data = {
            descricao: $("#iDescricaoEditar").val(),
            preco_custo: $("#iCustoEditar").val(),
            preco_venda: $("#iVendaEditar").val(),
            porcentagem_lucro: $("#iLucroEditar").val(),
            quantidade_estoque: $("#iEstoqueEditar").val(),
            id_setor: $("#iSetorEditar option:selected").val()
        };

        if(idProdutoEditar){
            $.ajax({
                method: "PUT",
                url: CONFIG.URL_API + "/produtos/" + idProdutoEditar,
                data: data,
                success: (result) => {
                    if(result.id){
                        alert("Produto alterado com sucesso!");
                        getProdutos();
                    }
                }
            });
        }else{
            $.ajax({
                method: "POST",
                url: CONFIG.URL_API + "/produtos/" + idProdutoEditar,
                data: data,
                success: (result) => {
                    if(result.id){
                        alert("Produto cadastrado com sucesso!");
                        getProdutos();
                    }
                }
            });
        }

    }
}

function calcularLucro(custo, venda){
    let lucroEmDinheiro = Number(Number(venda) - Number(custo)).toFixed(2);
    let porcLucro = (lucroEmDinheiro / Number(custo)) * 100;
    return porcLucro;
}

$(async () => {
    await fetch("../js/config.json").then(response => response.text()).then(text => {
        CONFIG = JSON.parse(text);
    });

    carregarSetores();
    getProdutos();

    $("[id^=cVisivel]").each((index, element) => {
        $(element).attr("checked", true);

        $(element).on("change", (e) => {
            let visible = $(element).is(":checked");
            let el = $(element).attr("toogle-visibility");

            visible ? $(".toogle-visibility-" + el).show() : $(".toogle-visibility-" + el).hide();
        });
    });

    $("#bCadastrarProduto").click(() => {
        limparEdicao();
        cadastrarProduto();
    });

    $("#bFechar").click(() => {
        window.electronAPI.fecharTelaAtual();
    });

    $("#iCustoEditar").keyup((event) => {
        let custo = $("#iCustoEditar").val();
        let venda = $("#iVendaEditar").val();
        
        if(custo && venda){
            let porcLucro = calcularLucro(custo, venda);
            $("#iLucroEditar").val(Number(porcLucro).toFixed(2));
        }else{
            $("#iLucroEditar").val("");
        }
    });

    $("#iVendaEditar").keyup((event) => {
        let custo = $("#iCustoEditar").val();
        let venda = $("#iVendaEditar").val();
        
        if(custo && venda){
            let porcLucro = calcularLucro(custo, venda);
            $("#iLucroEditar").val(Number(porcLucro).toFixed(2));
        }else{
            $("#iLucroEditar").val("");
        }
    });

    $("#iLucroEditar").keyup((event) => {
        let custo = $("#iCustoEditar").val();
        let porcLucro = $("#iLucroEditar").val();
        
        if(custo && porcLucro){
            let venda = Number(Number(custo) + Number(Number(custo) * Number(porcLucro))/100).toFixed(2);
            $("#iVendaEditar").val(venda);
        }else{
            $("#iVendaEditar").val("");
        }
    });

    $("#aPaginaAnterior").click(() => {
        if(paginaAtual > 1) paginaAtual--;
        $("#dPaginacaoResultados>li.active").removeClass("active");
        $($("#dPaginacaoResultados>li")[paginaAtual - 1]).addClass("active");
        listarProdutos(paginaAtual);
    });

    $("#aPaginaPosterior").click(() => {
        if(paginaAtual < contPaginas) paginaAtual++;
        $("#dPaginacaoResultados>li.active").removeClass("active");
        $($("#dPaginacaoResultados>li")[paginaAtual - 1]).addClass("active");
        listarProdutos(paginaAtual);
    });
})