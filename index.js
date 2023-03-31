alert("Está com o azul. Clique em 'OK' para começar o jogo:");
let square = document.querySelector('.square');
let circle = document.querySelector('.circle');
let marginSquare = 0;
let marginTopSquare = 0;
let marginCircle = 0;
let marginTopCircle = 95;

window.addEventListener('keyup', (e)=>{
    //Esquerda (CIRCLE)
    if(e.keyCode == 65){
        if(marginSquare == 0){
            return marginSquare = 0;
        }

        marginSquare = marginSquare - 5;
        square.style.left = `${marginSquare}%`;
        console.log(marginSquare);
    }
    
    //Direita (CIRCLE)
    if(e.keyCode == 68){
        if(marginSquare == 95){
            return marginSquare = 95;
        }

        marginSquare = marginSquare + 5;
        square.style.left = `${marginSquare}%`;
        console.log(marginSquare);
    }

    //Para cima (CIRCLE)
    if(e.keyCode == 87){
        if(marginTopSquare == 0){
            return marginSquare = 0;
        }

        marginTopSquare = marginTopSquare - 5;
        square.style.top = `${marginTopSquare}%`;
    }

    //Para baixo (CIRCLE)
    if(e.keyCode == 83){
        if(marginTopSquare == 95){
            return marginTopSquare = 95;
        }

        marginTopSquare = marginTopSquare + 5;
        square.style.top = `${marginTopSquare}%`;
    }

    //Esquerda (SQUARE)
    if(e.keyCode == 37){
        if(marginCircle == 95){
            return marginCircle = 95;
        }
        
        marginCircle = marginCircle + 5;
        circle.style.right = `${marginCircle}%`;
    }

    //Direita (SQUARE)
    if(e.keyCode == 39){
        if((marginCircle - 5) < 0){
            return marginCircle = 0;
        }

        marginCircle = marginCircle - 5;
        circle.style.right = `${marginCircle}%`;
    }

    //Para cima (SQUARE)
    if(e.keyCode == 38){
        if(marginTopCircle == 0){
            return marginTopCircle = 0;
        }

        marginTopCircle = marginTopCircle - 5;
        circle.style.top = `${marginTopCircle}%`;
    }

    //Para baixo (SQUARE)
    if(e.keyCode == 40){
        if(marginTopCircle == 95){
            return marginTopCircle = 95;
        }

        marginTopCircle = marginTopCircle + 5;
        circle.style.top = `${marginTopCircle}%`;
    }

    if(circle.getBoundingClientRect().x == square.getBoundingClientRect().x && circle.getBoundingClientRect().y == square.getBoundingClientRect().y){
        alert('Treina mais que tá ruim ;)');
    }
});

// 37 <-
// 39 ->
// 38 para cima
// 40 para baixo
// 65 = a
// 68 = d
// 87 = w
// 83 = s