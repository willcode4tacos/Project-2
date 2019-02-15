$(document).ready(function () {

    const itemForm = new ItemForm();
    $("FinishedAddUpdate").text("");
  
    
    $(document).on("click", "#submitBtn", function () {
      itemForm.submitFormToDB();
      $("#submitBtn").hide();
    });
    
    $(document).on("click", "#updateBtn", function () {
      itemForm.updateFormToDB();
      $("#updateBtn").hide();
    });
    
  });