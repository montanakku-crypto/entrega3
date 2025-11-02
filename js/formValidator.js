export function validaFormulario() {
    const nome = document.getElementById("nome").value.trim()
    const email = document.getElementById("email").value.trim()
    const mensagem = document.getElementById("mensagem")

    if (nome === "" || email === "") {
        mensagem.classList.remove("hidden")
        return false
    }

    mensagem.classList.add("hidden")
    return true
}
