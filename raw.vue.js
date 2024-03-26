name: $linebreak

div class = linebreak
    c: p0.5 my10 bgblue
------------------------------------------------------------

name: $keys

for key, index in keys
    c: w200 flex
    span {key}
        c: bblue0.5 center bold 
        click(index, key) {
            this.index = index
            this.toggle(key)
            // console.log('force updating')
        }
        style(index, key) {
            const has = this.tracker[key]
            const isIndex = this.index == index && has
            const background = has ? 'yellow' : 'white'
            return {
                background,
                color: isIndex ? 'green' : null
            }
        }

------------------------------------------------------------

name: $table

for truthy, key in tracker
    c: bgy flexcol
    c: br5 bgb5 bbred3 gap5

    if truthy == true
        span {key}
            c: bold fcb1 mr10
            click(key) {
                this.toggle(key)
            }
        span {data[key]}
            c: fcb1

------------------------------------------------------------

name: v-info
template:

v-colon label = value :value = computedValue
    hghghj
    dfsf
    dfgfd
    it might be worth it just for that lol

    the render function ...
    the neatness of all of it


function computedValue() {
    const key = this.value
    const prefix = '$'
    const value = this.$parent[prefix + key]
    return value
}
------------------------------------------------------------

name: v-component-info
debug: template
debug: computed 
debug: props
notes: this debug does nothing because we are in a browser environment ... the debug is only for finish() which occrus in deno

div
    c: bred1 br5 p10 ofs w200 blred5 pt5

    .space-between
        c: aic
        div
            mouseover() {
                this.show = true
            }
            mouseleave() {
                this.show = false
            }

            span {data.name}
                c: bold fs12 p3 fcb7 bblue0.5 aic round times

            span show = show showing boi!
                c: blue

        span class = copy-icon
            lorem(30, 15, fill: yellow)
                c: br2

    $linebreak

    $table

    $linebreak
    $keys


computed keys() {
    const keys = [
        "uid",
        "data",
        "props",
        "raw",
        "name",
        "template",
        "parentName",
        "methods",
        "computed",
    ]
    return keys
}
computed data() {
    const state = this.source == 'parent' ? this.$parent : this
    const {template, props, raw, methods, computed, name} = state.$options
    return {
        uid: state._uid,
        data: state.$data,
        props: props || [],
        isVue: state._isVue,
        template,
        raw,
        name: name,
        parentName: this?.$parent?.$options?.name,
        methods: methods && Object.keys(methods),
        computed: computed && Object.keys(computed),
    }
}
async function mounted() {
    // this.activeKeys.push('data')
    // this.activeKeys.push('data')
    // console.log({t: this.tracker})
    // console.log('hi')
    // await sleep(1000)
    console.log(this.toggle('uid'))
    console.log(this.toggle('name'))

    // await sleep(1000)
    // console.log(this.toggle('uid'))
    // this.$nextTick(() => {
        // console.log('nect tixk')
    // })
    // await sleep(1000)
    // console.log('hi')
    // console.log(this.toggle('uid'))
}

toggle(key) {
    // forceUpdate was necessary to make the component updadte
    toggleBooleanState(this.tracker, key)
    this.$forceUpdate()
}

