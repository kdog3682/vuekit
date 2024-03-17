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
    if (frontMatter.dollarInfusion) {
        const items = dashSplit(text)
        const reducer = (s) => {
            const m = match(s, /^name: +\$(\S+)/m)
            if (m) {
                return [m, s.replace(/\s*\S.+\s*/, '')]
            }
        }
        const dollars = reduce(items, reducer)
        text = templater2(getLast(items), dollars)
        // console.log(text)
    } else {
        text = chosen(text, "last")
    }

     const value = vueflow(text, "component")
    try {
        createApp(value, value)
    } catch (e) {
        console.log("ERROR", e)
        console.log(value.template)
        console.log(text)
    }
}
export default setup
