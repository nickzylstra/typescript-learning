interface Person {
  firstname: string;
  lastname: string;
}

export function hello(person: Person) {
  const { firstname, lastname } = person;
  console.log(`Hello, ${firstname} ${lastname}`);
}

export const user = { firstname: 'Nick', lastname: 'Zylstra' };
