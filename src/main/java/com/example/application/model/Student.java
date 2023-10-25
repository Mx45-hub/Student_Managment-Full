package com.example.application.model;

import javax.annotation.processing.Generated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;


import java.util.Objects;

@Entity
public class Student {
    @Id
    @jakarta.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String StudentName;
    public String Studentsurname;
    public int Studentage;
    public int grade;
    public boolean availablility;
    public String studentcode;
    public String course;


    public Student() {
    }

    public Student(Long id, String StudentName, String Studentsurname, int Studentage, int grade, boolean availablility, String studentcode, String course) {
        this.id = id;
        this.StudentName = StudentName;
        this.Studentsurname = Studentsurname;
        this.Studentage = Studentage;
        this.grade = grade;
        this.availablility = availablility;
        this.studentcode = studentcode;
        this.course = course;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentName() {
        return this.StudentName;
    }

    public void setStudentName(String StudentName) {
        this.StudentName = StudentName;
    }

    public String getStudentsurname() {
        return this.Studentsurname;
    }

    public void setStudentsurname(String Studentsurname) {
        this.Studentsurname = Studentsurname;
    }

    public int getStudentage() {
        return this.Studentage;
    }

    public void setStudentage(int Studentage) {
        this.Studentage = Studentage;
    }

    public int getGrade() {
        return this.grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public boolean isAvailablility() {
        return this.availablility;
    }

    public boolean getAvailablility() {
        return this.availablility;
    }

    public void setAvailablility(boolean availablility) {
        this.availablility = availablility;
    }

    public String getStudentcode() {
        return this.studentcode;
    }

    public void setStudentcode(String studentcode) {
        this.studentcode = studentcode;
    }

    public String getCourse() {
        return this.course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Student id(Long id) {
        setId(id);
        return this;
    }

    public Student StudentName(String StudentName) {
        setStudentName(StudentName);
        return this;
    }

    public Student Studentsurname(String Studentsurname) {
        setStudentsurname(Studentsurname);
        return this;
    }

    public Student Studentage(int Studentage) {
        setStudentage(Studentage);
        return this;
    }

    public Student grade(int grade) {
        setGrade(grade);
        return this;
    }

    public Student availablility(boolean availablility) {
        setAvailablility(availablility);
        return this;
    }

    public Student studentcode(String studentcode) {
        setStudentcode(studentcode);
        return this;
    }

    public Student course(String course) {
        setCourse(course);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Student)) {
            return false;
        }
        Student student = (Student) o;
        return Objects.equals(id, student.id) && Objects.equals(StudentName, student.StudentName) && Objects.equals(Studentsurname, student.Studentsurname) && Studentage == student.Studentage && grade == student.grade && availablility == student.availablility && Objects.equals(studentcode, student.studentcode) && Objects.equals(course, student.course);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, StudentName, Studentsurname, Studentage, grade, availablility, studentcode, course);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", StudentName='" + getStudentName() + "'" +
            ", Studentsurname='" + getStudentsurname() + "'" +
            ", Studentage='" + getStudentage() + "'" +
            ", grade='" + getGrade() + "'" +
            ", availablility='" + isAvailablility() + "'" +
            ", studentcode='" + getStudentcode() + "'" +
            ", course='" + getCourse() + "'" +
            "}";
    }

}
