package com.example.application.services;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.application.model.Student;
import com.example.application.repository.StudentRepo;




@Component
public class Commandline implements CommandLineRunner {

    private final StudentService studentService;

    private final StudentRepo studentRepo;



    public Commandline(StudentService studentService, StudentRepo studentRepo) {
        this.studentService = studentService;
        this.studentRepo = studentRepo;

    }

    @Override
    public void run(String... args) {


        Student student = new Student();
        student.StudentName("Sergio");
        student.Studentage(16);
        student.Studentsurname("aguero");
        student.grade(9);
        student.setAvailablility(true);
        student.course("Engineering");
        student.studentcode("hyt765");


        Student student2 = new Student();
        student2.StudentName("John ");
        student2.Studentage(20);
        student2.Studentsurname("Smith");
        student2.grade(8);
        student2.setAvailablility(false);
        student2.course("Computer Science");
        student2.studentcode("abc123");


        Student student3 = new Student();
        student3.StudentName("Alice");
student3.Studentage(22);
student3.Studentsurname("Johnson");
student3.grade(7);
student3.setAvailablility(true);
student3.course("Biology");
student3.studentcode("xyz789");

        Student student4 = new Student();
        student4.StudentName("Ella");
student4.Studentage(23);
student4.Studentsurname("Davis");
student4.grade(8);
student4.setAvailablility(true);
student4.course("Physics");
student4.studentcode("pqr456");

        Student student5 = new Student();
        student5.StudentName("Michael");
        student5.Studentage(21);
        student5.Studentsurname("Brown");
        student5.grade(9);
        student5.setAvailablility(false);
        student5.course("Chemistry");
        student5.studentcode("stu123");

        studentRepo.save(student);
       studentRepo.save(student2);
       studentRepo.save(student3);
        studentRepo.save(student4);
        studentRepo.save(student5);


    }
}