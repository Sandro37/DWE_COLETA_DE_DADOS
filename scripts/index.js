function update() {
    var select = document.getElementById('estados-brasil');
    var value = select.options[select.selectedIndex].value;
    request(value)
}


function request(value) {
    let UF = value;
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + UF + "/municipios";
 

    const comboCidades = document.getElementById("cidade-estado");
    comboCidades.options.length = 0;
    fetch(url).then(Response => Response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++){
            option = new Option(json[i].nome)
            comboCidades.options[comboCidades.options.length] = option
        }
    })
}

function eatFood() {
    
    var nome = document.getElementById('nome').value;
    var date = document.getElementById('date').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;

    var select = document.getElementById('estados-brasil');
	var estados_brasil = select.options[select.selectedIndex].value;

    var select = document.getElementById('cidade-estado');
	var cidade_estado = select.options[select.selectedIndex].value;

    var select = document.getElementById('pais');
	var pais = select.options[select.selectedIndex].value;


    if(nome != null && nome != "")
        if(date != null && date != "")
            if(rua != null && rua != "")
                if(bairro != null && bairro != "")
                    if(estados_brasil != null && estados_brasil != "")
                        if(cidade_estado != null && cidade_estado != "")
                            if(pais != null && pais != ""){
                                alert("Enviando dados"); //simulando um envio de dados.
                                document.getElementById('form1').submit();
                            }
}