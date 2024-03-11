import {cssLoader} from "/home/kdog3682/2024-javascript/js-toolkit/browser.js"
export {
    VHighlightJS,
}
import hljs from "../../lib/hljs.js"
// console.log(hljs)
// import javascript from "../../lib/hljs-javascript.js"
// hljs.registerLanguage('javascript', javascript)

function setWindow(k, v, opts) {

    if (window.hasOwnProperty(k)) {
        return 
    }
    window[k] = v
}
function highlight(code, language = 'javascript') {
    return hljs.highlight(code, {language}).value
}
function loadTheme(theme) {
    if (!theme) {
        return 
        theme = 'atom-one-dark'
        theme = 'arduino-light'
    }
    setWindow('theme', theme, {once: true})
    const url = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${theme}.min.css`
    console.log(`theme has been loaded: ${theme}`)
    cssLoader(url)
}

const VHighlightJS = {
    name: "v-highlight-js",
    props: ["value", "lang", "theme"],
    render(h) {
        const innerHTML = highlight(this.value, this.lang)
        const parentOpts = {
            staticClass: 'v-highlight-js'
        }
        return h("div", parentOpts, [h("pre", [h("code", { domProps: { innerHTML } })])])
    },
    mounted() {
        loadTheme(this.theme)
    },
}


// console.log(highlight('console.log(foo())'))
