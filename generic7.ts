//keyof & type lookup system
//타입을 정확히 찾아낼수 있는 방법

interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: "Mark",
    age: 33,
};

//어떤 객체에 keyof를 붙이면 결과물이 type으로 나오는데 key의 이름으로 나오게 된다.
type Keys = keyof IPerson;

// function getProp(obj:IPerson, key: 'name' | 'age'): string | number {
//IPerson[keyof IPerson]
//=> IPerson["name" | "age"]
//=> IPerson["name"] | IPerson["age"]
//=> string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(person, "name");

//union type으로 처리를 하게되면 name의 경우 string, age의 경우 number만 들어가야 되는데
//코드는 이를 받아들이지 못하게되므로 에러를 표시한다. 유니온 타입일 때 애매한 경우가 이런 경우.
// function setProp(obj:IPerson, key:'name' | 'age', value:string | number): void {
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}
//제너릭을 활용하여 유니온 타입의 불확실성을 명확하게 정의해줄 수 있다.

setProp(person, "name", "anna");
