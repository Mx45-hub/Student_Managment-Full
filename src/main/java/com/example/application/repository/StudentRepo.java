package com.example.application.repository;


import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.application.model.Student;

import jakarta.transaction.Transactional;

@Repository
public interface StudentRepo extends JpaRepository<Student,Long>{


   // @Transactional
    //Student deleteBystudentcode(String studentcode);

    @Transactional
    Student deleteBystudentcode(String studentcode);

    Student findBystudentcode(String studentcode);





}