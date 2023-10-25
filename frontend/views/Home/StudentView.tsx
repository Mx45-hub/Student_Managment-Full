
import { Grid } from "@hilla/react-components/Grid.js"
import Student  from "Frontend/generated/com/example/application/model/Student"
import { StudentService } from "Frontend/generated/endpoints"
import { useEffect, useState } from "react"
import { Avatar } from "@hilla/react-components/Avatar.js"
import { GridFilterColumn } from "@hilla/react-components/GridFilterColumn.js"
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js"
import { GridSortColumn } from "@hilla/react-components/GridSortColumn.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useForm, useFormPart } from "@hilla/react-form";
import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";
import { TextField } from "@hilla/react-components/TextField.js";
import { Button } from "@hilla/react-components/Button.js";
import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { ComboBox } from "@hilla/react-components/ComboBox.js";
import { NotEmpty } from "@hilla/form"



//import addStudent from './views/Home/addstudent';


export default function StudentView(){

    const [students, setStudents] = useState<Student[]>([])

    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        StudentService.findAll()
            .then((data) => {
                console.log(data); // Check if data is fetched correctly
                setStudents(  data.map((person, index) => ({
                    ...person,
                    displayName: `${person.StudentName} ${person.Studentsurname}`,
                    colorIndex: index,
                })));

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);






    const { model, submit, field, invalid , errors,  required} = useForm(StudentModel, {

        onSubmit: async (student: Student) => {
            setIsSubmitting(true);
            try {
                await StudentService.saveStudent(student.StudentName!, student.Studentsurname!, student.Studentage!, student.grade!, student.availablility,student.course!);
            } catch (error) {
            } finally {
                setIsSubmitting(false)

                StudentService.findAll()
                .then((data) => {
                    console.log(data); // Check if data is fetched correctly
                    setStudents(  data.map((person, index) => ({
                        ...person,
                        displayName: `${person.StudentName} ${person.Studentsurname}`,
                        colorIndex: index,
                    })));
                })


            }
        }
    });



    const items = ['Software Engineering', 'Web Development', 'DevOPS', 'Data Engineering'];


    const nameRenderer = ({ item: person }: { item: Student }) => (

            <HorizontalLayout style={{ alignItems: 'center' }} theme="spacing">
            <Avatar img={person.StudentName} name={person.StudentName} />
            <span {...{ theme: 'badge' }}>{person.StudentName}</span>
            </HorizontalLayout>
      )

      let isPresent:boolean = true||false;

      const statusRenderer = (person: Student) => (
        <span
          {...({
            theme: `badge ${person.availablility === isPresent ? 'success' : 'error'}`,
          } satisfies object)}
        >
          {person.availablility}
        </span>
      );


      const studentname = useFormPart(model.StudentName!);
      const studentsurname = useFormPart(model.Studentsurname!);
      const course = useFormPart(model.course!);

      useEffect(() => {


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



        return (
            <div>


    <>
        <HorizontalLayout theme="spacing padding" className="height-4xl"style={{ justifyContent: 'center' }}>
        <Grid items={students} theme="wrap-cell-content">
        <GridFilterColumn placeholder="Search" header="Search Name" path="displayName" flexGrow={0} width="200px">{nameRenderer}</GridFilterColumn>
        <GridFilterColumn path="studentcode" placeholder="Search " header="Search By Code"  />
            <GridSortColumn path="StudentName" header="Names" />
            <GridSortColumn path="Studentsurname" header="Surnames" />
            <GridSortColumn path="course" header="Courses" />
            <GridSortColumn header="Present" autoWidth>{({ item }) => statusRenderer(item)}</GridSortColumn>
        </Grid>
        <VerticalLayout theme="spacing padding">
                <TextField required label="Student name"  {...field(model.StudentName!)} />
                <TextField label="Student surname" {...field(model.Studentsurname!)} />
                <TextField label="Student Age" {...field(model.Studentage!)} />
                <TextField label="Student Grade" {...field(model.grade!)} />
                <Checkbox label="Availability"{...field(model.availablility)}></Checkbox>
                <ComboBox allowCustomValue label="Student course" {...field(model.course!)} helperText="Select or type a browser" items={items}></ComboBox>
                <Button theme="primary" onClick={submit}  disabled={invalid || isSubmitting  }>Save</Button>
        </VerticalLayout>
        </HorizontalLayout>

    </>
                </div>


            )
        }

//add boolean true or false(availability) attends then add icons
//create update page to update students or students availability
//add section to create coures or delete courses also show how many enrolled in course