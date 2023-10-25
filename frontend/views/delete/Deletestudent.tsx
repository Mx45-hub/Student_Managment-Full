import React, { useEffect, useState } from 'react'
import Student  from "Frontend/generated/com/example/application/model/Student"
import { StudentService } from "Frontend/generated/endpoints"
import { useForm } from '@hilla/react-form';
import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";
import { TextField } from '@hilla/react-components/TextField.js';
import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';



export default function Deletestudent () {

    const [students, setStudents] = useState<Student[]>([])

    const [myerror, founderror] = useState("");

    const { model, submit, field } = useForm(StudentModel, {
        onSubmit: async (student: Student) => {
                await  StudentService.deletestu(student.studentcode!);
                Notification.show('Financial report generated', {
                    position: 'top-stretch',
                    duration: 0,
                  });
        }});

  return (
    <section className="h-xl text-center  m-auto">

             {myerror && <p className='--lumo-primary-color: red;'>{myerror}</p>}
    <TextField label="Full Student Code To Delete" {...field(model.studentcode)}></TextField>
    <Button onClick={submit}>Delete </Button>
  </section>

  )
}
