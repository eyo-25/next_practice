'use client'

import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState<number>(0);
    console.log("안녕! - 클라이언트")
    return (
        <>
            <div>{count}</div>
            <button onClick={()=> setCount((num) => num + 1)}>숫자 증가 시키기</button>
        </>
    )
}