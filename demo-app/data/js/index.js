 $('body').attr("spellcheck",false)

 
var json = null;
$.ajax({
    'async': false,
    'global': false,
//    'url': "https://raw.githubusercontent.com/aot-demo/demo/master/demo-app/data/test-data.json",
    'url': "http://bigpharm-drug-fuse.cloudapps.rhdemo.io/bigPharm/drug/all",
    'dataType': "json",
    'success': function (data) {
        json = data;
    }
});
//

$(document).ready(function () {
	
	

	
	 
	
	  
    $('#results').html(CreateDetailView(json));
});

 
function CreateTableView(objArray, theme, enableHeader) {
     
 
    if (enableHeader === undefined) {
        enableHeader = true; //default enable headers
    }
 
    // If the returned data is an object do nothing, else try to parse
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : new Array(objArray);
    var keys = Object.keys(array[0]);
 
    var str = '<table>';
 
    // table head
    if (enableHeader) {
        str += '<thead><tr>';
        for (var index in keys) {
            str += '<th scope="col">' + keys[index] + '</th>';
        }
        str += '</tr></thead>';
    }
 
    // table body
    str += '<tbody>';
    for (var i = 0; i < array.length; i++) {
        str += (i % 2 == 0) ? '<tr  >' : '<tr>';
        for (var index in keys) {
            var objValue = array[i][keys[index]];
 
            // Support for Nested Tables
            if (typeof objValue === 'object' && objValue !== null) {
                if (Array.isArray(objValue)) {
                    str += '<td contenteditable="true">';
                    for (var aindex in objValue) {
                        str += CreateTableView(objValue[aindex], theme, true);
                    }
                    str += '</td>';
                } else {
                    str += '<td contenteditable="true">' + CreateTableView(objValue, theme, true) + '</td>';
                }
            } else {
                str += '<td contenteditable="true">' + objValue + '</td>';
            }
 
        }
        str += '</tr>';
    }
    str += '</tbody>'
    str += '</table>';
 
    return str;
}
  
function CreateDetailView(objArray, theme, enableHeader) {
    // set optional theme parameter
    if (theme === undefined) {
        theme = '';  //default theme
    }
 
    if (enableHeader === undefined) {
        enableHeader = true; //default enable headers
    }
 
    // If the returned data is an object do nothing, else try to parse
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : new Array(objArray);
    var keys = Object.keys(array[0]);
 
    var str = '<table class="' + theme + '">';
    str += '<tbody>';
 
 
    for (var i = 0; i < array.length; i++) {
        var row = 0;
        for (var index in keys) {
            var objValue = array[i][keys[index]]
 
            str += (row % 2 == 0) ? '<tr class="alt">' : '<tr>';
 
            if (enableHeader) {
                str += '<th scope="row">' + keys[index] + '</th>';
            }
 
            // Support for Nested Tables
            if (typeof objValue === 'object' && objValue !== null) {
                if (Array.isArray(objValue)) {
                    str += '<td contenteditable="true">';
                    for (var aindex in objValue) {
                        str += CreateDetailView(objValue[aindex], theme, true);
                    }
                    str += '</td>';
                } else {
                    str += '<td  contenteditable="true">' + CreateDetailView(objValue, theme, true) + '</td>';
                }
            } else {
                str += '<td  contenteditable="true">' + objValue + '</td>';
            }
 
            str += '</tr>';
            row++;
        }
    }
    str += '</tbody>'
    str += '</table>';
    return str;
}