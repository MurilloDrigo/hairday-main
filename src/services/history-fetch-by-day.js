import { apiConfig } from "./api-config"

export async function historyFetchByDay({date, id}) {
    try {
        //faz a requisição
        const response = await fetch (`${apiConfig.baseURL}/clients`)
        //Converte para json
        const data = await response.json()
        
        console.log(data)

    } catch (error) {
        console.log(error)
        alert("Não deu")
    }
    
}