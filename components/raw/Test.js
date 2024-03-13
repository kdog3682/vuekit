// 03-11-2024 
// raw-components are transformed correctly
// partial-components are transformed correctly
// postfix with firestore is working
// this file enters via vuekit/standalone.js


const firestoreConfig = {
    collectionId: 'MyDailyTracker',
}

export default {
    name: 'r-test',
    raw: raw2,
    raw1: `
        data:
            asdf: howdy
                
        r-login-page
        partial-one value = howdy
        r-one :value = name
        r-one :value = points 
        v-pre :value = data


        switch asdf
            color: this.color
                
            case howdy 
                p asdfasdf
                    click() {
                        this.asdf = 'smarty'
                        this.color = 'red'
                    }
        
            case smarty 
                p hi from smarty -> become party 
                    click() {
                        this.asdf = 'party'
                        this.booga()
                    }
        
            case party 
                p hi from party
                    click() {
                        this.asdf = 'abcde'
                    }
        
            default 
                p hi from default

        async function mounted() {
            console.log('hello from RTest')
            // console.log(this.booga())
            // console.log(this.fas())

            // this works
            const found = await this.firestore.find({name: 'sam'})
            const data = await this.firestore.get(found)
            this.data = data
            this.name = data.name
            this.points = data.points
            // console.log(data)
        }
    `,
    fas() {
        console.log('aa')
    },
    booga() {
        console.log(this, 'hi from booga')
    },
    firestoreConfig
}



const raw2 = `
    if status == guest
        r-login-page @login = onLogin
    else
        r-main-page :value = student
`

function onLogin(student) {
    this.student = student
}

