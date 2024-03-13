export { simpleSetup }
import {vueflow} from "/home/kdog3682/2024-javascript/vuekit/vueflow.js"
import {createApp} from "/home/kdog3682/2024-javascript/vuekit/createApp.js"
import {VHtml} from "./base-components.js"


function simpleSetup(s) {
    const value = vueflow(s, 'html')
    throw value
    return createApp(VHtml, value)
}


console.log(simpleSetup(`
        p hi
        container asdf = 1
            asdfasdf = 223
            p hi
`))
