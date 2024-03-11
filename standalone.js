export {
    standalone,
}
import { setup } from "./setup.js"
import { fixTemplate, postfix } from "./postfix.js"
import {vueflow} from "./vueflow.js"
import * as partialComponents from "./components/partials-components.js"
import * as rawComponents from "./components/raw-components.js"

function standalone(component) {
    const main = postfix(vueflow(component))
    const p = Object.values(partialComponents).map(fixTemplate)
    const r = Object.values(rawComponents).map(vueflow)
    const components = p.concat(r)
    return setup({ main, components })
}
