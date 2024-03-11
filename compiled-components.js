export {
    VParent,
    VChild,
    VList,
    VEnum,
    VItem,
}

const VParent = {
    name: 'v-parent',
    componentKeys: ['v-child'],
    template: `
        <div class="v-parent">
            <p>hi</p>
            <v-child style="background-color: #ef4444;"></v-child>
            <p>hello</p>
        </div>
    `,
}

const VChild = {
    name: 'v-child',
    data() {
        return {color: '', student: {name: 'sam', age: 10}}
    },
    computed: {
        __style__1() {
            return {
                background: this.color
            }
        },
    },
    methods: {
        __click__1() {
            this.color = 'green'
        },
    },
    template: `
        <div class="v-child">
            <p style="font-weight: bold;">{{student.name}}</p>
            <p>{{student.age}}</p>
            <button :style="__style__1" @click="__click__1">hi from {{student.name}}</button>
        </div>
    `,
}

const VList = {
    name: 'v-list',
    componentKeys: ['v-pre'],
    template: `
        <div class="v-list">
            <ul>
                <li :key="item" v-for="item, index in value">
                    <slot :index="index" v-bind="item" name="default">
                        <v-pre>{{item}}</v-pre>
                    </slot>
                </li>
            </ul>
        </div>
    `,
    props: ['value', 'index'],
}

const VEnum = {
    name: 'v-enum',
    componentKeys: ['v-pre'],
    template: `
        <div class="v-enum">
            <ol>
                <li :key="item" v-for="item, index in value">
                    <slot :index="index" name="index"></slot>
                    <slot :index="index" v-bind="item" name="default">
                        <v-pre>{{item}}</v-pre>
                    </slot>
                </li>
            </ol>
        </div>
    `,
    props: ['value'],
}

const VItem = {
    name: 'v-item',
    render(h) {
        const value = this.value
        const parentValue = this.$parent[value]
        return h('div', {staticClass: value}, parentValue)
    },
    props: ['value'],
}



