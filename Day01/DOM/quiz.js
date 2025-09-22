// 유저에게 태그와 내용을 프롬프트 한번에 입력받고
// 올바른 태그를 넣으면 태그와 내용 만들기
// ex) div 김치찌개 -> <div>김치찌개</div>

// const [tag, contents] = prompt("태그와 내용 입력해줘").split(" "); //button 아몰랑
// const newTag = document.createElement(tag);
// newTag.innerText = contents;
// document.body.appendChild(newTag);

// 유저에게 내용을 프롬프트 한번에 입력받고
// 띄어쓰기 기준으로 해서 내용들을
// button 태그로 만들어서 나타내기
// ex) 김치 순대 떡볶이 사탕 => 4개버튼 생성됨

const contents = prompt("내용 입력").split(" "); //[김치,순대,떡볶이,부대찌개,]

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
