document.getElementById('fetchBtn').addEventListener('click', async () => {
    const baconTextDiv = document.getElementById('baconText');
    const loadingDiv = document.getElementById('loading');

    baconTextDiv.innerHTML = '';
    loadingDiv.style.display = 'block';

    try {
        const response = await fetch('https://baconipsum.com/api/?type=all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayBaconText(data);
    } catch (error) {
        baconTextDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
        loadingDiv.style.display = 'none';
    }
});

function displayBaconText(data) {
    const baconTextDiv = document.getElementById('baconText');
    data.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        baconTextDiv.appendChild(p);
    });
}
