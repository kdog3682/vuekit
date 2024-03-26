import {registerComponent} from "/home/kdog3682/2024-javascript/vuekit/registerComponent.js"
export {
    createApp,
}

import Vue from "../lib/vue.js"
function createApp(x, value) {
    let component
    if (Array.isArray(x)) {
        x.forEach(registerComponent)
        component = x[x.length - 1]
    } else {
        component = x
    }
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
