// username이라는 클래스를 가진 요소 (아이디 입력: input요소)
const inputId = document.querySelector(".username");
// success-message이라는 클래스를 가진 요소 (성공메시지: div요소)
const idSuccessMessage = document.querySelector(".success-message");
// failure-message이라는 클래스를 가진 요소 (실패메시지: div요소)
const idFailureMessage = document.querySelector(".failure-message");

// 아이디를 검사하는 함수 : 이 함수의 리턴에 의해 이벤트리스너 내부의 로직이 결정된다.
function validateUsername(username) {
  /* 아이디의 길이: 8글자 이상, 12글자 이하
  영문과 숫자가 포함될 수 있습니다.
  첫 글자는 반드시 영문이어야 합니다.
  대소문자 구분은 없습니다. */
  if (
    username.length < 8 ||
    username.length > 12 ||
    !/^[a-zA-Z]/.test(username) ||
    !/^[a-zA-Z0-9]*$/.test(username)
  ) {
    return false;
  }
  return true;
}

// 만약에, validateUsername함수에 input에 입력된 value를 넣었을 때 true이면 성공 메시지가 보여야 함.
// 그렇지 않으면 실패 메시지가 노출되게 해야 합니다.
inputId.addEventListener("keyup", (event) => {
  // 변수 value는 event가 일어나고 있는 target에 입력된 값,
  // 즉, inputId에 입력된 값이 할당되었습니다.
  // 여기서 event는 이벤트 리스너 사용시 자동으로 형성되는 event객체이며, target에 대한 정보를 가지고 있습니다.
  // 정리하자면, value에 할당된 event.target.value는 타겟에 입력되어 있는 값을 의미합니다.
  const value = event.target.value;
  if (!validateUsername(value)) {
    // 만약 함수 validateUsername에 value를 전달했을 때 false이면,
    // 성공메시지는 감추고(hide 클래스 추가), 실패메시지 노출(hide 클래스 제거)
    idSuccessMessage.classList.add("hide");
    idFailureMessage.classList.remove("hide");
  } else {
    // 만약 함수 validateUsername에 value를 전달했을 때 true이면,
    // 실패메시지는 감추고(hide 클래스 추가), 성공메시지 노출(hide 클래스 제거)
    idSuccessMessage.classList.remove("hide");
    idFailureMessage.classList.add("hide");
  }
});
