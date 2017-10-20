import java.util.HashMap;

public class HashMapDemo {
  
  public static void main(String[] args) {
  
    HashMap<String, Integer> tabletennisScores = new HashMap<String, Integer>();

    tabletennisScores.put("Yan", 10);
    tabletennisScores.put("Chris", 20);
    tabletennisScores.put("Stephen", 30);

    System.out.println( tabletennisScores.get("Yan") );

  }
}