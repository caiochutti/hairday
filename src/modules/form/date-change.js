import { schedulesDay } from "../../modules/form/schedules/load.js"  // Corrigido: assumi .js no final

const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()