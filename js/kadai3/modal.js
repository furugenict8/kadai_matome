$(function(){
    // ボタンをクリックしたとき、外部ファイルを読み込む
    $('.file-read-btn-1').on('click', function() {
        // ここにajaxの処理を記述する
        $.ajax({
          url　: 'modal1.html',
          dataType : 'html',
          success　: function(data){
              $('#text').html(data);//A
              showModalWindow();
              
          },
          error: function(data){
              $('#text').html(data);//A
          }
      });
    });

    $('.file-read-btn-2').on('click', function() {
        // ここにajaxの処理を記述する
        $.ajax({
          url　: 'modal2.html',
          dataType : 'html',
          success　: function(data){
              $('#text').html(data);//A
              showModalWindow();
          },
          error: function(data){
              $('#text').html(data);//A
          }
      });
    });

    function showModalWindow(){

      //キーボード操作などにより、オーバーレイが多重起動するのを防止する
      $( this ).blur() ;	//ボタンからフォーカスを外す
      if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
      //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

      //オーバーレイを出現させる
      $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
      $( "#modal-overlay" ).fadeIn( "slow" ) ;

      //コンテンツをセンタリングする
      centeringModalSyncer() ;

      //コンテンツをフェードインする
      $( "#modal-wrap" ).fadeIn( "slow" ) ;

      //[#modal-overlay]、または[#modal-close]をクリックしたら…
      $( "#modal-overlay,#close-btn" ).unbind().click( function(){

        //[#modal-wrap]と[#modal-overlay]をフェードアウトした後に…
        $( "#modal-wrap,#modal-overlay" ).fadeOut( "slow" , function(){

          //[#modal-overlay]を削除する
          $('#modal-overlay').remove() ;

        } ) ;

      } ) ;

      //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
      $( window ).resize( centeringModalSyncer ) ;

        //センタリングを実行する関数
        function centeringModalSyncer() {

          //画面(ウィンドウ)の幅、高さを取得
          var w = $( window ).width() ;
          var h = $( window ).height() ;

          // コンテンツ(#modal-wrap)の幅、高さを取得
          // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
          //		var cw = $( "#modal-wrap" ).outerWidth( {margin:true} );
          //		var ch = $( "#modal-wrap" ).outerHeight( {margin:true} );
          var cw = $( "#modal-wrap" ).outerWidth();
          var ch = $( "#modal-wrap" ).outerHeight();

          //センタリングを実行する
          $( "#modal-wrap" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

        }
    }
});
