//하나의 제너릭만 넣는 것이 아닌 여러개의 타입을 지정할 수 있음.
function helloBasic<T, U>(message: T, comment: U): T {
    return message;
}
//함수에서 사용할 제너릭(타입)을 호출할 때 지정해줄 수 있음.
helloBasic<string, number>("Mark", 35);
//호출 없이 부르게 되면 값에 의해 타입이 추론이 된다.
helloBasic(33, "39");
