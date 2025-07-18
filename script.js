document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.testimonio-card');
    const modal = document.getElementById('simpleModal');
    const closeBtn = document.querySelector('.simple-close-button');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const cliente = this.dataset.cliente;
            const servicio = this.dataset.servicio;
            const testimonio = this.dataset.testimonio;

            document.getElementById('modalCliente').textContent = cliente;
            document.getElementById('modalTestimonio').textContent = `"${testimonio}"`;
            document.getElementById('modalServicio').textContent = servicio;

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});