const selectInput = document.getElementById("opcoes");
selectInput.addEventListener("change", showCourse);

hideAllCourses();

function showCourse() {
    coursesArray = ["system-analist", "web-dev", "design", "engineer", "psicology"];

    courseValue = selectInput.value;
    hideAllCourses();
    course = document.getElementById(courseValue);
    course.style.display = "block";

};

function hideAllCourses() {
    const allCourses = document.querySelectorAll(".course");
    allCourses.forEach((course) => { course.style.display = "none"; });
};
