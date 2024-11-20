const selectInput = document.getElementById("opcoes");
selectInput.addEventListener("change", showCourse);

const coursesWrapper = document.querySelector(".courses-wrapper");

hideAllCourses();

function showCourse() {
    coursesArray = ["system-analist", "web-dev", "design", "engineer", "psicology"];

    courseValue = selectInput.value;
    hideAllCourses();
    course = document.getElementById(courseValue);
    course.style.display = "block";

    coursesWrapper.style.borderRadius = "0 0 12px 12px";

};

function hideAllCourses() {
    const allCourses = document.querySelectorAll(".course");
    allCourses.forEach((course) => { course.style.display = "none"; });

    coursesWrapper.style.borderRadius = 0;
};
