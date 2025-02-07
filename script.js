function highlight() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'rgb(0, 128, 0)'; // Change to green
    });
}

function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'rgb(0, 0, 0)'; // Revert to black
    });
}

