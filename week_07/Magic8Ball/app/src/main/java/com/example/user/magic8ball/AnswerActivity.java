package com.example.user.magic8ball;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class AnswerActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_answer);

        Log.d("Magic8Ball:", "AnswerActivity.onCreateCalled");

        TextView answerText = (TextView)findViewById(R.id.answer_text);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();
        String answer = extras.getString("answer");

        answerText.setText(answer);

    }
}
