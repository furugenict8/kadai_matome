// メモ　画像を配列に入れとく必要があるのかな。　0525

// 初期処理（画面を開いたとき）
$(function() {

  // picture_array 写真の配列
  var picture_array = [];
  picture_array = $('img').attr('id');
  console.log(picture_array);

  // チェックボックスをチェックしたら発動
  $('input').change(function() {

    // もしチェックが入ったら
    if($(this).prop('checked')){
      // 画像を出力
      $('#doritos').show(3000);
    }else{
      // 画像を消去
      $('#doritos').hide(3000);
    }

    //
    // if($(this).prop('checked')){
    //
    //   // snack_name チェックボックスの名前
    //   var snack_name = $(this).attr('value');
    //   console.log(snack_name);


      // if文の条件式に
      // if(snack_name == picture_array){
      //
      //   // idが変数picture_name の画像を出力
      //   $('#' + picture_name).show(3000);
    //   // }
    // }else{
    //   // 画像を消去
    //   $('#' + picture_array).hide(3000);
    // }

  });
});
