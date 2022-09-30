import React, { useState } from "react";
// {useState}를 훅이라고 부름.

function useCounter(initalValue){
    const [count, setCount] = useState(initalValue);

    const increaseCount = () => setCount((count) => count +1);
    const decreaseCount = () => setCount((count) => Math.max(count-1,0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter
//초기 카운트 값을 파라미터로 받아서 count 라는 이름의 state를 생성해 값을 제공,
// 카운트 증가 및 감소를 편리하게 할 수 있도록 제공하는 훅