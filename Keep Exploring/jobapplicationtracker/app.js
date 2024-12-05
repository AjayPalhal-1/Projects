<script>
    let applications = JSON.parse(localStorage.getItem('applications')) || [];

    function renderApplications() {
        const applicationsList = document.getElementById('applications');
        applicationsList.innerHTML = '';

        applications.forEach((app, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Company: ${app.company}, Position: ${app.position}, Date: ${app.date}, Status: ${app.status}`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteApplication(index);

            listItem.appendChild(deleteButton);
            applicationsList.appendChild(listItem);
        });
    }

    document.getElementById('jobApplicationForm').onsubmit = (event) => {
        event.preventDefault();

        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        const newApplication = { company, position, date, status };
        applications.push(newApplication);

        localStorage.setItem('applications', JSON.stringify(applications));

        renderApplications();

        document.getElementById('jobApplicationForm').reset();
    };

    function deleteApplication(index) {
        applications.splice(index, 1);
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    }

    renderApplications();
</script>
