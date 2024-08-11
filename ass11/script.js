document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const fetchButton = document.getElementById('fetchButton');
    const errorParagraph = content.querySelector('.error');
    const loadingParagraph = content.querySelector('.loading');

    async function fetchBaconIpsum() {
        loadingParagraph.style.display = 'block';
        errorParagraph.style.display = 'none';
        
        try {
            const response = await fetch('https://baconipsum.com/api/?type=all');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            const paragraphs = data.map(paragraph => `<p>${paragraph}</p>`).join('');
            content.innerHTML = paragraphs;
        } catch (error) {
            errorParagraph.textContent = `An error occurred: ${error.message}`;
            errorParagraph.style.display = 'block';
            content.innerHTML = '';
        } finally {
            loadingParagraph.style.display = 'none';
        }
    }

    fetchButton.addEventListener('click', fetchBaconIpsum);

    // Fetch data on page load
    fetchBaconIpsum();
});
