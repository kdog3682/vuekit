import { vueflow } from "/home/kdog3682/2024-javascript/vuekit/vueflow.js"
import { reduce, match, templater2, templater, getLast, dashSplit, chosen, parseFrontmatter } from "/home/kdog3682/2023/utils.js"
import { registerMethod, registerComponent } from "/home/kdog3682/2024-javascript/vuekit/registerComponent.js"
import { createApp } from "/home/kdog3682/2024-javascript/vuekit/createApp.js"

import * as baseComponents from "./base-components.js"
import * as methods from "./methods.js"

function setup(input) {
    Object.values(baseComponents).forEach(registerComponent)
    Object.entries(methods).forEach(registerMethod)

    let [text, frontMatter] = parseFrontmatter(input)
    if (frontMatter.dollarInfusion || /^name: *\$/m.test(input)) {
        const items = dashSplit(text)
        const reducer = (s) => {
            const m = match(s, /^name: +\$(\S+)/m)
            if (m) {
                return [m, s.replace(/\s*\S.+\s*/, '')]
            }
        }
        const dollars = reduce(items, reducer)
        const c = getLast(items)
        // console.log("c", c)
        // console.log("dollars", dollars)
        text = templater2(c, dollars)
        console.log(text)
    } else {
        text = chosen(text, "last")
    }

     const component = vueflow(text, "component")
    try {
        // console.log(component)
        createApp(component)
    } catch (e) {
        console.log("ERROR", e)
        console.log(component.template)
        console.log(text)
    }
}
export default setup
