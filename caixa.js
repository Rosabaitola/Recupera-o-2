const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis(R$ 10, 50,100)")
        frm.inSaque.focus() 
        return
    }

    const notasCem = Math.floor(saque/100)
    let resto = saque % 100
    const nostasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    const notasDez = Math.floor(resto/10)

    if (notasCem > 0) {
            resp1.innerText = `Notas de R$ 100: ${notasCem}`
        }
        if (nostasCinquenta > 0) {
                resp1.innerText = `Notas de R$ 50: ${nostasCinquenta}`
            }
            if (notasDez > 0) {
                resp1.innerText = `Notas de R$10: ${notasDez}`
                }
})