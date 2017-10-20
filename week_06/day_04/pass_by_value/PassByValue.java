public class PassByValue {

  public static void main(String[] args) {
    Temp t = new Temp();
    t.name = "initial name";
    PassByValue p = new PassByValue();
    p.changeValue(t);
    System.out.println(t.name);
  }

  public void changeValue(Temp f) {
    f.name = "changed name";
    // f = new Temp();
    // f.name = "something else";
  }


}