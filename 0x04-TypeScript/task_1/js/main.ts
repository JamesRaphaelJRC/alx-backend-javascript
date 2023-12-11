interface TeacherAttributes {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any additional attribute
}

class Teacher {
    attributes: TeacherAttributes;

    constructor(initialAttributes: TeacherAttributes) {
        // Initialize firstName and lastName only once during construction
        this.attributes = {
            ...initialAttributes,
        };

        // Ensure other required properties are defined
        this.attributes.fullTimeEmployee = true;
    }

    getAttributes(): TeacherAttributes {
        return {...this.attributes};
    }
}

// const teacher3 = new Teacher ({
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
// });
  
// console.log(teacher3);

// Interface Directors extends the TeacherAttributes interface
interface Directors extends TeacherAttributes {
    numberOfReports: number,
}

// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
// };
// console.log(director1);

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string
}
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return ` ${firstName.charAt(0).toUpperCase()}. ${lastName}`
}

// console.log(printTeacher("John", "Doe"));


interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student  {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
