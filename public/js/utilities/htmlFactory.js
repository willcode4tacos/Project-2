
var HtmlFactory = function () {

    const _this=this;

    _this.createCardByArrayOfJson = function (parentDiv, cardArrayOfJson) {
        let elementDiv = $("<div>");
        elementDiv.addClass("card");
        _this.createByArrayOfJson(elementDiv, cardArrayOfJson);
        $(parentDiv).append(elementDiv);

    }

    _this.createByArrayOfJson = function (parentDiv, cardArrayOfJson) {
        cardArrayOfJson.forEach(element => {
            _this.createSubElement(parentDiv, element);
        });

    }

    _this.createSubElement = function (parentDiv, jsonElement) {

        let elementDivType = _this.getJsonProperty(jsonElement, "div");
        let elementText = _this.getJsonProperty(jsonElement, "text");
        let elementArrayAttr = _this.getJsonProperty(jsonElement, "attrs");
        let elementChildren = _this.getJsonProperty(jsonElement, "children");

        let elementDiv = $(elementDivType);
        elementDiv.text(elementText);
        $.each(elementArrayAttr, function (key, value) {
            elementDiv.attr(key, value);
        });

        if (elementChildren !== null) {
            _this.createByArrayOfJson(elementDiv, elementChildren)
        }

        $(parentDiv).append(elementDiv);
    }

    _this.getJsonProperty = function (json, prop) {
        return json[prop] || null;
    },

    _this.htmlBasicPartial = function (div, text, divClass) {
        return {
            "div": div,
            "text": text,
            "attrs": {
                "class": divClass
            }
        }
    }
};

