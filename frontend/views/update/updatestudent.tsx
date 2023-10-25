import React, { useEffect, useState } from 'react'
import Student  from "Frontend/generated/com/example/application/model/Student"
import { StudentService } from "Frontend/generated/endpoints"

import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";
import { useForm, useFormPart } from '@hilla/react-form';
import { TextField } from '@hilla/react-components/TextField.js';
import { Button } from '@hilla/react-components/Button.js';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js';
import { AbstractModel, Min, NotEmpty, NotNull, Positive } from '@hilla/form';

    export default function UpdateStudent() {

        const [students, setStudents] = useState<Student[]>([])
        const [myerror, founderror] = useState("");

        const { model, submit, field, addValidator } = useForm(StudentModel, {
            onSubmit: async (student: Student) => {
                try {

                    await StudentService.updatestuden(student.studentcode!, student.StudentName!, student.Studentsurname!, student.Studentage!, student.grade!, student.availablility, student.course!);
                }
                catch (error) {
                    founderror("An error occurred while updating the student: " );

                }

            }});



        const studentcode = useFormPart(model.studentcode);
        const studentname = useFormPart(model.StudentName);
        const studentsurname = useFormPart(model.Studentsurname);
        const studentage = useFormPart(model.Studentage);
        const grade = useFormPart(model.grade);
        const availability = useFormPart(model.availablility);
        const course = useFormPart(model.course);



        useEffect(() => {
            studentcode.addValidator(
              new NotEmpty({
                message: 'Please enter student code!',

              }));

              studentname.addValidator(
                new NotEmpty({
                  message: 'Please enter a student name'
                }));

               studentsurname.addValidator(
                new NotEmpty({
                  message: 'Please enter a student surname'
                }));




                            course.addValidator(
                                new NotEmpty({
                                  message: 'Please enter a student course'
                                }));




               } ,

               []);

            const items = ['Software Engineering', 'Web Development', 'DevOPS', 'Data Engineering'];




  return (
    <>
    <div>
             <VerticalLayout>

             <h2>Please Update student here:</h2>
             <p>Add Student code, Student will be found automatically.{myerror}</p>
             {myerror && <p>{myerror}</p>}
         <TextField required   label="Student code"  {...field(model.studentcode)} />
                <TextField required defaultValue={"sergio"}  label="Student name" {...field(model.StudentName)} />
                <TextField required label="Student surname" {...field(model.Studentsurname!)} />
                <TextField  label="Student Age" {...field(model.Studentage!)} />
                <TextField  label="Student Grade" {...field(model.grade!)} />
                <Checkbox  label="Availability"{...field(model.availablility!)}></Checkbox>
                <ComboBox allowCustomValue label="Student course" {...field(model.course!)}
                helperText="Select or type a browser" items={items}
                ></ComboBox>

               <Button onClick={submit}>Save</Button>


             </VerticalLayout>










      </div>


        </>
  )
  }