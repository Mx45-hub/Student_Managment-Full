package com.example.application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.application.model.Student;
import com.example.application.repository.StudentRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;

import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;


@BrowserCallable
@AnonymousAllowed
@Endpoint
@Service
public class StudentService {

    @Autowired
    public StudentRepo studentRepo;



    public List<Student> findAll(){
        return studentRepo.findAll();
    }

    public String StudentName;
    public String Studentsurname;
    public int Studentage;
    public int grade;


    public void saveStudent(String StudentName,String Studentsurname,int Studentage , int grade,
    boolean availablility, String course ){


        String code =  StudentCodeGenerate.myMethod(StudentName, Studentsurname);

        Student newStudent = new Student();
        newStudent.setStudentName(StudentName);
        newStudent.setStudentsurname(Studentsurname);
        newStudent.setStudentage(Studentage);
        newStudent.setGrade(grade);
        newStudent.setAvailablility(availablility);
        newStudent.setCourse(course);
        newStudent.setStudentcode(code);
        studentRepo.save(newStudent);
    }

        public void deletestudent(Long id ){
        studentRepo.deleteById(id);
         }

       public void deletestu(String studentcode) {
           studentRepo.deleteBystudentcode(studentcode);
    };


        public Student find1studentbycode(String code ){
               try {
                 Student existingStudent = studentRepo.findBystudentcode(code);
                 return existingStudent;

               } catch (Exception e) {
                e.printStackTrace();
                System.err.println("Invalid input data. Please check the values.");
               return null;
               }
         }



         public void updatestuden(String code, String StudentName,String Studentsurname,int Studentage , int grade,
                  boolean availablility, String course ){

           studentRepo.findBystudentcode(code);

           Student existingStudent = studentRepo.findBystudentcode(code);

           if (existingStudent != null) {

        existingStudent.setStudentName(StudentName);
        existingStudent.setStudentsurname(Studentsurname);
        existingStudent.setStudentage(Studentage);
        existingStudent.setGrade(grade);
        existingStudent.setAvailablility(availablility);
        existingStudent.setCourse(course);
        try {

            studentRepo.save(existingStudent);
        } catch (Exception e) {

            System.err.println("Error while saving the student: " + e.getMessage());
            }
        } else {
            // Handle invalid input data here, e.g., return an error message or log the issue.
            System.err.println("Invalid input data. Please check the values.");
        }



         }

    public StudentService() {
    }

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public StudentRepo getStudentRepo() {
        return this.studentRepo;
    }

    public void setStudentRepo(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public StudentService studentRepo(StudentRepo studentRepo) {
        setStudentRepo(studentRepo);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof StudentService)) {
            return false;
        }
        StudentService studentService = (StudentService) o;
        return Objects.equals(studentRepo, studentService.studentRepo);
    }


    @Override
    public String toString() {
        return "{" +
            " studentRepo='" + getStudentRepo() + "'" +
            "}";
    }


}
