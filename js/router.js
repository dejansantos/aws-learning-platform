/**
 * ============================================================
 * AWS Learning Platform
 * router.js
 * Controle de Navegação
 * ============================================================
 */

const Router = {

    currentPage: "",

    init() {

        this.currentPage = window.location.pathname
            .split("/")
            .pop();

        this.highlightMenu();

    },

    highlightMenu() {

        const links = document.querySelectorAll(".aws-menu a");

        links.forEach(link => {

            const href = link.getAttribute("href");

            if (href === this.currentPage) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });

    },

    getCurrentPage() {

        return this.currentPage;

    }

};