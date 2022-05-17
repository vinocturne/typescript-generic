//클래스에서 제너릭을 설정할 때에는 클래스명 뒤에 제너릭을 선언
//선언된 제너릭은 클래스 내에서 사용 가능

class Person<T, K> {
    private _name: T;
    private _age: K;
    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person("Mark", 33);
// new Person<string>("Mark");
new Person<string, number>("mark", 33);
