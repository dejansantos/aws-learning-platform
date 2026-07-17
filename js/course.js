/**
 * ============================================================
 * AWS Learning Platform
 * course.js
 * Engine responsável por carregar e renderizar as aulas.
 * ============================================================
 */

const Course = {

    lessonId: 1,
    lesson: null,

    /**
     * Inicializa o Course Engine
     */
    async init() {

        try {

            this.lessonId = this.getLessonId();

            await this.loadLesson();

            this.render();

            Utils.log(`Aula ${this.lessonId} carregada com sucesso.`);

        } catch (error) {

            console.error(error);

            this.showError();

        }

    },

    /**
     * Obtém o ID da aula pela URL.
     */
    getLessonId() {

        const file = window.location.pathname
            .split("/")
            .pop();

        const match = file.match(/\d+/);

        return match ? parseInt(match[0]) : 1;

    },

    /**
     * Carrega o JSON.
     */
    async loadLesson() {

        const response = await fetch(`../data/aula${this.lessonId}.json`);

        if (!response.ok) {

            throw new Error("Não foi possível carregar a aula.");

        }

        this.lesson = await response.json();

    },

    /**
     * Renderiza toda a página.
     */
    render() {

        const container = document.getElementById("courseContainer");

        if (!container) return;

        container.innerHTML = `
            ${this.renderHero()}
            ${this.renderObjectives()}
            ${this.renderModules()}
            ${this.renderLab()}
            ${this.renderFooter()}
        `;

    },

    /**
     * ============================================================
     * HERO
     * ============================================================
     */

    renderHero() {

        return `

        <section class="aws-hero">

            <div class="aws-hero-content">

                <span class="aws-hero-icon">

                    ${this.lesson.icone}

                </span>

                <h1>

                    ${this.lesson.titulo}

                </h1>

                <p>

                    ${this.lesson.subtitulo}

                </p>

            </div>

            <div class="aws-hero-info">

                <div class="hero-stat">

                    <small>⭐ XP</small>

                    <strong>${this.lesson.xp}</strong>

                </div>

                <div class="hero-stat">

                    <small>⏱ Duração</small>

                    <strong>${this.lesson.duracao}</strong>

                </div>

                <div class="hero-stat">

                    <small>🎓 Nível</small>

                    <strong>${this.lesson.nivel}</strong>

                </div>

            </div>

        </section>

        `;

    },

    /**
     * Objetivos
     */
    renderObjectives() {

        return `

        <section class="aws-card mt-3">

            <h2>🎯 Objetivos</h2>

            <ul>

                ${this.lesson.objetivos
                    .map(obj => `<li>✔ ${obj}</li>`)
                    .join("")}

            </ul>

        </section>

        `;

    },

    /**
     * Conteúdo
     */
    renderModules() {

        return `

        <section class="mt-3">

            <h2>📚 Conteúdo da Aula</h2>

            ${this.lesson.modulos.map(modulo => `

                <div class="aws-card mt-3">

                    <h3>${modulo.titulo}</h3>

                    <ul>

                        ${modulo.conteudo
                            .map(item => `<li>${item}</li>`)
                            .join("")}

                    </ul>

                </div>

            `).join("")}

        </section>

        `;

    },

    /**
     * Laboratório
     */
    renderLab() {

        return `

        <section class="aws-card mt-3">

            <h2>🧪 Laboratório Mental</h2>

            <p>

                <strong>

                    ${this.lesson.laboratorio.titulo}

                </strong>

            </p>

            <p>

                ${this.lesson.laboratorio.descricao}

            </p>

        </section>

        `;

    },

    /**
     * Rodapé
     */
    renderFooter() {

        return `

        <section class="aws-card mt-3">

            <h2>

                🎉 Fim da Aula

            </h2>

            <p>

                Agora teste seus conhecimentos no Quiz.

            </p>

            <button
                class="aws-button"
                id="startQuiz">

                📝 Iniciar Quiz

            </button>

        </section>

        `;

    },

    /**
     * Tratamento de erros
     */
    showError() {

        const container = document.getElementById("courseContainer");

        if (!container) return;

        container.innerHTML = `

        <section class="aws-card">

            <h2>

                📚 Aula em construção

            </h2>

            <p>

                Esta aula ainda não está disponível.

            </p>

        </section>

        `;

    }

};