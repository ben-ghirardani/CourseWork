class Runner{
  public static void main(String[] args) {
    Planet planet = new Planet("Mars", 5, "kaBOOM!");
    
    String name = planet.getName();
    System.out.println ("This is " + name);
    
    int size = planet.getSize();
    System.out.println (name + " is " + size);
    
    String blowUp = planet.blowUp();
    System.out.println (name + " goes " + blowUp);
  }
}