$(() => {
    $("#bSair").click(() => {
        if(confirm("Deseja realmente sair do sistema?")) window.electronAPI.fecharSistema();
    });
})