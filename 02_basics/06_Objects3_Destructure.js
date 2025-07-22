const course = {

    courseName: "JS in Hindi",
    coursePrice : "Free",
    courseInstructor : "Hitesh Chaudary"
}

console.log(course.courseName) // 1st way to print course property
console.log(course["coursePrice"]) // 2nd way to print course property

// const {courseInstructor} = course // 3rd way to print using Object Destructuring
const {courseInstructor: Instructor} = course // 

console.log(Instructor)