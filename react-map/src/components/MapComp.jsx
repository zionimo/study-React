import { Component } from "react";

// 클래스형 컴포넌트
class MapComp extends Component {
  constructor(props) {
    super(props);
    // 배열의 map을 통해서 반복 컴포넌트 작성
    this.state = {
      season: ["봄", "여름", "가을", "다른계절"],
      book: [
        {
          title: "홍길동전",
          page: 100,
          author: "허균",
          pay: 8000,
          number: "abcd1111",
        },
      ],
      inputContent: {
        title: "",
        author: "",
        number: "",
      },
    };
    this.onchange = (e) => {
      // this.state.inputContent의 값이 객체이므로 안의 속성을 유지하기위해 ... 연산자사용
      const newContent = {
        ...this.state.inputContent,
        [e.target.name]: e.target.value,
      };
      this.setState({ inputContent: newContent });
    };
    this.getBook = (e) => {
      console.log("확인");
      e.preventDefault();
      // 작성된 inputContent를 state.book 배열에 추가
      const newBook = this.state.book.concat(this.state.inputContent);
      this.setState({ book: newBook });
    };
  }
  render() {
    const { season, book } = this.state;
    // state에 있는 season 배열을
    // map을 통해 태그안에 값을 넣어서 사용
    const seasonItem = season.map((season, index) => <li key={index}>{season}</li>);
    const bookItem = book.map((book, index) => (
      // book.title을 클릭하면 삭제할수 있도록 내용 추가
      <li
        key={book.number}
        onClick={() => {
          const newBook = this.state.book.filter((b) => b.number != book.number);
          this.setState({ book: newBook });
        }}
      >
        {book.title}
      </li>
    ));
    return (
      <div>
        <ul>
          {season.map((season, index) => (
            // 여러줄로 작성할때 소괄호로 감싸서 작성
            <li key={index}>
              <a href="#">{season}</a>
            </li>
          ))}
        </ul>
        {/** 책 이름을 추가하는 input을 작성하고 submit버튼을 누르면  */}
        {/** this.state.book에 추가될수 있도록 작성 */}
        {/** 각각의 값들이 저장될 변수공간을 만들어서 사용, 태그속성추가가능 */}
        <form onSubmit={this.getBook}>
          <label htmlFor="">책이름</label>
          <input type="text" name="title" onChange={this.onchange} />
          <label htmlFor="">저자</label>
          <input type="text" name="author" onChange={this.onchange} />
          <label htmlFor="">책넘버</label>
          <input type="text" name="number" onChange={this.onchange} />
          <input type="submit" value="제출" />
        </form>
        <ol>{bookItem}</ol>
      </div>
    );
  }
}

export default MapComp;
