document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos clave del DOM
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectsContainer = document.querySelector('.projects-container');
    const projectCards = document.querySelectorAll('.project-card');

    /**
     * Función principal para manejar el filtrado
     * @param {string} filterValue - El valor del filtro (ej: 'fx', 'bodypaint', 'all')
     */
    const filterProjects = (filterValue) => {
        // Itera sobre cada tarjeta de proyecto
        projectCards.forEach(card => {
            // Si el filtro es 'all' (mostrar todo)
            if (filterValue === 'all') {
                card.style.display = 'block';
                return;
            }

            // Comprueba si la tarjeta tiene la clase de filtro requerida
            if (card.classList.contains(filterValue)) {
                // Si sí la tiene, la muestra
                card.style.display = 'block';
            } else {
                // Si no la tiene, la oculta
                card.style.display = 'none';
            }
        });
    };

    /**
     * Función para actualizar el estado 'active' de los botones
     * @param {object} clickedButton - El botón que ha sido clickeado
     */
    const updateActiveButton = (clickedButton) => {
        // 1. Remover 'active' de todos los botones
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });

        // 2. Añadir 'active' al botón que se acaba de hacer clic
        clickedButton.classList.add('active');
    };

    // 2. Asignar el Listener de Eventos a cada botón
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const filterValue = event.target.getAttribute('data-filter');
            
            // Llama a las funciones
            filterProjects(filterValue);
            updateActiveButton(event.target);
        });
    });

    // 3. Opcional: Implementar un scroll suave al hacer clic en enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Solo aplica scroll suave a enlaces internos de navegación
            if (this.getAttribute('href') !== '#') {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Filtra los proyectos al cargar la página para asegurar que 'all' esté activo por defecto
    filterProjects('all');
});
