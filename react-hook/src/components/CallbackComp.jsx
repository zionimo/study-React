import { useCallback } from "react";
import { useState } from "react";

// 함수형 컴포넌트
const CallbackComp = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  // useCallback : 함수를 기록해서 계속 쓰는 hook
  // 두번째 인자[] : 두번째인자의 값이 바뀔때만, 함수를 새로 생성해서 사용

  // 익명함수의 특징 : 한 번만 쓰고 사라진다.
  // function 함수이름(){}, const 함수이름 = ()=>{}
  //  : 함수이름을 통해 여러번 꺼내쓸수있다
  const changeName = useCallback(() => {
    setName("홍길동");
  }, []);

  // []의  인자 값이 바뀔때, 안의 콜백함수가 새로 만들어져서 사용될수있다.
  const onchange = useCallback(
    (e) => {
      console.log(count);
      setName(e.target.value);
      setCount(count + 1);
    },
    [count]
  );

  return (
    <div>
      <input type="text" onChange={onchange} />
      <button onClick={changeName}>이름:{name}</button>
    </div>
  );
};

export default CallbackComp;
