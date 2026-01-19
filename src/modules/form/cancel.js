import {schedulesDay} from "../form/schedules/load.js"

import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//Gerar evento click para cada lista (manha tarde noite)
periods.forEach((period) => {
    //Captura o evento de clique na lista.
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            //Obtem a li pai do elemento clicado.
            const item = event.target.closest("li")

            //Pega o id do agendamento para remover
            const { id } = item.dataset
            
            //Confirma que o id foi selecionado
            if(id) {

                //confirma se o usuario quer remover
                const isConfirm = confirm("tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    //Faz a requisicao na API para cancelar
                    await scheduleCancel({ id })

                    //Recarrega os agendamentos.
                    schedulesDay()

                }

                
            }
        }
    })

})