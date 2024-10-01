// Function to validate the form
function validateForm() {
    const form = document.getElementById('jobApplicationForm');
    const email = form.elements['email'].value;
    const phoneNumber = form.elements['phoneNumber'].value;
    const termsChecked = form.elements['terms'].checked;
    const privacyChecked = form.elements['privacyPolicy'].checked;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Phone number validation (10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // Ensure terms and privacy policy are checked
    if (!termsChecked || !privacyChecked) {
        alert('You must agree to the terms and acknowledge the privacy policy.');
        return false;
    }

    // If validation passes, log data to the console
    logApplicationData();
    return false; // Prevent form submission for testing purposes
}

// Function to log form data to the console
function logApplicationData() {
    const form = document.getElementById('jobApplicationForm');

    const applicationData = {
        fullName: form.elements['firstName'].value + " " + form.elements['lastName'].value,
        email: form.elements['email'].value,
        phoneNumber: form.elements['phoneNumber'].value,
        resume: form.elements['resume'].files[0] ? form.elements['resume'].files[0].name : 'No file selected',
        coverLetter: form.elements['coverLetter'].value,
        educationLevel: form.elements['educationLevel'].value,
        schoolName: form.elements['schoolName'].value,
        major: form.elements['major'].value,
        graduationYear: form.elements['graduationYear'].value,
        previousJobs: form.elements['previousJobs'].value,
        companies: form.elements['companies'].value,
        employmentDates: form.elements['employmentDates'].value,
        jobResponsibilities: form.elements['jobResponsibilities'].value,
        skills: form.elements['skills'].value,
        certifications: form.elements['certifications'].value,
        startDate: form.elements['startDate'].value,
        willingToRelocate: form.elements['relocate'].checked ? 'Yes' : 'No',
        workSchedule: form.elements['workSchedule'].value,
        referenceName: form.elements['referenceName'].value,
        referenceContact: form.elements['referenceContact'].value,
        referenceRelationship: form.elements['referenceRelationship'].value,
        whyCompany: form.elements['whyCompany'].value
    };

    console.log('Submitted Application:', applicationData);
    addApplicationToTable(applicationData);
}

// Function to add submitted data to the table
function addApplicationToTable(data) {
    const applicationsBody = document.getElementById('applicationsBody');
    const newRow = document.createElement('tr');

    // Creating table cells with submitted data
    newRow.innerHTML = `
        <td>${data.fullName}</td>
        <td>${data.email}</td>
        <td>${data.phoneNumber}</td>
        <td>${data.resume}</td>
        <td>${data.coverLetter}</td>
    `;

    applicationsBody.appendChild(newRow);
}

// Event listener for the "View Applications as Table" button
document.getElementById("viewApplicationsButton").addEventListener("click", function () {
    const applicationTable = document.getElementById('applicationTable');
    applicationTable.style.display = 'block';
});
