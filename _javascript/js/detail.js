// 버튼0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// - div0 show 클래스명 추가

//prettier-ignore
const tabButton = $('.tab-button')
const tabContent = $(".tab-content");

// 남들 몰래 설정한 데이터 값 읽어오고 싶을 때
const a = document.querySelector(".tab-button").dataset.id;
console.log(a);

// for (let i = 0; i < tabButton.length; i++) {
//   tabButton.eq(i).on("click", function () {
//     open(i);
//   });
// }

// 이벤트 버블링을 막으면서 탭 만드는 방법
$(".list").on("click", function (e) {
  open(parseInt(e.target.dataset.id));
});

function open(i) {
  tabButton.removeClass("orange");
  tabButton.eq(i).addClass("orange");
  tabContent.removeClass("show");
  tabContent.eq(i).addClass("show");
}
