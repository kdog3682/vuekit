export {
    setup,
}

import {registerComponent} from "/home/kdog3682/2024-javascript/vuekit/registerComponent.js"
import { must, flat } from "/home/kdog3682/2023/utils.js"
import Vue from "../lib/vue.js"
import * as logger from "/home/kdog3682/2024-javascript/js-toolkit/logger.js"

import * as baseComponents from "./base-components.js"
import * as advancedComponents from "./advanced-components.js"

function createApp(component, value) {
    const defaultApp = {
        name: "App",
        el: "#app",
        render(h) {
            return h(component, { props: {value}})
        }
    }
    const app = new Vue(defaultApp)
    return app
}

function setup(options) {

    const value = must(options, 'input')
    const component = must(options, 'main')

    const components = flat(baseComponents, advancedComponents)
    components.forEach(registerComponent)

    const errorHandler = (e, vm, loc) => {
        logger.error(e, vm, loc)
    }
    Vue.config.errorHandler = errorHandler

    return createApp(component, value)
}

