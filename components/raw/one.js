export {
    One,
}

vr

login_screen
const One = {
    name: 'r-one',
    raw: `
        p hi from {color}: {value}
            style() {
                return {
                    color: this.color
                }
            }
            click() {
                this.color = this.color == 'blue' ? 'red' : 'blue'
            }
    `,
    props: {
        value: { default: 'prop-fallback-value'},
    },
}


