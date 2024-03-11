import {vueRenderer, renderWrapper} from "/home/kdog3682/2024-javascript/vuekit/render.js"
export {
    VKatex,
}
// import katex from "../../lib/katex.js"

// const katex = {
    // renderToString(s) {
        // return s
    // }
// }
function getKatex(s) {
    try {
        return katex.renderToString(s, { throwOnError: true })
    } catch (e) {
        return `
            <span style="color: red;">Error rendering KaTeX: ${s}</span>
        `
    }
}
const VKatex = {
    name: "v-katex",
    props: ["value"],
    render(h) {
        const innerHTML = getKatex(this.value)
        return h("span", { class: "v-katex", domProps: { innerHTML } })
    }
}
