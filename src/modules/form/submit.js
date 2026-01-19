import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../form/schedules/load.js"


const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


// Carrega a data atual.
selectedDate.value = inputToday

//Definir a data minima como sendo a atual.
selectedDate.min = inputToday

    form.onsubmit = async (event) => {

        event.preventDefault()

        try {
        //recuperar o nome do cliente
        const name = clientName.value.trim()
        
        if(!name) {
            return alert("Informe o nome do cliente")

        }

        // Recuperar o horario selecionado.
        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected){
            return alert ("selecione a hora")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")


        //Insere a hora com a data.
        const when = dayjs(selectedDate.value).hour(Number(hour)).startOf("hour")

        //Gerar um ID.
        const id = new Date().getTime().toString()

        //Faz o agendamento.
        await scheduleNew({
            id,
            name,
            when,
        })
         //Recarrega os agendamentos.
         await schedulesDay()

         clientName.value = ""
        } catch (error) {
            alert("Nao foi possivel realizar o agendamento.")
            console.log (error)
        }
    }
