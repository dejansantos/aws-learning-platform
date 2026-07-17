/**
 * ============================================================
 * AWS Learning Platform
 * app.js
 * Inicialização central da aplicação
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    Utils.log("====================================");
    Utils.log("AWS Learning Platform");
    Utils.log("Inicializando aplicação...");

    // Inicialização dos módulos básicos
    Storage.init();
    Theme.init();
    Router.init();
    Progress.init();

    // Eventos globais
    bindEvents();

    // Inicialização específica da página
    initPage();

    Utils.log("Aplicação carregada com sucesso!");
    Utils.log("====================================");

});


/**
 * ============================================================
 * Eventos Globais
 * ============================================================
 */

function bindEvents() {

    const themeButton = document.getElementById("themeButton");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            Theme.toggle();

        });

    }

}


/**
 * ============================================================
 * Inicialização conforme a página atual
 * ============================================================
 */

function initPage() {

    const page = Router.getCurrentPage();

    Utils.log(`Página atual: ${page}`);

    switch (page) {

        case "aula1.html":

            if (typeof Course !== "undefined") {

                Course.init();

            }

            break;

        case "dashboard.html":

            if (typeof Dashboard !== "undefined") {

                Dashboard.init();

            }

            break;

        case "simulado.html":

            if (typeof Quiz !== "undefined") {

                Quiz.init();

            }

            break;

        case "perfil.html":

            // Futuramente
            break;

        default:

            // index.html e outras páginas
            break;

    }

}