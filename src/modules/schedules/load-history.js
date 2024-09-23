import {apiConfig} from "../../services/api-config"
import { historyFetchByDay } from "../../services/history-fetch-by-day";

const date = "29/04/2024"
const id = "124-537-835-230"
const history = await historyFetchByDay(date, id)
console.log(history)



  