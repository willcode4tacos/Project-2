$(document).ready(function () {

    const baseAPI = new BaseAPI();
    const tableFunctions = new TableFunctions();
    const htmlBasicPartial = tableFunctions.htmlFactory.htmlBasicPartial;
    baseAPI.getBaseAPI("/api/v1/items/low", populateLowItemsTable);

    function populateLowItemsTable(records){
        console.debug(arguments.callee.name);
        tableFunctions.populateTable(records, buildLowItemsHtmlJson);
    }
    
    function buildLowItemsHtmlJson(snapshot) {
        let exDate = "";
        if (snapshot["expirationDate"] !== null){
            exDate=snapshot["expirationDate"].substring(0,10);
        }
        return htmlJson = [
            htmlBasicPartial("<td>", snapshot["name"], "name"),
            htmlBasicPartial("<td>", snapshot["sku"], "sku"),
            htmlBasicPartial("<td>", snapshot["price"], "price"),
            htmlBasicPartial("<td>", snapshot["category"], "category"),
            htmlBasicPartial("<td>", snapshot["quantity"], "quantity"),
            htmlBasicPartial("<td>", exDate, "expirationDate"),
            htmlBasicPartial("<Button>", "Edit", "btn btn-primary editBtn"),
            htmlBasicPartial("<Button>", "X", "btn btn-primary deleteBtn")
        ];
    }
});



