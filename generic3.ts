function helloArray<T>(message: T[]): T {
    return message[0];
}
//단일 타입으로 매개변수를 넘기게 되면 해당 타입을 가진 배열임을 확인할 수 있음
helloArray(["Hello", "World"]);
//복수의 타입이라면 union type으로 표시된다. (string | number)[]
helloArray(["Hello", 5]);

//유니온타입으로 타입을 지정하게되면 예상한 동작이 나오지 않을 수도 있음

//순서에 따른 타입지정의 경우 튜플을 이용하여 타입을 지정하면 좋다.

function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(["hello", "hi"]);
helloTuple(["hello", 6]);
