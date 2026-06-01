const form = document.getElementById('project-form');
const table = document.getElementById('table-body');

document.getElementById('project-image').addEventListener('change', function() {
    let fileDisplay = document.getElementById('file-name-display');
    
    
    if (this.files && this.files.length > 0) {
        fileDisplay.innerText = "Selected: " + this.files[0].name;
    } else {
        fileDisplay.innerText = "No file chosen";
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let projectName = document.getElementById('project-name').value;
    let projectURL = document.getElementById('project-url').value;
    let projectDate = document.getElementById('project-date').value;
    let projectTech = document.getElementById('project-tech').value;
    let projectDescription = document.getElementById('project-desc').value;

    document.getElementById('name-error').innerText = "";
    document.getElementById('url-error').innerText = "";
    document.getElementById('date-error').innerText = "";
    document.getElementById('tech-error').innerText = "";
    document.getElementById('desc-error').innerText = "";
    document.getElementById('image-error').innerText = "";

    let isValid = true;

    if (projectName === "") {
        document.getElementById('name-error').innerText = "Project name is required.";
        isValid = false;
    }
    if (projectURL === "") {
        document.getElementById('url-error').innerText = "Project URL is required.";
        isValid = false;
    }
    if (projectDate === "") {
        document.getElementById('date-error').innerText = "Project date is required.";
        isValid = false;
    }
    if (projectTech === "") {
        document.getElementById('tech-error').innerText = "Project technology is required.";
        isValid = false;
    }
    if (projectDescription === "") {
        document.getElementById('desc-error').innerText = "Project description is required.";
        isValid = false;
    }
    
    let imageFile = document.getElementById('project-image').files[0];
    if (!imageFile) {
        document.getElementById('image-error').innerText = "Image is required.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    

    let reader = new FileReader();

    reader.onload = function(e) {
        let uploadedImageURL = e.target.result; 
    
        let newRow = ` 
                <tr class="project-header-row">
                    <th colspan="3" scope="colgroup" class="project-name">${projectName}</th>
                </tr>
                <tr class="project-data-row">
                    <th scope="col" class="thumbnail-header">Image Thumbnail</th>
                    <th scope="row">URL</th>
                    <td><a href="${projectURL}" target="_blank">${projectURL}</a></td>
                </tr>
                <tr class="project-data-row">
                    <td rowspan="3" class="thumbnail-cell">
                    <img src="${uploadedImageURL}" alt="Thumbnail of Project Name">
                    </td>
                    <th scope="row">Completion Date</th>
                    <td>${projectDate}</td>
                </tr>
                <tr class="project-data-row">
                    <th scope="row">Primary tech</th>
                    <td>${projectTech}</td>
                </tr>
                <tr class="project-data-row">
                    <th scope="row">Description</th>
                    <td>${projectDescription}</td>
                </tr>
        `;
        table.insertAdjacentHTML('beforeend', newRow);
        form.reset();
    };
    reader.readAsDataURL(imageFile);
});
