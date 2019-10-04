'use strict'

$(document).ready(function() {
  $('#convertCSV').click(function() {
    var csvData = $('#csvData').val();
    var jsonData = CSVToJSON(csvData);
    $('#jsonData').val(jsonData);
  });
});

function CSVToJSON(csvData) {
  var data = CSVToArray(csvData);
  var objData = [];
  for (var i = 1; i < data.length; i++) {
    objData[i - 1] = {};
    for (var k = 0; k < data[0].length && k < data[i].length; k++) {
      var key = data[0][k];
      objData[i - 1][key] = data[i][k];
    }
  }
  var jsonData = JSON.stringify(objData);
  jsonData = jsonData.replace(/},/g, '},\r\n');
  return jsonData;
}

function CSVToArray(csvData, delimiter) {
  delimiter = (delimiter || ',');
  var pattern = new RegExp((
    '(\\' + delimiter + '|\\r?\\n|\\r|^)' +
    '(?:"([^"]*(?:""[^"]*)*)"|' +
    '([^"\\' + delimiter + '\\r\\n]*))'), 'gi');
  var data = [[]];
  var matches = null;
  while (matches = pattern.exec(csvData)) {
    var matchedDelimiter = matches[1];
    if (matchedDelimiter.length && (matchedDelimiter != delimiter)) {
      data.push([]);
    }
    if (matches[2]) {
      var matchedDelimiter = matches[2].replace(
        new RegExp('""', 'g'), '"');
    } else {
      var matchedDelimiter = matches[3];
    }
    data[data.length - 1].push(matchedDelimiter);
  }
  return (data);
}

// id,first_name,last_name,age,gender,country
// 1,Janifer,Figgins,45,Female,Britain
// 2,Susi,Gerhold,43,Female,Canada
// 3,Laina,Muirden,34,Female,India
// 4,Maurise,Warters,56,Male,China
// 5,Malynda,Isaksen,24,Female,Nepal

// [{"id":"1","first_name":"Janifer","last_name":"Figgins","age":"45","gender":"Female","country ":"Britain"},
// {"id":"2","first_name":"Susi","last_name":"Gerhold","age":"43","gender":"Female","country ":"Canada"},
// {"id":"3","first_name":"Laina","last_name":"Muirden","age":"34","gender":"Female","country ":"India"},
// {"id":"4","first_name":"Maurise","last_name":"Warters","age":"56","gender":"Male","country ":"China"},
// {"id":"5","first_name":"Malynda","last_name":"Isaksen","age":"24","gender":"Female","country ":"Nepal"}]
