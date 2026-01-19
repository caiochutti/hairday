import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "../../modules/form/hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    // 1. Limpa a lista de horários
    hours.innerHTML = ""

    // 2. Transforma os horários ocupados em uma lista simples de strings (ex: "09:00")
   const unavailableHours = (dailySchedules || []).map((schedule) => 
    dayjs(schedule.when).format("HH:mm")
)

    const now = dayjs()

    // 3. Mapeia os horários de abertura
    const opening = openingHours.map((hour) => {
        // Forçar o formato HH:mm (ex: "9:00" vira "09:00")
        const formattedHour = hour.length === 4 ? `0${hour}` : hour
        const [h] = formattedHour.split(":")

        // Define a hora no dia selecionado para comparar com o "agora"
        const scheduleDate = dayjs(date).set("hour", Number(h)).set("minute", 0).set("second", 0)
        
        const isHourPast = scheduleDate.isBefore(now)
        const isUnavailable = unavailableHours.includes(formattedHour)

        return {
            hour: formattedHour,
            available: !isUnavailable && !isHourPast
        }
    })

    // Debug no console para você ver o que está acontecendo
    console.log("Horários processados:", opening)

    // 4. Renderiza
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        // Lógica dos cabeçalhos (Manhã, Tarde, Noite)
        if (hour === "09:00") hourHeaderAdd("Manhã")
        if (hour === "13:00") hourHeaderAdd("Tarde")
        if (hour === "18:00") hourHeaderAdd("Noite")

        hours.append(li)
    })

    hoursClick()
}



function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}
