interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Victor',
  lastName: 'Oluwaseun',
  age: 21,
  location: 'Kigali',
};

const student2: Student = {
  firstName: 'Amara',
  lastName: 'Okoye',
  age: 23,
  location: 'Lagos',
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableDataCellElement = document.createElement('td');
  const locationCell: HTMLTableDataCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

export { Student, student1, student2, studentsList };
