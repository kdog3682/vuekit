---
dollarInfusion: true
---

name: $login

form :layout = layout
    label username
        for = username
    input
        name = username
        autocomplete = username
        type = text 
        model = username

    label password
        for = password
    input
        autocomplete = current-password 
        type = password
        model = password
    
    button submit


v-info value = 'props'
linebreak(20)
v-info value = 'data'
------------------------------------------------------------

name: $register

p BKCS is still in development and cant handle too much traffic at the moment.
    css: blue
p we are sorry for the incovenience
    css: red

button .request-notification notify me when space opens up
    click() {
        this.state.pleaseNotify = true
    }

if state.pleaseNotify
    flex .sign-up
        input model = email
        button go
            click() {
                if (!this.email.length) {
                    this.state.emailError = true
                } else {
                    this.state.activateModal = true
                    this.state.emailError = false 
                }
            }

p email: {email}
if state.emailError
    p not a valid email bro
if state.activateModal
    p we will be sending an email you to you at {email}!
p Thank you for visiting our website.


------------------------------------------------------------
data:
    hi: 123
    foo:
        asdf: a
    tabs: login, register

container
    for tab, index in tabs
        ref = tabs
        staticClass: flex

        button .tab 
            async click(index) {
                this.index = index
            }
            style(index) {
                if (index == this.index) {
                    return {
                        color: 'red',
                        border: '1px solid blue',
                    }
                }
            }
            span {tab}

    if tab == 'login'
        $login
    elif tab == 'register'
        $register
    

computed tab() {
    return this.tabs[this.index]
}

async function mounted() {
    this.$log('template')
    this.$log('data', (x) => Object.keys(x))
    // await this.$animate(this.$refs.tabs[0], 'flash')
    // this.$log('tabs')
}
------------------------------------------------------------

