
    var h1Text = document.createElement("h1")
    var fullText = document.createTextNode("HEADER PLACEHOLDER")
    document.body.appendChild(h1Text)
    h1Text.appendChild(fullText)

    var alien = document.createElement("img")
    alien.src = "/images/alien/alienlwalk0.gif"
    document.body.appendChild(alien)

    var newText = document.createTextNode()



//Index.html should have the alien walking 
//with a header with the text "Alien"
//while loop so that while the number of the image is less than 30
//it starts to loop through the pictures so it makes it look like
//the alien is walking left or right. 