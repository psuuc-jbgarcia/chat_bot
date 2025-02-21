document.addEventListener('DOMContentLoaded', function () {
    const reportType = document.getElementById('reportType');
    const linkDetails = document.getElementById('linkDetails');
    const numberDetails = document.getElementById('numberDetails');
    const personDetails = document.getElementById('personDetails');
    const scamDetails = document.getElementById('scamDetails');

    // Listen for changes in the report type dropdown
    reportType.addEventListener('change', function () {
        // Hide all input fields initially
        linkDetails.style.display = 'none';
        numberDetails.style.display = 'none';
        personDetails.style.display = 'none';
        scamDetails.style.display = 'none';

        // Show the relevant input field based on the selected type
        if (reportType.value === 'link') {
            linkDetails.style.display = 'block';
        } else if (reportType.value === 'number') {
            numberDetails.style.display = 'block';
        } else if (reportType.value === 'person') {
            personDetails.style.display = 'block';
        } else if (reportType.value === 'scam') {
            scamDetails.style.display = 'block';
        }
    });
});