
name: v-tab

props: title
data: 
    active: true

div show = active
    slot
------------------------------------------------------------

name: v-tabs
data:
    index: 0,

ul
    li for = tab, index in tabs :key = tab.title
        click(index) {
            return this.select(index)
        }
        style(tab) {
            return 
            if (tab.active) {
                return {
                    background: 'yellow'
                }
            }
        }
        span title: {tab.title}

    keep-alive
        slot
function created() {
    this.tabs = this.$children
}

async mounted() {
    await sleep(1000)
    this.select(0)
}
function select(index) {
            this.index = index
            this.tabs.forEach((tab, i) => {
                tab.active = index === i
            })
}
------------------------------------------------------------
name: runner
data:
    mode: light

button toggle light or dark
    click() {
        this.$toggle('mode', {announce: true, options: ['light', 'dark']})
    }

v-tabs :class = `tab-theme-${mode}`

    v-tab title = tab-1
        p hi from 1
        v-input
            c: fcred

    v-tab title = tab-2
        p hi from 2
        v-input
    
------------------------------------------------------------



name: v-ivy-page

data:
    // statements:
        // ivy.title.style.background = green
    
    foobar:
        abc: 1
        def: 2

        abc: 1
        def: 2

p ref = title hi there
    click() {
        if (this.$refs.title._click) {
            this.$refs.title._click()
        } else {
        console.log('simple!')
            console.log(this.$info('simple'))
        }
    }

h3 expressions
container
    v-pre v-for = expressions :value = expression
        c: underline

function foo() {
    const expr = this.$modular('statements')
    this.expressions.push(expr)

    //
    // command successfully executed
    // norah.page.style.background ...
    // see a list of all elements ivy has access to
    // title
    // page
    // header
    // footer
    // paragraph
    // codeblock
    // all of these elements



    /* refactor */
    scopedEvaluator(expr, {
        /* that is just so interesting */
        sleep,
        ivy: this.$refs, // a proxy
        green: 'green',
        blue: 'blue',
        red: 'red',
        yellow: 'yellow',
        self: this.$proxy,
        vue: this,
        page: this.$pageController,
    })
}

async function mounted() {
    window.addEventListener('keydown', (e) => {
        if (this.$keymap.call(this, e)) {
            return 
        }
    })
    // need to get valid javascript ... and perform the transforms
    // need to embed it in a code editor
    const s = `
        ivy.title._click = (function click() {
            console.log("AAAAAA newly created functioned")
            console.log(this)
            console.log(this.$options.name)
        }).bind(self)
        // the function binding is implicit ...
        // need a lezer instance 
    `
    this.$proxy.init(this)
    // const t = `page.style.background = yellow`
    const t = `editor.snippetSuggestions = true`
    // cache invalidation ... and persistence 
    // welcome to ivy's page
    // it is ... a fun to be on
    // tod 
        
    // this.$refs.title.click()
    // this.statements.push(s)
    // this.statements.push(t)

    // terminal mode
    // shell mode
    // 
    // it is a proxy mode ...
    // command line
    const g = ivyGlobal.toString() + '\n\n' + 'vue.$keymap.add("ctrl-x", ivyGlobal)'

    // sammy pie class
    // oh. hi ivy. what a surprise to see you here.
    // sammy makes thousands of cakes.

ivy, will you teach me how to code?
but i dont know how to code hammy. 
but you know how to read.

but im only in 1st grade. i only know how to read easy things.
reading is reading.

sammy can you read to us?

there is no time to spare.
sammy has to bake.

maybe you can read hammy.
but ivy, how can I read and eat cake at the same time?

fine. ill read. but we have to take turns.
deal.

Hammy Coding Class
Registration

Hammy, what's going on?
Why did everything turn dark?

Quick Ivy. Type "system.opts.background = 'light'

But I dont know what that means.

You will.

Are you sure Hammy?

I am sure. 

Now type those words Ivy. I can't see where my cake is.


Dear Ivy,

You have completed registration for Hammy Coding Class.

But there are still a few more steps.
These steps will be for your

Coding is huge. 

Partners for you to code with.

Sammy's coding partner is Hammy.

The registration is hidden from sight.
Custom materials ...

Changing the colors around.

Paper Workbook.

Dear Parents and Guardians,

The basic plan will always be free.

We are a small team, and we do much of the work.

Compared to the prices that coding bootcamps charge,
we believe 

Of course, you need not.
Funding to do more and more.
When you feel ready to support us,

Sincerely,

The teachers at Brooklyn Learning

Collaboration

Collaborative option is available. 

Here is a sample solo worksheet.
Here is the same worksheet, in collaborative mode.

They will have a similar worksheets (based on individual skill)
    -- read more about our worksheet alottment


It is very important for students to feel the wind of learning.



    this.statements.push(g)
    this.foo()
    // this.foo()
    // this.$refs.title.click()
    async function ivyGlobal(ivy) {
        // the colors ... become active ...
        // what do you think yijie ...
        // secret teaching ...
        // ...
        // self refers to the ivy object
        // for example, you set the color of the title
        // we use the word self
        // time to review what we learned 
        // hammy review time
        // listeners ... 
        // good morning ivy ...
        
        console.log('hi from ivy global')
        console.log(ivy.$refs.title)
        ivy.$refs.title.style.background = 'yellow'
        sleep(1000)
        // 2000 means 2 seconds
        // if you want to sleep for 1 and a half seconds, 
        // sleep(1500)
        ivy.$refs.title.style.background = 'blue'
    }

    const ctrlx = {
        ctrlKey: 1,
        key: 'x',
    }
    this.$keymap.call(this, ctrlx)
}

// v-cm inline = true ... the display becomes different ...
// v-cm
