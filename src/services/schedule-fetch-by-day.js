import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
  try {
    // 1. Fazendo a requisição (removida a barra extra no final)
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const data = await response.json()

    // 2. Filtra (Corrigido: 'schedule' agora combina com 'schedule.when')
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos.")
  }
}