var CONFIG;

$(() => {

    fetch("../js/config.json").then(response => response.text()).then(text => {
        CONFIG = JSON.parse(text)
    });

    $("#bCadastroUsuarios").click(() => {
        window.electronAPI.abrirCadastroUsuarios();
    });

    $("#bCadastroProdutos").click(() => {
        window.electronAPI.abrirCadastroProdutos();
    })

    $("#bSair").click(() => {
        if(confirm("Deseja realmente sair do sistema?")) window.electronAPI.fecharSistema();
    });
})