
var BaseAPI = function () {
  const _this = this;

  _this.getBaseAPI = function (queryURL, callBackFunction) {
    queryURL = _this.cleanSearchString(queryURL);

    $.ajax({
      url: queryURL,
      method: "Get"
    })
      .then(function (response) {
        console.debug("baseAPI and results:");
        console.debug(response);
        callBackFunction(response);
      }).catch(function (err) {
        console.debug(err.responseText);
      });
  }

  _this.postBaseAPI = function (queryURL, body, callBackFunction) {
    queryURL = _this.cleanSearchString(queryURL);
    _this.postPutBaseAPI(queryURL, body, callBackFunction, "Post")
  }

  _this.putBaseAPI = function (queryURL, body, callBackFunction) {
    queryURL = _this.cleanSearchString(queryURL);
    _this.postPutBaseAPI(queryURL, body, callBackFunction, "Put")
  }

  _this.postPutBaseAPI = function (queryURL, body, callBackFunction, method) {
    queryURL = _this.cleanSearchString(queryURL);

    $.ajax({
      url: queryURL,
      method: method,
      data: body
    })
      .then(function (response) {
        console.debug("baseAPI and results:");
        console.debug(response);
        callBackFunction(response);
      }).catch(function (err) {
        console.debug(err.responseText);
      });
  }

  _this.deleteBaseAPI = function (queryURL, callBackFunction) {
    queryURL = _this.cleanSearchString(queryURL);

    $.ajax({
      url: queryURL,
      method: "Delete"
    })
      .then(function (response) {
        console.debug("baseAPI and results:");
        console.debug(response);
        callBackFunction(response);
      }).catch(function (err) {
        console.debug(err.responseText);
      });
  }

  _this.cleanSearchString = function (str) {
    try {
      let returnWord = str.trim();
      returnWord = returnWord.replace(/ /g, "");
      return returnWord;
    } catch{
      return null;
    }
  }
};