function tabuada() {
    var nmr = document.getElementById("nmr-value")
    var tab = document.getElementById("seltab")
    if (nmr.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(nmr.value)
        let c = 1
        tab.innerHTML = ''
        for (c; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}