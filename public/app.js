'use strict';

var xmasArea = document.getElementById('resultArea');
var searchArea = document.getElementById('searchArea');
var nameArray = [];
var xmasButton = function xmasButton(name) {
    name = document.getElementById("xmasArea").value;
    if (name !== "") {

        nameArray.push(name);
        document.getElementById("resultArea").innerHTML = 'Bonjour ' + name + ' !';
        console.log(nameArray);
    } else {
        console.log("Bonjour Père Noël !");
        document.getElementById("resultArea").innerHTML = "Bonjour Père Noël !";
    }
};

var searchButton = function searchButton() {
    result = document.getElementById('searchArea').value;
    nameArray.map(function (x) {
        if (x == x) {
            console.log('test');
        }
    });
};
