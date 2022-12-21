// prettier-ignore
// 문제 1번_ajax 연결
$.get("../data/store.json")
.done(function (data) {
  //console.log(data.products[0].title)
  data.products.forEach(function(item,idx){
   let plus = `<div class="col-md-3">
    <img src="../images/${item.photo}" />
    <h4>${item.title}</h4>
    <p>${item.brand}</p>
    <p>가격 :${item.price}</p>
  </div>`
  $('.product-list').append(plus)
  })
  $('#search').change(function(e){
    //console.log(e.target.value); input에 입력한 값 출력
    // 문제 발생 상품명을 끝까지 써야 같다고 인정해줌;;;
    let inputText = e.target.value;
    for (let i = 0; i < inputText.length; i++) {
      console.log(inputText.charAt(i));
    }
    // console.log(inputText[0])
    // console.log(inputText[1])
    // console.log(inputText[2])
    // console.log(inputText[3])
    // console.log(inputText[4])

    if(inputText.val==='undefined'){
      console.log('X')
    } else{
      console.log("있어")

    }

  })
})
.fail(function(data){
  console.log("연결실패");

})
//문제 2번 상품검색
