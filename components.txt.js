---

inoremap <buffer> <expr> = SmartEqual2()
set nosmartindent
set noautoindent
inoremap <buffer> <expr> <cr> VueEnter()
    
inoremap <buffer> <expr> [ VueBrace()
date: datetime
last: true
---


--------------------------------------------------

name: v-parent

p hi
v-child
    fill: red

p hello




--------------------------------------------------

name: v-child

data:
    student:
        name: sam
        age: 10
            
p {student.name}
    fw: bold
p {student.age}
button hi from {student.name}
    style() {
        return {
            background: this.color
        }
    }
    click() {
        this.color = 'green'
    }

--------------------------------------------------

name: v-list

ul
    li for = item in value :key = item
        slot bind = item :index = index name = default
            v-pre {item}

--------------------------------------------------

name: v-enum

ol
    li for = item, index in value :key = item
        slot :index = index name = index 

        slot bind = item :index = index name = default
            v-pre {item}

--------------------------------------------------


name: v-item
status: 1

function render(h) {
    const value = this.value
    const parentValue = this.$parent[value]
    return h('div', {staticClass: value}, parentValue)
}
