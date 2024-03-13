used with simple.html, simple.css, and simpleSetup
this is a raw file ... so be careful
pressing save will trigger simpleSetup to proceed @ simple.html
currently ... doing last


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

// paired
    // custom meaning
flex
    bg: green
    box size = 250,100 text = howdy
    box size = 20,30 
        bg: red
    .shifted hello
// flex  should also be over there
