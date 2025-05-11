class EmployeeData {
  constructor(public name: string, public department: string) {}
}

//経理
class PayCalculator {
  private getRegularHours() {
    console.log("経理用の労働時間算出")
  }

  calculatePay(employeeData: EmployeeData) {
    this.getRegularHours()
    console.log(`${employeeData.name}の経理用の給料算出`)
  }
}

//人事
class HourReporter {
  private getRegularHours() {
    console.log("人事用の労働時間算出")
  }

  reportHours(employeeData: EmployeeData) {
    this.getRegularHours()
    console.log(`${employeeData.name}の人事用の労働時間レポート作成`)
  }
}

function run2() {
  const emp1 = new EmployeeData("スズキ", "エンジニア")

  console.log("経理用処理")
  const payCalculator = new PayCalculator()
  payCalculator.calculatePay(emp1)

  console.log("人事用処理")
  const hourReporter = new HourReporter()
  hourReporter.reportHours(emp1)
}

run2()
