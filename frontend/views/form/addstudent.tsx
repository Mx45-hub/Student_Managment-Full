import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useForm } from "@hilla/react-form";
import Student  from "Frontend/generated/com/example/application/model/Student"
import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";
import { StudentService } from "Frontend/generated/endpoints"
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { ComboBox } from "@hilla/react-components/ComboBox.js";




export default function AddStudent(){




    const [isSubmitting, setIsSubmitting] = useState(false);
    const { model, submit, field, invalid , errors,  required} = useForm(StudentModel, {


        onSubmit: async (student: Student) => {

            setIsSubmitting(true);
            try {
                await StudentService.saveStudent(student.StudentName!, student.Studentsurname!, student.Studentage!, student.grade!, student.availablility,student.course!);

            } catch (error) {

            } finally {
                setIsSubmitting(false)
            }
        }


    });

    const items = ['Software Engineering', 'Web Development', 'DevOPS', 'Data Engineering'];

    return (
        <>
            <VerticalLayout theme="spacing padding">
                <TextField label="Student name" {...field(model.StudentName!)} />
                <TextField label="Student surname" {...field(model.Studentsurname!)} />
                <TextField label="Student Age" {...field(model.Studentage!)} />
                <TextField label="Student Grade" {...field(model.grade!)} />
                <Checkbox label="Availability"{...field(model.availablility)}></Checkbox>
                <ComboBox
      allowCustomValue
      label="Student course" {...field(model.course!)}
      helperText="Select or type a browser"
      items={items}
    ></ComboBox>
                <Button theme="primary" onClick={submit}  disabled={invalid || isSubmitting  }>Save</Button>
            </VerticalLayout>
        </>



    );


    }