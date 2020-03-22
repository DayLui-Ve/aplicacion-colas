var socket = io()

// Comando para establecer la conexión
socket.on('connect', function() {
    console.log('conectado con el servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

socket.on('estadoActual', function(data) {

    if (data.ultimos4) actualizaHtml(data.ultimos4)

})

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()

    if (data.ultimos4) actualizaHtml(data.ultimos4)

})

function actualizaHtml(ultimos4) {


    for (let i = 0; i < ultimos4.length; i++) {
        console.log('actualizaHtml');

        $('#lblTicket' + (i + 1)).text('Ticket ' + ultimos4[i].numero)
        $('#lblEscritorio' + (i + 1)).text('Escritorio ' + ultimos4[i].escritorio)

    }

}