/* deno-fmt-ignore */ import {finish} from "/home/kdog3682/2024-javascript/evalenv/finish.js"
/* deno-fmt-ignore */ import {read, getVimSectionText, getAppFunction, getModuleFunc, requestAppend, append, denoImports, notify, npath, textAndLang, denoFileRunner, isFile, isDir, requestWrite, panicPrompt, cwd, readdir, rpw, bash, sysArgs, write} from "/home/kdog3682/2024-javascript/nodekit/deno.js"
/* deno-fmt-ignore */ import {vueflow} from "/home/kdog3682/2024-javascript/vuekit/vueflow.js"

Deno.abc = 0
Deno.abc = 1
async function vueGenerateComponent(vim) {
    const text = getVimSectionText(vim)
    const c = vueflow(text, "component")
    const options = {
        finisherDir: '/home/kdog3682/2024-javascript/vuekit/finishers',
    }
    await finish(c, c, options)
    if (Deno.abc) {
        if (c.data) {
            console.log(c.data())
        }
        console.log(c.template)
    }
    return 
}

export default vueGenerateComponent
