var TableFunctions = function () {

    const _this = this;
    _this.htmlFactory = new HtmlFactory();
    _this.baseAPI = new BaseAPI();

    _this.populateTable = function(records, customTableBuildFunction) {
        console.debug(arguments.callee.name);

        records.sort(_this.sort_by('name', true, function (a) { return a.toUpperCase() }));
        records.forEach(record => {
            _this.buildTableRecordJson(record, record["uuid"], customTableBuildFunction);
        });
    }

    _this.sort_by = function (field, reverse, primer) {
        var key = primer ?
            function (x) { return primer(x[field]) } :
            function (x) { return x[field] };
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    }

    _this.buildTableRecordJson = function (snapshot, key, customTableBuildFunction) {
        var trDiv = $("<tr>");
        trDiv.attr("id", key)
        let jsonElements = customTableBuildFunction(snapshot);
        _this.htmlFactory.createByArrayOfJson(trDiv, jsonElements);
        $("#results").append(trDiv);
    }

    _this.deleteRecord = function (uuid){
        _this.baseAPI.deleteBaseAPI(`/api/v1/items/${uuid}`, function (results){
            console.debug(results);
        });
        $("#" + uuid).remove();
    }

};

