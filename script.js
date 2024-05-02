const buttons = document.querySelectorAll("#image-picker li"); //querySelectorAll seleciona um conjuntos de elementos por meio de um seletor de css.
const image = document.querySelectorAll("#product-image"); //estou selecionando o elemento que contem a image a ser mudada.

buttons.forEach((btn) => {   //estou fazendo um loop para cada um deles e chamo de btn, dentro desse bloco irei fazer um evento click.

    btn.addEventListener("click", (e) => {  //aqui eu criei um evento que será ativado em um click do mouse em um dos botões das li.
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected") //aqui estou selecionando o a class .color para ter acesso ao btn, e depois entrnado na lista de classe (classList) para poder remover o selected. 
        });

        //agora vou selecionar a class no botão corredo, que é somente o que está selecionado.
        const button = e.target 
        const id = button.getAttribute("id")
        console.log(id)
        button.querySelector(".color").classList.add("selected")
    });
});