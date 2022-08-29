//for viewport smaller than 800px

var x = window.matchMedia("(max-width: 799px)")
var y = window.matchMedia("(min-width: 800px)")



function myMoveIn(){
        if (x.matches) { 
            const changeBotContainerColor = document.getElementById("change-bottom-container-color");
            const hideAvatar = document.getElementById("remove-avatar");
            const hideName = document.getElementById("remove-name-container");
            let partajare= document.querySelector(".share-elem");
            const iconFB = document.querySelector(".icon-facebook");
            const icontTwtr = document.querySelector(".icon-twitter");
            const iconPin = document.querySelector(".icon-pinterest");
            const arrow = document.getElementById("arrow-move")
            changeBotContainerColor.style.backgroundColor = "blue"; 
            changeBotContainerColor.style.borderRadius = "10px";
            hideName.style.display = "none";
            hideAvatar.style.display = "none";
            partajare.style.display = "inline";
            iconFB.style.display = "inline";
            icontTwtr.style.display = "inline";
            iconPin.style.display = "inline";
        } 
    } 
        
function myMoveOut(){
    if (x.matches) { 
            const changeBotContainerColor = document.getElementById("change-bottom-container-color");
            const hideAvatar = document.getElementById("remove-avatar");
            const hideName = document.getElementById("remove-name-container");
            let partajare= document.querySelector(".share-elem");
            const iconFB = document.querySelector(".icon-facebook");
            const icontTwtr = document.querySelector(".icon-twitter");
            const iconPin = document.querySelector(".icon-pinterest");
            const arrow = document.getElementById("arrow-move")
            changeBotContainerColor.style.backgroundColor = "white";
            hideName.style.display = "inline";
            hideAvatar.style.display = "inline";
            partajare.style.display = "none";
            iconFB.style.display = "none";
            icontTwtr.style.display = "none";
            iconPin.style.display = "none";
    }
        
}

  //for view port bigger that 800px 

 function myMoveIn(){ 
    if (y.matches) { 
        const changeBotContainerColor = document.getElementById("change-bottom-container-color");
        const hideAvatar = document.getElementById("remove-avatar");
        const hideName = document.getElementById("remove-name-container");
        let partajare= document.querySelector(".share-elem");
        const iconFB = document.querySelector(".icon-facebook");
        const icontTwtr = document.querySelector(".icon-twitter");
        const iconPin = document.querySelector(".icon-pinterest");
        const arrow = document.getElementById("arrow-move")
        changeBotContainerColor.style.backgroundColor = "hsl(217, 19%, 35%)";
        changeBotContainerColor.style.borderRadius = "10px";
        changeBotContainerColor.style.margin = "4rem 0rem 0rem 12rem";
        arrow.style.margin = "6rem -2.2rem 0rem 2.5rem";
        hideName.style.display = "none";
        hideAvatar.style.display = "none";
        partajare.style.display = "inline";
        iconFB.style.display = "inline";
        icontTwtr.style.display = "inline";
        iconPin.style.display = "inline";
    } 
}

    function myMoveOut(){ 
        if (y.matches) { 
                const changeBotContainerColor = document.getElementById("change-bottom-container-color");
                const hideAvatar = document.getElementById("remove-avatar");
                const hideName = document.getElementById("remove-name-container");
                let partajare= document.querySelector(".share-elem");
                const iconFB = document.querySelector(".icon-facebook");
                const icontTwtr = document.querySelector(".icon-twitter");
                const iconPin = document.querySelector(".icon-pinterest");
                const arrow = document.getElementById("arrow-move")
                changeBotContainerColor.style.backgroundColor = "white";
                changeBotContainerColor.style.margin = "10rem 0rem 0rem 0rem";
                arrow.style.margin = "0rem -2.5rem 0rem 0rem";
                hideName.style.display = "inline";
                hideAvatar.style.display = "inline";
                partajare.style.display = "none";
                iconFB.style.display = "none";
                icontTwtr.style.display = "none";
                iconPin.style.display = "none";
    }
}    



