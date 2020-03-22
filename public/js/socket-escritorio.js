var socket = io()

var searchParams = new URLSearchParams(window.location.search)

var label = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}

// Comando para establecer la conexión
socket.on('connect', function() {
    console.log('conectado con el servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

var escritorio = searchParams.get('escritorio')

$('h1').text('Escritorio ' + escritorio)

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(atenderTicket) {

        if (atenderTicket === 'No hay tickets') {

            label.text(atenderTicket)
            alert(atenderTicket)
            return;
        }

        label.text(atenderTicket.numero)

    })

})