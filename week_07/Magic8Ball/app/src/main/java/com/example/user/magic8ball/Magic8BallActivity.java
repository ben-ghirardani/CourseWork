package com.example.user.magic8ball;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

public class Magic8BallActivity extends AppCompatActivity {

    EditText questionEditText;

    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_magic8_ball);

        questionEditText = (EditText)findViewById(R.id.question_text);
        button = (Button)findViewById(R.id.button);

    }

    public void onButtonClicked(View button) {
        Log.d(getClass().toString(), "onShakeButtonClicked was called");
        String question = questionEditText.getText().toString();
        Log.d(getClass().toString(), "The question asked was '" + question + "'");
        AnswerProvider answerProvider = new AnswerProvider();
        String answer = answerProvider.getAnswer();

        Intent intent = new Intent(this, AnswerActivity.class);
        intent.putExtra("answer", answer);
        startActivity(intent);
    }


}
