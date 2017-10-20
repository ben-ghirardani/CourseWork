package com.example.user.top10movieshomework;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by user on 07/08/2017.
 */

public class MovieTest {

    Movie movie;

    @Before
    public void before() {
        movie = new Movie("Ratatouille", "Comedy", 1);
    }

    @Test
    public void testGetTitle() {
        assertEquals("Ratatouille", movie.getTitle());
    }

    @Test
    public void testSetTitle() {
        movie.setTitle("Bond");
        assertEquals("Bond", movie.getTitle());
    }

    @Test
    public void testGetGenre() {
        assertEquals("Comedy", movie.getGenre());
    }

    @Test
    public void testSetGenre() {
        movie.setGenre("Thriller");
        assertEquals("Thriller", movie.getGenre());
    }

    @Test
    public void testGetRanking() {
        assertEquals(1, movie.getRanking());
    }

    @Test
    public void testSetRanking() {
        movie.setRanking(2);
        assertEquals(2, movie.getRanking());
    }

    @Test
    public void testToStringOverride() {
        assertEquals("Title: Ratatouille, Genre: Comedy, Ranking: 1", movie.toString());
    }

}
