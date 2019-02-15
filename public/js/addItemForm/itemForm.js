
var ItemForm = function (){

    const _this = this;
    const baseAPI = new BaseAPI();
    
    _this.submitFormToDB = function () {
        console.debug(arguments.callee.name);
    
        let inputs = _this.getInputsFromForm();
    
        if (_this.isValidInput(inputs)) {
            baseAPI.postBaseAPI("/api/v1/items", inputs, _this.nextStep);
        }
    };

    _this.updateFormToDB = function () {
        console.debug(arguments.callee.name);
    
        let inputs = _this.getInputsFromForm();
    
        if (_this.isValidInput(inputs)) {
            baseAPI.putBaseAPI("/api/v1/items", inputs, _this.nextStep);
        }
    };
    
    _this.getInputsFromForm = function (){
        let tempVal = $("#waiteTimeOnOrderHours").val();
        if ($("#waiteTimeOnOrderHours").val() === ""){
            $("#waiteTimeOnOrderHours").val(0)
        }
        return inputs = {
            uuid: $("#uuid").attr("value"),
            name: $("#itemName").val(),
            sku: $("#sku").val(),
            price: $("#price").val().substring(1),
            category: $("#category").val(),
            description: $("#description").val(),
            quantity: $("#quantity").val(),
            expectedQuantity: $("#expectedQuantity").val(),
            alertOnQuantity: $("#alertOnQuantity").val(),
            waiteTimeOnOrderHours: $("#waiteTimeOnOrderHours").val(),
            expirationDate: $("#expirationDate").val()
        };
    };
    
    _this.isValidInput = function (inputs){
        if (inputs.name === ""
        || inputs.quantity === "")
            return false;
        return true;
    };
    
    _this.nextStep = function(){
        $("#finishedAddUpdate").text("Item Submitted!");
    };
};
