import api from "../../service/api";

function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = dia.length === 1 ? "0" + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = mes.length === 1 ? "0" + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

async function Post(data, user, type, details) {

    console.log(user);
    const date = dataAtualFormatada();
    const list = JSON.stringify(data);

    console.log(details)
    if (details === null || details === undefined) {
        details = "";
    } 

    await api
        .post("/equipment-requests/post", {
            equip_list: list,
            request_date: date.toString(),
            user_data: user,
            request_type: type,
            request_details: details
        })
        .then((response) => {
            console.log("Sucesso ao enviar os dados");
        });
}


export { Post };