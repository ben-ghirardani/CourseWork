package com.example.user.magic8ball;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Random;

/**
 * Created by user on 07/08/2017.
 */

public class AnswerProvider implements AnswerProvidable {

    private ArrayList<String> answers;

    public AnswerProvider() {
        answers = new ArrayList<String>();
        setUpAnswers();
    }

    public AnswerProvider(ArrayList<String> newAnswers) {
        answers = newAnswers;
    }

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }

    public int getLength() {
        return answers.size();
    }


    private void setUpAnswers() {
        String[] answersToAdd = {
                "Forecast is positive",
                "Outlook not so good"
        };

        for(String answer : answersToAdd) {
            answers.add(answer);
        }
    }


    public void add(String newAnswer) {
        answers.add(newAnswer);
    }

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        return getAnswerAtIndex(index);
    }
}
