import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"
const hours = document.getElementById("hours")
export function hoursLoad({date}){
    hours.innerHTML = ""
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return{
            hour,
            available: !isHourPast,
        }
    })

opening.forEach(({hour, available})=> {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-unavailable" : "hour-available")
    li.textContent = hour
    if(hour === "9:00"){
        hourHaderAdd("Manhã")
    }
    else if(hour ==="13:00"){
        hourHaderAdd("Tarde")
    }
    else if(hour ==="18:00"){
        hourHaderAdd("Noite")
    }
    hours.append(li)
})
hoursClick()
}

function hourHaderAdd(tittle){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = tittle
    hours.append(header)
}