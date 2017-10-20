package com.example.user.magic8ball;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static junit.framework.Assert.*;


/**
 * Created by user on 07/08/2017.
 */

public class AnswerProviderTest {

    ArrayList<String> testAnswers;

    @Before
    public void before() {
        testAnswers = new ArrayList<String>();
        testAnswers.add("Go to the pub");
        testAnswers.add("Don't go to the pub");
    }


    @Test
    public void testCreateAnswerProviderWithList() {
        AnswerProvider answerProvider = new AnswerProvider(testAnswers);
        assertEquals(2, answerProvider.getLength());
    }

    @Test
    public void getAnswersTest() {
        AnswerProvider answerProvider = new AnswerProvider();
        assertNotNull(answerProvider.getLength());
    }

    @Test
    public void testSetUpAnswers() {
        AnswerProvider answerProvider = new AnswerProvider();
        assertEquals(2, answerProvider.getLength());
    }

    @Test
    public void testAddAnswer() {
        AnswerProvider answerProvider = new AnswerProvider();
        int originalNumberOfAnswers = answerProvider.getLength();
        answerProvider.add("Yes");
        assertEquals(originalNumberOfAnswers + 1, answerProvider.getLength());
    }


    @Test
    public void testGtAnswerAtIndex() {
        AnswerProvider answerProvider = new AnswerProvider(testAnswers);
        String result = answerProvider.getAnswerAtIndex(1);
        assertEquals("Don't go to the pub", result);
    }

    @Test
    public void getAnswerTest() {
        AnswerProvider answerProvider = new AnswerProvider(testAnswers);
        String result = answerProvider.getAnswer();
        System.out.println("getAnswerTest. Answer: " + result);
        assertNotNull(result);
    }

}
