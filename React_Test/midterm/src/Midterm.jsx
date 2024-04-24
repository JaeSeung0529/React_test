import React from 'react';
import { useState } from 'react';

export default function Midterm(){
    let [fruits,setFruits] = useState(null);

    const selectApple = () => {
        setFruits(fruits = "사과")
    }

    const selectOrange = () => {
        setFruits(fruits = "오렌지")
    }

    const selectBanana = () => {
        setFruits(fruits = "바나나")
    }
    return(
      <>
      <h1>당신은 어떤 과일을 좋아하나요?{fruits}</h1>
        <button onClick={selectApple}>
   		사과
        </button>
        <button onClick={selectOrange}>
        오렌지
        </button>
        <button onClick={selectBanana}>
        바나나
        </button>
        </>
    )
}