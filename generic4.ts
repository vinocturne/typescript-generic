//type-alias와 generic에 제너릭을 이용한 함수 추가.

type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
    return message;
};

interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
    return message;
};
