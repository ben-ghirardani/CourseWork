package com.example.user.top10movieshomework;

import java.util.ArrayList;

/**
 * Created by user on 07/08/2017.
 */

public class Rankings {

   private ArrayList<Movie> rankList;

    public Rankings() {
        this.rankList = new ArrayList<Movie>();
    }

    public void addMovieToRanking(Movie movie){
        rankList.add(movie);
    }




}
