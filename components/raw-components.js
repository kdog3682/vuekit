// this file will be generated
export {
    RawOne
}


const RawOne = {
    name: 'raw-one',
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
