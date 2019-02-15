
new Cleave("#quantity", {
    numeral: true,
    numeralDecimalMark: '',
    delimiter: ''
});

new Cleave('#price', {
    numeral: true,
    prefix: '$'
});

new Cleave("#expectedQuantity", {
    numeral: true,
    numeralDecimalMark: '',
    delimiter: ''
});

new Cleave("#alertOnQuantity", {
    numeral: true,
    numeralDecimalMark: '',
    delimiter: ''
});

new Cleave("#waiteTimeOnOrderHours", {
    numeral: true,
    numeralDecimalMark: '',
    delimiter: ''
});

new Cleave("#expirationDate", {
    date: true,
    datePattern: ['m', 'd', 'Y']
});
