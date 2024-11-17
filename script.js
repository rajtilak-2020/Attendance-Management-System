// script.js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Hardcoded credentials
    const adminCredentials = { username: "admin", password: "admin@1" };

    const teacherCredentials = [
        { username: "teacher1", password: "teacher@1" },
        { username: "teacher2", password: "teacher@2" },
        // Add more teachers here if needed
    ];

    const studentCredentials = [
        { username: "student1", password: "student@1" },
        { username: "student2", password: "student@2" },
        // Add more students here if needed
    ];

    // Validate credentials
    if (
        role === "admin" &&
        username === adminCredentials.username &&
        password === adminCredentials.password
    ) {
        
        window.location.href = "admin-dashboard.html";
    } else if (
        role === "teacher" &&
        teacherCredentials.some(
            (teacher) => teacher.username === username && teacher.password === password
        )
    ) {
        
        window.location.href = "teacher-dashboard.html";
    } else if (
        role === "student" &&
        studentCredentials.some(
            (student) => student.username === username && student.password === password
        )
    ) {
        
        window.location.href = "student-dashboard.html";
    } else {
        alert("Invalid username, password, or role. Please try again!");
    }
});