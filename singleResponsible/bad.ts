class Employee {
  constructor(private _name: string, private _department: string) {}

  get name() {
    return this._name;
  }

  private getRegularHours() {
    console.log("労働時間を計算");
  }

  calculatePay() {
    this.getRegularHours();
    console.log("時間から給与計算");
  }

  reportHours() {
    this.getRegularHours();
    console.log("時間から労働時間報告");
  }
}

const run = () => {
  const emp1 = new Employee("田中", "営業");

  console.log("経理");
  emp1.calculatePay();

  console.log("人事");
  emp1.reportHours();
};

run();
