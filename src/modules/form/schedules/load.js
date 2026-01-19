import { scheduleFetchByDay } from "../../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../../form/hours-load.js"
import { schedulesShow } from "../../form/schedules/show.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")


export async function schedulesDay() {
    //Obtem a data do input.
    const data = selectedDate.value

    //Buscar na Api os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date })
    

    //EXIBE OS AGENGAMENTOS.
    schedulesShow({ dailySchedules })



    // Renderiza as horas disponiveis.
    hoursLoad({ date, dailySchedules })

}

