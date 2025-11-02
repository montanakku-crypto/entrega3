import { showPage } from "./router.js"
import { validaFormulario } from "./formValidator.js"

document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => showPage(btn.dataset.page))
})

document.getElementById("cadastroForm").addEventListener("submit", e => {
    e.preventDefault()
    if (validaFormulario()) {
        alert("Formulário enviado com sucesso!")
    }
})
