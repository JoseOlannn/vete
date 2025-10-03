// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // ** SIMULACIÓN DE SELECCIÓN DE FILA **
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // 1. Quitar 'selected-row' de todas las filas
            tableRows.forEach(r => r.classList.remove('selected-row'));
            
            // 2. Añadir 'selected-row' a la fila clickeada
            row.classList.add('selected-row');

            // 3. Simular carga de detalles (ej. el nombre de la mascota)
            const nombreMascota = row.querySelector('td').textContent;
            console.log(`Detalles cargados para: ${nombreMascota}`);
            
            // En una aplicación real, aquí cargarías los datos en la columna lateral
        });
    });

    // ** SIMULACIÓN DE CLIC EN EL CALENDARIO **
    const daySlots = document.querySelectorAll('.calendar-grid .day-slot');
    daySlots.forEach(slot => {
        slot.addEventListener('click', () => {
            daySlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
        });
    });

    console.log("Interfaz cargada. Use los botones y tablas para interactuar (simulado).");
});