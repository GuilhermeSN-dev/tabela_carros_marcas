const corpoTabela= document.getElementById("corpoTabela")
const formulario = document.getElementById("formulario")

const modelos = [
    {carro:"Palio", marca:"FIAT"},
    {carro:"Mustang", marca:"FORD"},
    {carro:"HB20", marca:"Hyundai"},
    {carro:"Hillux", marca:"Toyota"},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (carro of modelos){
        corpoTabela.innerHTML +=`
            <tr>
                <td>${carro.carro}</td>
                <td>${carro.marca}</td>
            </tr>
       `
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorCarro = document.getElementById("campoCarro").value
    const valorMarca = document.getElementById("campoMarca").value

    const x = {carro:valorCarro, marca:valorMarca}

    modelos.push(x)
    
    exibir()
})
    
