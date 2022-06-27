// modal de solicitud de reserva enviada

const enviar = document.getElementById('enviar');
const mostrar = document.getElementById('content-msg');
const cerrar = document.getElementById('cerrar')


enviar.addEventListener('click', (e) => {
    mostrar.classList.add('show')
    e.preventDefault();
})



cerrar.addEventListener('click', () => {
    mostrar.classList.remove('show')

})
