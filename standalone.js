export {
    standalone,
}
import { setup } from "./setup.js"
import { fixTemplate, postfix } from "./postfix.js"
import {vueflow} from "./vueflow.js"
import * as partialComponents from "./components/partials-components.js"
import * as rawComponents from "./components/raw-components.js"

function standalone(component) {
    const p = Object.values(partialComponents).map(fixTemplate)
    const r = Object.values(rawComponents).map(vueflow)

    const findMain = (components) => {
        let mains = components.filter((component) => component.main)
        if (mains.length == 1) {
            return mains[0]
        }
        if (mains.length == 0) {
            return components.find((component) => component.name == 'r-test')
        }
        return getLongest(mains, (x) => x.main, Object)
    }

    // i dont think it is really necessary to do things with partials
    const components = p.concat(r)
    const main = component == null
        ? findMain(r)
        : components.includes(component)
        ? component
        : vueflow(component)

    return setup({ main: postfix(main), components })
}
