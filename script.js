function calculaHoras() {
    const textAreaTexto = document.getElementById("validationTextarea");
    const divRes = document.getElementById("res");
    const divAlerta = document.getElementById("alerta");

    const regex = /\d{2}:\d{2}/gm;
    const arrayHoras = textAreaTexto.value.match(regex);

    if (arrayHoras) {
        if (arrayHoras.length > 0) {
            const spanDias = document.getElementById("dias");
            const spanHoras = document.getElementById("horas");

            let minutos = 0;
            let horas = 0;
            let horasTotais = 0;

            for (let minString of arrayHoras) {
                horas += parseInt(minString.slice(0, 2));
                minutos += parseInt(minString.slice(3));
            }

            horasTotais = horas * 60 + minutos;

            divAlerta.style.opacity = 0;
            divRes.style.opacity = 1;

            spanDias.innerText = String(arrayHoras.length);
            
            let minutosTotais = String(horasTotais % 60);
			if (minutosTotais.length == 1) minutosTotais = '0' + minutosTotais
			spanHoras.innerText = `${Math.floor(horasTotais / 60)}:${minutosTotais}`;
        }
    } else {
        divRes.style.opacity = 0;
        divAlerta.style.opacity = 1;
    }
}
