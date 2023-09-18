class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}
export default User;
