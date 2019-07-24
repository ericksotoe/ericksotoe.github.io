function postContact(){
  window.alert("entered postContact method");
  $.ajax({
    url: "/mail/contact_me.php",
    type: "post",
    data: {
        name: $("#nameContact").val(),
        email: $("#emailContact").val(),
        phone: $("#phoneContact").val(),
        message: $("#messageContact").val(),
    },
    success: function (data) {
        window.alert("Post Success!");
        window.location.reload();
    }
 });
}