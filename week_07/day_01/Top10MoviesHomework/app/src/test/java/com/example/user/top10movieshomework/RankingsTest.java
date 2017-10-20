package com.example.user.top10movieshomework;

import org.junit.Before;
import org.junit.Test;

/**
 * Created by user on 07/08/2017.
 */

public class RankingsTest {

    Rankings rankings;
    Movie movie1;
    Movie movie2;
    Movie movie3;
    Movie movie4;
    Movie movie5;
    Movie movie6;
    Movie movie7;
    Movie movie8;
    Movie movie9;
    Movie movie10;


    @Before
    public void before() {
        rankings = new Rankings();
        movie1 = new Movie("Jaws", "Horror", 1);
        movie2 = new Movie("Ratatouille", "Comedy", 2);
        movie3 = new Movie("City of God", "Drama", 3);
        movie4 = new Movie("Spirited Away", "Fantasy", 4);
        movie5 = new Movie("Apocalypse Now", "War", 5);
        movie6 = new Movie("Alien", "Horror", 6);
        movie7 = new Movie("Vertigo", "Thriller", 7);
        movie8 = new Movie("La La Land", "Romance", 8);
        movie9 = new Movie("Mad Max: Fury Road", "Driving", 9);
        movie10 = new Movie("Harry Potter", "Magic", 10);
    }

    @Test
    public void testAddMovieToRankings() {
        rankings.addMovieToRanking(movie1);
    }

    @Test
    public void testGetMovieByRanking() {
        rankings.addMovieToRanking(movie1);
        rankings.addMovieToRanking(movie2);
        rankings.addMovieToRanking(movie3);
        rankings.addMovieToRanking(movie4);
        rankings.addMovieToRanking(movie5);
        rankings.addMovieToRanking(movie6);
        rankings.addMovieToRanking(movie7);
        rankings.addMovieToRanking(movie8);
        rankings.addMovieToRanking(movie9);
        rankings.addMovieToRanking(movie10);
    }

}
