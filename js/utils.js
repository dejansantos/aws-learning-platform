/**
 * ============================================================
 * AWS Learning Platform
 * utils.js
 *
 * Funções reutilizáveis da plataforma.
 * Nenhuma função aqui depende de outra parte do sistema.
 * ============================================================
 */

const Utils = {

    /**
     * Gera um UUID simples.
     */
    uuid() {

        return crypto.randomUUID();

    },

    /**
     * Número aleatório.
     */
    random(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    },

    /**
     * Embaralha um array (Fisher-Yates).
     */
    shuffle(array) {

        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [copy[i], copy[j]] = [copy[j], copy[i]];

        }

        return copy;

    },

    /**
     * Espera.
     */
    sleep(ms) {

        return new Promise(resolve => setTimeout(resolve, ms));

    },

    /**
     * Data brasileira.
     */
    formatDate(date = new Date()) {

        return date.toLocaleDateString("pt-BR");

    },

    /**
     * Hora brasileira.
     */
    formatTime(date = new Date()) {

        return date.toLocaleTimeString("pt-BR");

    },

    /**
     * Console bonito.
     */
    log(message) {

        console.log(

            `%cAWS Learning`,

            "background:#FF9900;color:#000;padding:4px;border-radius:4px;",

            message

        );

    }

};