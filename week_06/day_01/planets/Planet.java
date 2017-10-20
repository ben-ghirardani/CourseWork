class Planet {
  private String name;
  private int size;
  private String blowUp;

  public Planet(String name, int size, String blowUp){
    this.name = name;
    this.size = size;
    this.blowUp = blowUp;
  }

  public String getName(){
    return this.name;
  }

  public int getSize(){
    return this.size;
  }

  public String blowUp(){
    return this.blowUp;
  }

}