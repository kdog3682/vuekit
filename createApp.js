export {
    createApp,
}

import Vue from "../lib/vue.js"
function createApp(component, value) {
    const defaultApp = {
        name: "App",
        el: "#app",
        render(h) {
            const opts = value ? { props: { value } } : null
            return h(component, opts)
        }
    }
    const app = new Vue(defaultApp)
    // window.app = app
    window.vue = app
    window.app = app.$children[0]
    return app
}
