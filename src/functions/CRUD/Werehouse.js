import api from "../../service/api"

async function GetAll() {
    const itens = await api.get("/werehouse/getAll").then((response) => {
        return response.data;
    })
}

export { GetAll }