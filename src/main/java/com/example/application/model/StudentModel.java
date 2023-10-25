package com.example.application.model;
import java.util.Objects;

public class StudentModel extends Student {

    public Long id;
    public String StudentName;
    public String Studentsurname;
    public int Studentage;
    public int grade;
    public boolean availablility;
    public String studentcode;
    public String course;

    public StudentModel() {
    }

    public StudentModel(Long id, String StudentName, String Studentsurname, int Studentage, int grade, boolean availablility, String studentcode, String course) {
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

    public StudentModel id(Long id) {
        setId(id);
        return this;
    }

    public StudentModel StudentName(String StudentName) {
        setStudentName(StudentName);
        return this;
    }

    public StudentModel Studentsurname(String Studentsurname) {
        setStudentsurname(Studentsurname);
        return this;
    }

    public StudentModel Studentage(int Studentage) {
        setStudentage(Studentage);
        return this;
    }

    public StudentModel grade(int grade) {
        setGrade(grade);
        return this;
    }

    public StudentModel availablility(boolean availablility) {
        setAvailablility(availablility);
        return this;
    }

    public StudentModel studentcode(String studentcode) {
        setStudentcode(studentcode);
        return this;
    }

    public StudentModel course(String course) {
        setCourse(course);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof StudentModel)) {
            return false;
        }
        StudentModel studentModel = (StudentModel) o;
        return Objects.equals(id, studentModel.id) && Objects.equals(StudentName, studentModel.StudentName) && Objects.equals(Studentsurname, studentModel.Studentsurname) && Studentage == studentModel.Studentage && grade == studentModel.grade && availablility == studentModel.availablility && Objects.equals(studentcode, studentModel.studentcode) && Objects.equals(course, studentModel.course);
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
