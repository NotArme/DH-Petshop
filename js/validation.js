window.addEventListener("load", () => {
    console.log("addicted to validation.js");

    let form = document.querySelector("form");

    let btnEnviar = document.querySelector("form button");
    let inpTel = document.querySelector("#telefone");
    let inpName = document.querySelector("#nome-completo");
    let inpMail = document.querySelector("#email");

    btnEnviar.onclick = (event) => {

        event.preventDefault();

        console.log("enviar clicados")

        // if (inpTel.value.length < 10 || inpName.value.length < 6 || !inpMail.value.includes('@')) {
        //     alert("Preencha corretamente todos os campos")
        // } else {
        //     form.submit();
        // }

        let htmlError = document.querySelector("ul.erros")
        htmlError.innerHTML = "";
        let ulError = [];

        if (inpName.value.length < 6) {
            ulError.push("o campo nome completo deve ter no minimo 6 caracteres")
        }

        if (!inpMail.value.includes("@")) {
            ulError.push("Insira um email válido")
        }

        if (inpTel.value.length < 10) {
            ulError.push("o campo nome completo deve ter no minimo 10 caracteres")
        }

        if (ulError.length > 0) {
            ulError.forEach((errorMsg) => {
                htmlError.innerHTML += "<li>" + errorMsg + "</li>"
            })
            
        } else {
            form.submit()
        }
    }



})