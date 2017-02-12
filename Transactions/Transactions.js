  
$(document).ready(function(){ 

$("#add").click(function() {
  $(".transactionsTable").addClass("disappear");
  $(".add_transaction").toggle();
  $(".horizontalDiv").toggle();
  $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_add").toggle();
  $("#cancel_button_for_add").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").addClass("addon");
});

$("#save_button_for_add").click(function() {
  $(".add_transaction").toggle();
  $(".transactionsTable").removeClass("disappear");
  $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_add").toggle();
  $("#cancel_button_for_add").toggle();
  $(".horizontalDiv").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").removeClass("addon");
});

$("#cancel_button_for_add").click(function() {
  $(".add_transaction").toggle();
  $(".transactionsTable").toggleClass("disappear");
  $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_add").toggle();
  $("#cancel_button_for_add").toggle();
  $(".horizontalDiv").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").removeClass("addon");
});

$("#edit").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
  $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_edit").toggle();
  $("#cancel_button_for_edit").toggle();

});

$("#save_button_for_edit").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
  $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_edit").toggle();
  $("#cancel_button_for_edit").toggle();

});

$("#cancel_button_for_edit").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
    $("#add").toggle();
  $("#edit").toggle();
  $("#save_button_for_edit").toggle();
  $("#cancel_button_for_edit").toggle();

});

$("#mainDiv").scrollTop(1).scrollTop(0);

});

