class Bicycle {
  public speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  public applyBrake = (decrement: number): void => {
    this.speed = this.speed - decrement;
  };

  public speedUp = (increment: number): void => {
    this.speed = this.speed + increment;
  };

  public display = (): void => {
    let strSpeed = this.speed.toString();
    console.log(strSpeed + " " + typeof strSpeed);
  };
}

class MountainBike extends Bicycle {
  constructor(speed: number) {
    super(speed);
  }
}

const bike = new MountainBike(25);
bike.display();
bike.speedUp(10);
bike.display();
