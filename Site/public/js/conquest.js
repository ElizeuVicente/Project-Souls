var conquest = [];


function realizarConquest() {
    conquest = [];

    for (var i = 123; i <= 244; i++) {
        var conquista = document.getElementById(`C${i}`);

       // if (document.getElementById(`C163`).checked) conquista.checked = true;
        
      //  if(conquest.length == 0) progressDs1.style.width = `100%`

        if (conquista.checked) {
            console.log(`A Conquista C${i} foi verificada`)
            conquest.push(conquista.id.replace("C", ""))


            var largura = 100 - (2.43902439024 * conquest.length)
            progressDs1.style.width = `${largura}%`


        }
    }
}
