/**
 * ============================================================
 * AWS Learning Platform
 * theme.js
 * Controle de Temas
 * ============================================================
 */

const Theme = {

    current: "light",

    init() {

        const savedTheme = Storage.get("theme");

        this.current = savedTheme || "light";

        this.apply();

        this.updateButton();

    },

    apply() {

        document.body.classList.toggle(

            "dark",

            this.current === "dark"

        );

    },

    toggle() {

        this.current = this.current === "light"
            ? "dark"
            : "light";

        Storage.set("theme", this.current);

        this.apply();

        this.updateButton();

    },

    updateButton() {

        const button = document.getElementById("themeButton");

        if (!button) return;

        button.innerHTML = this.current === "dark"

            ? "☀️ Claro"

            : "🌙 Escuro";

    },

    isDark() {

        return this.current === "dark";

    },

    isLight() {

        return this.current === "light";

    }

};