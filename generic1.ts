function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 반복된 함수들을 컨트롤하기 위해 제너릭을 사용

function hello(message: any): any {
    return message;
}

console.log(hello("mark").length);
console.log(hello(33).length);
//any로 선언을 하게되면 컴파일시에는 문제가 없다고 나오지만 런타임 시 undefined가 나올 수 있음.
//위의 hello(33)의 경우 length가 적용되지 않음에도 불구하고 에러를 표시하지 않음.
//우리는 어떤게 들어올지 모르는 타입을 그대로 사용하는 것이 안전한 것을 알기 때문에 제너릭을 사용한다.

function helloGeneric<T>(message: T): T {
    return message;
}
console.log(helloGeneric("Mark").length);
console.log(helloGeneric(33));
console.log(helloGeneric(true));

//제너릭을 사용하게되면 반환 값이 any로 출력되어 타입 지정이 실패하는 상황을 막을 수 있음.
