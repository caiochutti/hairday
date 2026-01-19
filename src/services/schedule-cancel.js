import {apiConfig} from "./api-config"

export async function scheduleCancel({id}) {
    try{
        await fetch(`${apiConfig.baseURL}/schedule/${id}`,{
            method: "DELETE",
        })

        alert("agendamento cancelado com sucesso")

    }catch (error) {
        alert ("Nao foi possivel cancelar o agendamento")

    }
    
}