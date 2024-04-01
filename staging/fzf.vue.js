------------------------------------------------------------
// export the entire file some how ...
name: v-omni-input

component :is = ckey :value = value @change = $emit('change', value)
label {label}

// it will naturally mesh down 
// switch ctype
    // case 'Boolean'
        // v-checkbox :value = value @change = $emit('change', value)
    // case 'Number'
        // v-slider :value = value @change = $emit('change', value)
            // ref = slider
    // default
        // v-input2 :value = value @change = $emit('change', value)

computed ckey() {
    switch (type(this.value)) {
        case 'Boolean': return 'v-checkbox'
        case 'Number': return 'v-slider'
        default: return 'v-input2'
    }
}
computed ctype() {
    return type(this.value)
}
------------------------------------------------------------


name: v-fzf-item

function render(h) {
    const selector = (x) => x.name
    // console.log('rendering v-fzf')
    const mapper = (item, positions) => {
    // console.log(item)
        const chars = selector(item).split('')
        const inner = (ch, i) => {
            const has = positions.has(i)
            const style = {
                color: has ? 'green' : 'null',
                fontWeight: has ? '800' : 'null',
            }
            return h('span', {style}, ch)
        }

        const spans = chars.map(inner)
        const self = this
        return h('li', {
            on: {
                click() {
                    console.log('hi from render fn fzf-item click')
                    self.$emit('click', item)
                },
                keydown(e) {
                    console.log('hi from keydown', e.key)
                }
            }
        }, spans)
    }
    // console.log(this.item, this.positions)
    return mapper(this.item, this.positions)
}
------------------------------------------------------------
// the :items are [{item, positions}]
computed item() {
    const base =  this.items[this.index]
    if (base == null) {
        return 
    }
    if ('positions' in base) {
        return base.item
    }
    return base
}

name: v-fzf
v-input2 
    model = input
    focus = false

h5 logs
v-list :value = logs
    template v-slot:default = slot
        v-pre :value = slot
if items 
    v-list :value = saved
        
    p length: {items.length}
    v-list :value = items ref = list
        tabindex = 0
        click() {
            const item = this.items[this.index]
            console.log('hi from top click')
        }
        keydown(e) {
            const ref = {
                'ArrowUp': -1,
                'ArrowDown': 1,
            }
            e.stopPropagation()
            const dir = ref[e.key]
            if (dir) {
                this.$modularIndex('items', dir)
                return 
            }
            if (e.key == 'm') {
                console.log('saving this.item', this.item)
                // this.logs.push(this.item)
                this.item.icon = 'howdy'
                // this.icons[this.index] = JSON.stringify(this.item)
                // this.$forceUpdate()
            }
            // console.log('hii')

        }

        template v-slot:default = slot
            container type = flex
                style(slot) {
                    return {
                        background: this.index == slot.index ? 'yellow' : null
                    }
                }
                keydown(e) {
                    console.log('stopping from the bottom')
                    throw 'this doesnt work'
                    e.stopPropagation()
                }
                v-fzf-item bind = slot.value
                    click(slot) {
                        // console.log(slot)
                        // console.log('aa')
                        // console.log(e)
                        // console.log(slot)
                        this.index = slot.index
                    }

                container type = icon
                    span {slot.value.item.icon}
else
    p no items are present for fzf

v-omni-input v-for = options bind = option ref = omni

computed config() {
    const runner = (opt) => {
        return [opt.label, opt.value]
    }
    const a = reduce(this.options, runner)
    a.selector = (x) => x.name
    return a
}
computed items() {
    console.log('rendering computed items')
    function pseudofzf(el) {
        return {
            item: el,
            positions: new Set()
        }
    }

    if (this.fzf) {
        if (this.input) {
            const matches = this.fzf.find(this.input)
            // console.log("matches", matches)
            return matches
        } else {
            return this.base.map(pseudofzf)
        }
    }  else {
        // console.log('no fzf')
    }
}

async function mounted() {
    this.base = copy(this.value)
    this.input = 'a'
    this.icons = {}
    this.options = [
        { label: 'sort', value: true, },
        { label: 'limit', value: 10, },
    ]

    // this.load()

    this.$listen({
        up() {
            this.$modularIndex('items', 1)
        },
        down() {
            this.$modularIndex('items', -1)
        },
        letterKey(key) {
            switch(key) {
                case 'm':
                    console.log(key)
            }
        }
    })
}

function load() {
    try {
        const fzf = new window.Fzf(this.base, this.config)
        if (!fzf) {
            console.log('no fzf')
            return 
        }
        console.log(fzf)
        this.fzf = fzf
    } catch(e) {
        console.log('error', e.toString())
    }
}

watch config() {
    console.log('watching the config', strftime('datetime'))
    this.load()
}


------------------------------------------------------------
name: v-main

p hi
v-fzf :value = items ref = fzf

function created() {
    this.items = ['abc', 'def', 'aac', 'aaaaaaaaab', 'apple'].map((x) => {
        return {
            icon: 'none',
            name: x,
        }
    })
}
async function mounted() {
    await sleep(1000)
    console.log('mounted')
    const fzf = this.$refs.fzf
    // you dont mutate from the bottom
    // everything is top down 
    // you want to change the slider ... you change it from the top
    // console.log(fzf.$refs)
    // console.log(fzf.$refs.omni[1].$refs.slider.increment())
    // const list = fzf.$refs.list
    // console.log("list", list)
    // console.log(list.$info('methods'))
    // console.log(fzf.$info('methods'))
    // console.log(Object.keys(list.$options.methods))
    // console.log("list", list)
    return 
    fzf.options[1].value += 10
    fzf.item.icon = 'booga'
    await sleep(1000)
    fzf.options[1].value += 10
    await sleep(1000)
    fzf.input = 'pp'
    await sleep(1000)
    fzf.input = 'a'
    return 
    console.log("fzf", fzf)
    const el = fzf.items[1].item
    console.log("el", el)
    el.icon = 'howdy'
    await sleep(1500)
    fzf.$modularIndex('items')
    await sleep(1500)
    fzf.$modularIndex('items', -1)
    // you have to premap the items
    // waterfall again
    // prevent ...
    enter()
}
