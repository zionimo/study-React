const HelloFuncComp = (props) => {
  const { name, address, children } = props;
  return <h1>{name} 화살표 함수로 만든 comp 입니다</h1>;
};

export default HelloFuncComp;
