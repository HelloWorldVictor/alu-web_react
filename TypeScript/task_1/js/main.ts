// Task 1: Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Directors interface extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: printTeacher and its function interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string,
): string => `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher('John', 'Doe'));

// Task 4: StudentClass described through interfaces
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  private firstName: string;

  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }

  displayLastName(): string {
    return this.lastName;
  }
}

const studentClassConstructor: StudentConstructor = StudentClass;
const student: StudentClassInterface = new studentClassConstructor('John', 'Doe');

console.log(student.displayName());
console.log(student.workOnHomework());
