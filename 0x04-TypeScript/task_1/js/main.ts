interface TeacherAttributes {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any; // Allows any additional attribute
}

class Teacher {
    private attributes: TeacherAttributes;

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

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);