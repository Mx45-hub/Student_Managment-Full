package com.example.application.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class StudentCodeGenerate {
    


    static String myMethod(String name, String surname) {

            StringBuilder str = new StringBuilder();
        str.append("Zlatan");
        str.append("Ibrahimovic");


        Random rand = new Random();
        rand.toString();
        int rand_int1 = rand.nextInt(1000);

        String s=String.valueOf(rand_int1);//Now it will return "10"  

        String myword = str.toString();
      

        String originalWord = myword;
        List<Character> characters = new ArrayList<>();

        // Convert the original word into a list of characters
        for (char c : originalWord.toCharArray()) {
            characters.add(c);
        }

        // Shuffle the characters
        Collections.shuffle(characters);

        // Build the shuffled word
        StringBuilder shuffledWord = new StringBuilder();
        for (char c : characters) {
            shuffledWord.append(c);
        }


        String randomWord = shuffledWord.toString();
        if (randomWord.length() > 5) {
            randomWord = randomWord.substring(0, 5); // Extract the first 5 characters
        }

        return randomWord + s ;
      }
}
