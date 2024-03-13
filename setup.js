export { setup }

import { registerComponent } from "/home/kdog3682/2024-javascript/vuekit/registerComponent.js"
import { must, flat } from "/home/kdog3682/2023/utils.js"
import Vue from "../lib/vue.js"
import * as logger from "/home/kdog3682/2024-javascript/js-toolkit/logger.js"

import * as baseComponents from "./base-components.js"
import * as advancedComponents from "./advanced-components.js"
import * as methods from "./methods.js"

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
    return app
}

function registerMethod([k, v]) {
    Vue.prototype[k] = v
}

function setup(options) {
    const value = options.input
    const additionalComponents = options.components
    const component = must(options, "main")

    const components = flat(
        component,
        baseComponents,
        advancedComponents,
        additionalComponents
    )

    components.forEach(registerComponent)
    entries(methods).forEach(registerMethod)

    const errorHandler = (e, vm, loc) => {
        logger.error(e, vm, loc)
    }
    Vue.config.errorHandler = options.errorHandler || errorHandler

    return createApp(component, value)
}
