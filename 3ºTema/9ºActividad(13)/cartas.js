document.addEventListener('DOMContentLoaded', function () {
    let counts = {};
    let availableNums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    function assignClickEvent() {
        const buttons = document.querySelectorAll('.square');
        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                if (!this.dataset.clicked) {
                    const randomIndex = Math.floor(Math.random() * availableNums.length);
                    const randomNum = availableNums[randomIndex];
                    this.innerText = randomNum;
                    counts[randomNum] = counts[randomNum] ? counts[randomNum] + 1 : 1;
                    availableNums.splice(randomIndex, 1);

                    if (counts[randomNum] === 2) {
                        this.disabled = true;
                    }

                    this.dataset.clicked = true;
                }
            });
        });
    }

    assignClickEvent();

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function () {
        const buttons = document.querySelectorAll('.square');
        buttons.forEach(button => {
            button.innerText = '';
            button.disabled = false;
            button.dataset.clicked = false;
        });
        counts = {};
        availableNums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

        // Remueve eventos de clic existentes y vuelve a asignar el evento
        buttons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });

        assignClickEvent();
    });
});
