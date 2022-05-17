//Generics Extends
//제네릭에서 Extends는 class에서 처럼 단순한 상속이 아니다.

//제너릭 T가 string과 number를 상속한다는 것이 아닌
//T라는 타입이 string이나 number로 이루어져있다는 뜻이 된다.
class PersonExtends<T extends string | number> {
    private _name: T;
    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true); // boolean은 extends된 T에 맞지 않기 때문에 에러가 난다.

//타입을 지정해줄 때 최대한 작은 단위로 쪼개서 설정해주는 것이 좋다.
//단순히 T만 선언해둔다면, 후에 코드를 확인할 때 기억이 나지 않을 수도 있음.
//제너릭에서 extends는 상속의 개념보다는 사용가능한 타입을 제한하는 용도라고 생각하면 편함.
