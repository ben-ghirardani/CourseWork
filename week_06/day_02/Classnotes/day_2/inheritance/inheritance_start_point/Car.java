class Car extends Vehicle {
  
  public Car(int wheels){
    super(wheels);
  }


  public String startEngine(){
    return super.startEngine() + " I am Car!";
  }

}