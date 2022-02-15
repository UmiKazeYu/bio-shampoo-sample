/* global $ */

$('.fade-in-up').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },

  offset: '100%',
});

$('.fade-in-right').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '100%',
});

$('.fade-in-left').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '100%',
});

$('form').on('submit', function(e) {
  var name = $('#name').val();
  var nameFurigana = $('#name-furigana').val();
  var postCode = $('#post-code').val();
  var prefecture = $('#prefecture').val();
  var municipalities = $('#municipalities').val();
  var telephone = $('#telephone').val();
  var email = $('#email').val();
  var password = $('#password').val();
  
  var empty = "";
  var fullWidth = /^[^\x01-\x7E\xA1-\xDF]+$/;
  var numberLength = /^([0-9]{10,11})$/;
  var emailCheck = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  var passwordCheck = /^[0-9a-zA-Z]{4,}$/;
  var errorMessage = "";
  
  if (name == "") {
    e.preventDefault();
    errorMessage += "名前を入力してください<br>";
  }
  
  if (nameFurigana == "") {
    e.preventDefault();
    errorMessage += "フリガナを入力してください<br>";
  }
  
  if (postCode == "") {
    e.preventDefault();
    errorMessage += "郵便番号を入力してください<br>";
  }
  
  if (prefecture == null) {
    e.preventDefault();
    errorMessage += "都道府県を選択してください<br>";
  }

  if (!municipalities.match(fullWidth)) {
    e.preventDefault();
    // $('#error').html('市区町村は全角で入力してください');
    errorMessage += "市区町村は全角で入力してください<br>";
  }

  if (!telephone.match(numberLength)) {
    e.preventDefault();
    errorMessage += "電話番号は10桁か11桁で入力してください<br>";
  }
  
  if (!email.match(emailCheck)) {
    e.preventDefault();
    errorMessage += "有効なメールアドレスを入力してください<br>";
  }
  
  if (!password.match(passwordCheck)) {
    e.preventDefault();
    errorMessage += "パスワードは4文字以上の英数字で入力してください<br>";
  }
  
  if (!$("input:radio[name='payment']:checked").val()) {
    e.preventDefault();
    errorMessage += "お支払い方法を選択してください<br>";
}
  
  $('#error').html(errorMessage).removeClass('hidden');
});
