import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../interfaces/student.interface';

@Pipe({
  name: 'filterStudents'
})
export class FilterPipe implements PipeTransform {

  transform(students: IStudent[], filterText: string) {
    // initially filterText value is null. when page load we need to display all the students.
    if (students.length === 0 || filterText === "") {
      return students;
    }
    else {
      return students.filter((student) => {
        return student.gender.toLowerCase() === filterText.toLowerCase();
      })
    }
  }

}
