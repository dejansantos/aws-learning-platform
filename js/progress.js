/**
 * ============================================================
 * AWS Learning Platform
 * progress.js
 * Controle do progresso do aluno
 * ============================================================
 */

const Progress = {

    data: {},

    init() {

        this.load();

        this.render();

    },

    load() {

        this.data = {

            xp: Storage.get("xp") || 0,

            level: Storage.get("level") || "Iniciante",

            currentLesson: Storage.get("currentLesson") || 1,

            completedLessons: Storage.get("completedLessons") || []

        };

    },

    save() {

        Storage.set("xp", this.data.xp);

        Storage.set("level", this.data.level);

        Storage.set("currentLesson", this.data.currentLesson);

        Storage.set(

            "completedLessons",

            this.data.completedLessons

        );

    },

    addXP(value) {

        this.data.xp += value;

        this.save();

        this.render();

    },

    completeLesson(lesson) {

        if (!this.data.completedLessons.includes(lesson)) {

            this.data.completedLessons.push(lesson);

        }

        this.save();

        this.render();

    },

    calculatePercentage(totalLessons = 20) {

        return Math.round(

            (this.data.completedLessons.length / totalLessons) * 100

        );

    },

    render() {

        const progressText = document.getElementById("progressText");

        const progressBar = document.getElementById("progressBar");

        if (progressText) {

            progressText.textContent =
                `${this.calculatePercentage()}% concluído`;

        }

        if (progressBar) {

            progressBar.value =
                this.calculatePercentage();

        }

    }

};