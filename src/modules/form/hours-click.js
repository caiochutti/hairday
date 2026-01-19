export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")
    


    hours.forEach(( available) => {
        available.addEventListener("click", (selected) => {

            //Remover a classe hour-selected de todas as li nao selecionadas.
            hours.forEach(( hour) => {
                hour.classList.remove("hour-selected")
            } )

            selected.target.classList.add("hour-selected")
        })
    })
}