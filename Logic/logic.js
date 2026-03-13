function OnMouseMove(e){

    // Declaring Variables
    let cardDiv = document.getElementById('cardId');
    let cardCoor = cardDiv.getBoundingClientRect();
    let imgDiv = document.querySelector('.qr-img img');


    // Calculating Card Center and Mouse Pointer Difference
    let cardCenter = {
        x: cardCoor.x + cardCoor.width/2,
        y: cardCoor.y + cardCoor.height/2
    }
    let mouseCardDiff = {
        x: (cardCenter.x - e.clientX) / 15,
        y: (e.clientY - cardCenter.y) / 15
    }

    // Applying Style
    cardDiv.style.transform = `
                                perspective(500px)
                                rotateY(${mouseCardDiff.x}deg)
                                rotateX(${mouseCardDiff.y}deg)`;
    imgDiv.style.transform = "scale(1.15)";
}

function OnMouseOut(){
    
    // Declaring Variables
    let cardDiv = document.getElementById('cardId');
    let imgDiv = document.querySelector('.qr-img img');


    // Applying Styles
    cardDiv.style.transform = `
                                perspective(500px)
                                rotateY(0deg)
                                rotateX(0deg)`;

    imgDiv.style.transform = "scale(1)";
}
    