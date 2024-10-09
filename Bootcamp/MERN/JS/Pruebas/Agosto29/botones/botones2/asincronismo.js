document.addEventListener('DOMContentLoaded', () => {
    const longTaskButton = document.getElementById('longTaskButton');
    const secondTaskButton = document.getElementById('secondTaskButton');
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    let longTaskRunning = false;

    longTaskButton.addEventListener('click', () => {
        longTaskRunning = true;
        longTaskButton.disabled = true;
        secondTaskButton.disabled = false;
        status.textContent = 'Tarea Larga Corriendo...';
        count.textContent = ''; // Reset counter display

        // Simulate a long running task with a counter.
        let currentCount = 0;
        const intervalId = setInterval(() => {
            if (currentCount < 300) {
                count.textContent = currentCount++;
            } else {
                clearInterval(intervalId);
                status.textContent = '¡Tarea Larga Completa!';
                count.textContent = '';
                longTaskButton.disabled = false;
                longTaskRunning = false;
            }
        }, 10);
    });

    secondTaskButton.addEventListener('click', () => {
        if (longTaskRunning) {
            status.textContent = 'Debes esperar tu turno :(';
        }
    });
});