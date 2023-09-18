class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

// const user1 = new User("Joseph", 10);
// console.log(user1.getName());
export default User;
