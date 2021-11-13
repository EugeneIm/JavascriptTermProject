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
        if (text == 'storage')
        {
            storageLink()
        }
        if (text == 'bye')
        {
            alienImage.style.visibility = 'none';
        }
        if (text == 'stop')
        {
            stop()
        }
    }

    function storageLink()
    {
        var storage = document.createElement("p")
        storage.textContent = "Storage Link"
        storage.id = "storage"
        document.body.appendChild(storage)
        document.querySelector('#storage').addEventListener("click", () => 
        {
            window.location.href = "storage.html";
        })
        //create a line of text called "Storage Link" which
        //needs to be href'd to storage.html
    }

    function showAlien()
    {
        var alienImage = document.createElement("img")
        alienImage.id="a"
        alienImage.src = "./images/alien/alienrwalk0.gif"
        document.body.appendChild(alienImage)
        //This just renders the alien onto the page. 
    }

    timer = null
    stepNumber = 0
    
    function step()
    {
        stepNumber++
        stepNumber = stepNumber % 30
        a.src = "images/alien/alienrwalk" + stepNumber + ".gif"
        timer = window.setInterval(step, 100)
    }

    //the alien is now walking but very choppily

    function walk()
    {
        step()
        a.style.left = parseInt(a.style.left) + 10 + "px"
    }

    function stop()
    {
        clearInterval(timer)
        timer = null
    }




//Index.html should have the alien walking 
//while loop so that while the number of the image is less than 30
//it starts to loop through the pictures so it makes it look like
//the alien is walking left or right. 