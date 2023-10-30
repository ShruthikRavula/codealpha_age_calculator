function calculateAge() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has already occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    const result = document.getElementById("result");
    result.innerHTML = `Your age is ${age} years.`;
}
