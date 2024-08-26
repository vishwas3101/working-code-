

// Function to toggle the visibility of the additional content
function toggleReadMore(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'Read More';
    }
}

// Attach event listeners to all "Read More" buttons
const readMoreButtons = document.querySelectorAll('[data-content-id]');
readMoreButtons.forEach(button => {
    const contentId = button.getAttribute('data-content-id');
    button.addEventListener('click', () => toggleReadMore(button.id, contentId));
});

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.classList.add('hidden');
        }
    });

