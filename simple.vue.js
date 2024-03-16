FAQS
this is the input file for `simpleSetup`.
it is used in conjunction with simple.html, simple.css, simpleSetup.js

activated via: vite 3
the last dash delimited section is what will be vuetified
this version is very simple. we use VHtml and nothing else

the thing about custom components is they will be able to influence the children as well.
you can afterwards, apply additional styles
all the html in this file is going to a specific place
svj ...
custom components: 
    css
// paired
    // custom meaning
    
------------------------------------------------------------
        p hi
        container asdf = 1
            asdfasdf = 223
            type = columns
            gap = 5
            left = 100
            size = 2

            p hiaaaaaaaaaaaa
            p hi
            p hi
                color: red
            p hi
                color: blue
pure html
------------------------------------------------------------

status: shunt css
name: v-form

form .container

    label username
    input
        type = text 
        placeholder = username
        model = username

    label password
    input
        type = password
        model = password
    
    button submit

------------------------------------------------------------

name: r-header

.space-between
    bg: yellow
    flex align = center gap = 10
        shapelang.logo()
        .name
            lorem(20, 20, fill: red, label: name)

    flex gap = 10
        lorem(51, 20)
        lorem(51, 20)
        lorem(51, 20)
    
v(20)
lorem(51, 20)

shapelang.line()
shapelang
    function angle(length, angle) {
        return {angle, length}
    }
    let p = origin
    for (let i = 0; i < 15; i++) {
        const ang = angle(30, i * 30)
        const p2 = p.translate(ang)
        line(origin, p2).stroke(palette.next())
        circle(p2).fill(palette.black())
    }
shapelang.line()
flex gap = 10
    bg: yellow
    
    shapelang.logo()
    shapelang.logo()
    shapelang.logo()
// linebreak()
// anime()
// todo()
// meta()
h1 FAQ
    bg: blue
    margin: 0
    padding: 0
------------------------------------------------------------

desc: hi. this description wont show up
this table is kinda ugly ...
lets do a better one

table
    thead
        tr
            td colspan = 3
                h1 hi
                    bg: yellow
        tr
            th header 1
            th header 2
            th header 3
    tbody
        tr
            td 1
            td 1
            td 1
        tr
            td 1
            td 1
            td 1
    tfoot
        tr
            th footer 1
            th footer 2
        
------------------------------------------------------------

table
    caption .abc .slide-in howdy
    caption howdy 2

table
    caption .abc howdy
    caption howdy 2
    thead
        tr
            th header 1
            th header 2
            th header 3
    tbody .canada
        tr 
            td 1
            td 1
            td 1
        tr
            td 1
            td 1
            td 1
        tr
            td 1
            td 1
            td 1
            
