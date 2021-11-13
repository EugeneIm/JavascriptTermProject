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
        if (text == 'alien')
        {
            //showAlien()
            console.log('text is alien')
        }
    }

    var text = textArea.value.toLowerCase();

        function showAlien()
    {
        var alien = document.createElement("img")
        alien.className = "alienImage"
        alien.src = "./images/alien/alienlwalk0.gif"
        document.body.appendChild(alien)
        //This just renders the alien onto the page. 
    }

    function showStorage()
    {
        
    }


//Index.html should have the alien walking 
//while loop so that while the number of the image is less than 30
//it starts to loop through the pictures so it makes it look like
//the alien is walking left or right. 