/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = Subjects.Cpp
export const java = Subjects.Java
export const react = Subjects.React
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
}

const newTeacher = new cpp(cTeacher);
console.log(newTeacher.getRequirements())
console.log(newTeacher.getAvailableTeacher())
