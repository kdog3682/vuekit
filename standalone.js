export {
    standalone,
}
import {
    create,
    createApp,
    build,
    registerComponent,
    postfix
} from "./vuetify.js"

import * as baseComponents from "./base-components.js"


function standalone(c) {
    return createApp(postfix(c), {components: baseComponents})
}
