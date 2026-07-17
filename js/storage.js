/**
 * ============================================================
 * AWS Learning Platform
 * storage.js
 * ============================================================
 */

const Storage = {

    KEY: "aws-learning",

    defaultData: {

        theme: "light",

        xp: 0,

        level: "Iniciante",

        currentLesson: 1,

        completedLessons: [],

        quiz: {},

        stats: {}

    },

    init() {

        if (!localStorage.getItem(this.KEY)) {

            localStorage.setItem(

                this.KEY,

                JSON.stringify(this.defaultData)

            );

        }

    },

    getData() {

        return JSON.parse(

            localStorage.getItem(this.KEY)

        );

    },

    saveData(data) {

        localStorage.setItem(

            this.KEY,

            JSON.stringify(data)

        );

    },

    get(property) {

        return this.getData()[property];

    },

    set(property, value) {

        const data = this.getData();

        data[property] = value;

        this.saveData(data);

    },

    reset() {

        localStorage.setItem(

            this.KEY,

            JSON.stringify(this.defaultData)

        );

    }

};