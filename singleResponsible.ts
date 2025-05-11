class Employee {
  constructor(private _name: string, private _department: string) {}

  get name() {
    return this._name;
  }

  private getRegularHours() {
    console.log("営業時間を計算");
  }

  calculatePay() {
    this.getRegularHours();
  }
}

const run = () => {
  const emp1 = new Employee("田中", "営業");
  console.log(emp1.name);
};

run();
