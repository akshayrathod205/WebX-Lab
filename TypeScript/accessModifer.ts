class Student {
  private studentRegNo: number;
  public studentName: string;
  protected studentDept: string;

  constructor(regNo: number, name: string, dept: string) {
    this.studentRegNo = regNo;
    this.studentName = name;
    this.studentDept = dept;
  }

  public displayDetails(): void {
    console.log(
      `RegNo: ${this.studentRegNo}, Name: ${this.studentName}, Dept: ${this.studentDept}`
    );
  }
}

class Person extends Student {
  constructor(regNo: number, name: string, dept: string) {
    super(regNo, name, dept);
  }

  public display(): void {
    console.log(`Name: ${this.studentName}, Dept: ${this.studentDept}`);
  }
}

const unionDisplay = (val: string | number | boolean) => {
  console.log("The value is a " + typeof val);
};

let myTuple: [number, string, boolean, Array<number>];
myTuple = [7, "Akshay", true, [1, 2, 3, 4, 5]];


// const aks = new Person(96, "Akshay", "IT");
// aks.display();
// const deep = new Student(93, "Deep", "IT");
// deep.displayDetails();

// unionDisplay("Akshay");

console.log(myTuple);

