public class GrizzlyBear extends Bear {

  public void gatherFood() {
    System.out.println("Off to farmFoods");
  }

// don't need @Override, but it's used to signify what's happening to you and others. More readable code.
  @Override 
  public void wakeUp() {
    System.out.println("Slept in");
  }

}