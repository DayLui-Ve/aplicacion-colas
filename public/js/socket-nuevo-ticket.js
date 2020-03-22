var socket = io()

var label = $('#lblNuevoTicket')

// Comando para establecer la conexión
socket.on('connect', function() {
    console.log('conectado con el servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

socket.on('estadoActual', function(estado) {

    console.log('estadoActual', estado);
    label.text(estado.actual)

})

$('button').on('click', function() {

    // solicitar nuevo ticket
    socket.emit('siguienteTicket', null, function(ticket) {
        console.log('Siguiente ticket: ', ticket)

        label.text(ticket)

    });

});