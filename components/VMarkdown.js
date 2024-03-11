import {vueRenderer, renderWrapper} from "/home/kdog3682/2024-javascript/vuekit/render.js"
import {inlineMarkdown} from "/home/kdog3682/2024-javascript/js-toolkit/inlineMarkdown.js"
export {
    VMarkdown,
}

const VMarkdown = {
    name: 'v-markdown',
    render(h) {
        const json = inlineMarkdown(this.value)
        return vueRenderer(this, json)
    },
    props: ['value'],
}

