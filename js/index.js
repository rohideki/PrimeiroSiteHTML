
function OutraPagina() {
    window.location.href = window.location.href = "http://www.google.com.br";
}

function OutroEvento() {
    alert('evento não esta funcionando')
}

function Evento() {
    var resultado = confirm('Tem certeza que deseja continuar?')

    if (resultado == true) {
        window.location.href = "../Site/index2.html"
    }
    else {
        window.location.href = "http://www.google.com.br"
    }
}
function ConsultarToken() {
    var xmlhttp1 = new XMLHttpRequest();
    var params = {
        "user": "rafael@multicoisas.com.br",
        "password": "1234"
    }
    xmlhttp1.open("POST", "http://localhost:3030/api/login", true);
    xmlhttp1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp1.addEventListener('load', function () {
        console.log(JSON.parse(JSON.stringify(xmlhttp1.response.token)));
     
    })
    xmlhttp1.send(JSON.stringify(params))
    xmlhttp1.responseType = 'json'
    xmlhttp1.onreadystatechange = function () {
        if (xmlhttp1.readyState === XMLHttpRequest.DONE && xmlhttp1.status === 200) {
            console.log(JSON.parse(JSON.stringify(xmlhttp1.response.token)));
            
            
    };
 
}

}
function Enviar() {
   
    if (document.getElementById('foneid').value.length < 8) {
        alert('Telefone errado!!')
        return false
    }
    
    var nome = document.getElementById('nomeid').value;
    var fone = document.getElementById('foneid').value;;
    var email = document.getElementById('emailid').value;
    var cpf = document.getElementById('cpfid').value;
    var texto = document.getElementById('textoid').value;
    var params = {
        "nome": `${nome}`,
        "email": `${email}`,
        "cpf": `${cpf}`,
        "fone": `${fone}`,
        "texto": `${texto}`
    }
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "http://localhost:3030/api/customers", true);
    xmlhttp.setRequestHeader("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA1MzEwNjZ9.iIkz-uY17NaeLdUcxAZfWElRgXbLaqvziUTtimtn3EQ")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.addEventListener('load', function () {
        console.log(xmlhttp.response)
    })
    xmlhttp.send(JSON.stringify(params))

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
            console.log(xmlhttp.response);
        }
    };


    var resultado = confirm(`${nome}, Tem certeza que deseja continuar?`)
    if (resultado == true) {

        window.alert('Cadastro e sugestão enviados com sucesso!!')
    }
    else {

        window.location.href = "http://www.google.com.br"
    }

}
        

    




