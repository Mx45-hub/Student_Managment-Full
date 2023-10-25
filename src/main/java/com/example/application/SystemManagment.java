package com.example.application;

import com.example.application.model.Student;
import com.example.application.repository.StudentRepo;
import com.example.application.services.StudentService;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */
@SpringBootApplication
@Theme(value = "hilla-start")

public class SystemManagment implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(SystemManagment.class, args);
    }


}
