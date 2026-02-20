AOS.init();

const dataDoEvento = new Date("May 31, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento =distanciaAteOEvento / (1000 * 60 * 60 * 24);
    console.log(diasAteOEvento);
}, 1000);