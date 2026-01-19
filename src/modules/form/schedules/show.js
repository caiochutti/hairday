import dayjs from "dayjs";


// Seleciona as seçoes manha , tarde , noite .
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // VOCÊ TEM ESSAS 3 LINHAS ABAIXO? Se não tiver, o código quebra aqui.
    const periodMorning = document.getElementById("period-morning")
    const periodAfternoon = document.getElementById("period-afternoon")
    const periodNight = document.getElementById("period-night")

    // Limpa as listas antes de recarregar
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      item.setAttribute("data-id", schedule.id)

      // Ajuste de MM para mm (minutos)
      time.textContent = dayjs(schedule.when).format("HH:mm") 
      name.textContent = schedule.name

      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "cancelar")

      item.append(time, name, cancelIcon)

      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    }) // <--- O erro "Unexpected Token" acontece se faltar isso aqui!

  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
