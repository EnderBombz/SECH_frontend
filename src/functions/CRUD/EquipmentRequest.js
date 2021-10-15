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

async function Post(data, user_id, type, details) {
  const date = dataAtualFormatada();
  const list = JSON.stringify(data);

  if (details === null || details === undefined) {
    details = "";
  }

  await api
    .post("/equipment-requests/post", {
      equip_list: list,
      user_id: user_id,
      request_date: date.toString(),
      request_type: type,
      request_details: details
    })
    .then((response) => {
      console.log("Sucesso ao enviar os dados");
    });
}

export { Post };
