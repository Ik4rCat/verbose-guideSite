document.addEventListener('DOMContentLoaded', function() {
    const carClassSelect = document.getElementById('carClass');
    const transmissionSelect = document.getElementById('transmission');
    const searchInput = document.querySelector('input[type="text"]');
    const cards = document.querySelectorAll('.card');

    function filterCars() {
        const selectedClass = carClassSelect.value.toLowerCase();
        const selectedTransmission = transmissionSelect.value.toLowerCase();
        const searchText = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const cardClass = card.querySelector('.card-text').textContent.toLowerCase();
            const cardTransmission = card.querySelectorAll('.card-text')[1].textContent.toLowerCase();
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();

            const classMatch = !selectedClass || cardClass.includes(selectedClass);
            const transmissionMatch = !selectedTransmission || cardTransmission.includes(selectedTransmission);
            const searchMatch = !searchText || cardTitle.includes(searchText);

            if (classMatch && transmissionMatch && searchMatch) {
                card.closest('.col-md-4').style.display = 'block';
            } else {
                card.closest('.col-md-4').style.display = 'none';
            }
        });
    }

    carClassSelect.addEventListener('change', filterCars);
    transmissionSelect.addEventListener('change', filterCars);
    searchInput.addEventListener('input', filterCars);

    const resetButton = document.createElement('button');
    resetButton.className = 'btn btn-secondary mt-3';
    resetButton.textContent = 'Сбросить фильтры';
    resetButton.addEventListener('click', function() {
        carClassSelect.value = '';
        transmissionSelect.value = '';
        searchInput.value = '';
        filterCars();
    });
    document.querySelector('.row.mb-4').appendChild(resetButton);
}); 