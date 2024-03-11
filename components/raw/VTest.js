// 03-11-2024 
// raw-components are transformed correctly
// partial-components are transformed correctly
// postfix with firestore is working
//
//


export {
    VTest,
}
const firestoreConfig = {
    collectionId: 'MyDailyTracker',
    load() {
        // const found = await this..find({name: 'sam'})
        // const data = await this.get(found)
    }
}

const VTest = {
    name: 'v-test',
    raw: `
        data:
            asdf: howdy
                
        partial-one value = howdy
        raw-one value = howdy
        raw-one
        raw-one value = bowdy

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
    `,
    async mounted() {
        console.log('hello from VTest')
        // console.log(this.booga())
        // console.log(this.fas())
        const found = await this.firestore.find({name: 'sam'})
        const data = await this.firestore.get(found)
        console.log(data)
    },
    fas() {
        console.log('aa')
    },
    booga() {
        console.log(this, 'hi from booga')
    },
    firestoreConfig
}

