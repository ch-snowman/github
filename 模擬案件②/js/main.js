$('.customer-voice-slick').slick({  
    // autoplay: true, // 自動再生
    // autoplaySpeed: 2000, // 自動再生の速さ、単位はミリ秒
    // arrows: false, // 左右のナビゲーションを無効
    // dots: true, // ドットを表示
    // fade: true, // フェードで切り替え
    // slidesToShow:3,//一度に表示するスライドの数
    // responsive: [{
    //   breakpoint: 767,
    //   settings: {
    //     slidesToShow: 1, // 表示スライド数 1つ
    //   }
    // }
  });

  $(function () {
    // タイトルをクリックすると
    $(".js-accordion-title").on("click", function () {
      // クリックした次の要素(コンテンツ)を開閉
      $(this).next().slideToggle(300);
      // タイトルにopenクラスを付け外しして矢印の向きを変更
      $(this).toggleClass("open", 300);
    });
      $(".ac-child:not(:first-of-type)").css("display", "none");
  });