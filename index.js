
    var inputText = document.createElement("input")
    var fullText = document.createTextNode("inputText")
    document.body.appendChild(inputText)
    
    

    var submitButton = document.createElement("button")
    document.body.appendChild(submitButton)


    function showAlien()
    {
    var alien = document.createElement("img")
    alien.src = "./images/alien/alienlwalk0.gif"
    document.body.appendChild(alien)
    }
    

//Index.html should have the alien walking 
//with a header with the text "Alien"
//while loop so that while the number of the image is less than 30
//it starts to loop through the pictures so it makes it look like
//the alien is walking left or right. 