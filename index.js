    var textArea = document.createElement("textarea");
    textArea.className = "textbox"
    document.body.appendChild(textArea);
    
    
    var submitButton = document.createElement("button");
    submitButton.id = "submit"
    submitButton.textContent = "Submit"
    document.body.appendChild(submitButton);
    
    var button = document.getElementById("submit")

    button.onclick = function checkText()
    {
        var text = textArea.value.toLowerCase();
        if (text == 'alien')
        {
            showAlien()
            console.log('text is alien')
        }
        if (text == 'walk')
        {
            walk()
            console.log('text is step')
        }
    }


    function showAlien()
    {
        var alienImage = document.createElement("img")
        alienImage.id="a"
        alienImage.src = "./images/alien/alienrwalk0.gif"
        document.body.appendChild(alienImage)
        //This just renders the alien onto the page. 
    }

    alien = document.getElementById("a")

    function walk()
    {
        stepping()
        alien.style.left = parseInt(alien.style.left) + 1 + "px"
    }

    timer = null
    stepNumber = 0

    function stepping()
    {
        stepNumber++
        stepNumber = stepNumber % 30
        alien.src = "./images/alien/alienrwalk" + stepNumber + ".gif"
    }

    
//Index.html should have the alien walking 
//while loop so that while the number of the image is less than 30
//it starts to loop through the pictures so it makes it look like
//the alien is walking left or right. 