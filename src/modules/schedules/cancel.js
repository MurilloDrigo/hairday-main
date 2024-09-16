import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    //Captura o clique
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {

        const item = event.target.closest("li")

        //pega o id
        const {id} = item.dataset
        //confirma 
        if(id){
            const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento")

            if(isConfirm){
                console.log(isConfirm)
                await scheduleCancel({id})
                await schedulesDay()

}
            }
        }
    })
})