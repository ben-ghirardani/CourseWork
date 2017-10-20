package com.example.user.top10movieshomework;

/**
 * Created by user on 07/08/2017.
 */

public class Movie {

    private String title;
    private String genre;
    private int ranking;

    public Movie(String title, String genre, int ranking) {
        this.title = title;
        this.genre = genre;
        this.ranking = ranking;
    }


    public String getTitle() {
        return this.title;
    }

    public void setTitle(String name) {
        this.title = name;
    }


    public String getGenre() {
        return this.genre;
    }

    public void setGenre(String item) {
        this.genre = item;
    }

    public int getRanking() {
        return this.ranking;
    }

    public void setRanking(int newRank) {
        this.ranking = newRank;
    }

    @Override
    public String toString() {
        return "Title: " + this.title + ", Genre: " + this.genre + ", Ranking: " + this.ranking;
    }
}
