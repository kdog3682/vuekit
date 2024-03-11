import {vueRenderer, renderWrapper} from "/home/kdog3682/2024-javascript/vuekit/render.js"
import * as txflow from "../../txflow/main.js"
export {
    VMarkdownPage,
}

const opts = {
    lang: 'vuemd',
    mode: 'json',
}
const vuemd = txflow.factory(opts)

const VMarkdownPage = {
    name: 'v-markdown-page',
    render(h) {
        const json = vuemd(this.value)
        // console.loggg(json)
        return vueRenderer(this, json)
    },
    props: ['value'],
}

const text = `
hi there

`
// console.loggg(vuemd(text))



