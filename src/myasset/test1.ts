const elem_test1 = document.getElementById("test1")
const num = 0
if (elem_test1) {
    let txt = elem_test1.textContent
    let tempstr = ""
    for (let i =0; i < txt.length; i++) {
        if (txt[i] == ":") {
            break
        }
        tempstr += txt[i]
    }
    elem_test1.textContent = tempstr + `: ${num}`
}