import dayjs from "dayjs";

// Seleciona as seções Manhã, Tarde e Noite
const periodMorning = document.getElementById("period-morning")


export function scheduleShow({ dailySchedules }){
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //Renderiza os agendamentos por periodo
        dailySchedules.forEach((schedule) =>{
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

        item.setAttribute("data-id", schedule.id)
        time.textContent = dayjs(schedule.when).format("HH:mm")
        name.textContent = schedule.name
        

        item.append(time, name)

        const hour = dayjs(schedule.when).hour()

        periodMorning.appendChild(item)
        
        
        
        })
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
    }

}

