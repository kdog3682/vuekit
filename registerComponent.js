export {
    registerComponent,
}
import {
    importLoader,
    cssLoader
} from "/home/kdog3682/2024-javascript/js-toolkit/browser.js"
import Vue from "../lib/vue.js"

function registerComponent(v) {
    const name = v.name
    if (window.hasOwnProperty(name)) {
        return console.log("the window already has the name: $1", name)
    }

    Vue.component(name, v)
    window[name] = v
    cssLoader(v.css)
    importLoader(v.imports)
}

