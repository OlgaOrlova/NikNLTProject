var extraField = [];

var result = [];

function addButton() {
	var mainContent = document.getElementById("mainContent");
	var textBlock = document.createElement("input");
	var newString = document.createElement("p");
	textBlock.id = "newTextBlock";
	extraField.push(textBlock);
	newString.appendChild(textBlock);
	mainContent.appendChild(newString);
}

function obtainFieldsData() {
	var questionField = document.getElementById("mainTextBox");
	var question = questionField.value;
	var anawer1 = document.getElementById("textBox1").value;
	var anawer2 = document.getElementById("textBox2").value;
	var anawer3 = document.getElementById("textBox3").value;
	var extraAnswers = [];
	extraField.forEach(function (inputField) {
		extraAnswers.push(inputField.value);
	});
	var g = "<p>" + question + anawer1 + anawer2 + anawer3;
	extraAnswers.forEach(function (text) {
		g += text;
	})
	document.getElementById("content").innerHTML = g;
	var test = new Object();
	test.question = question;
	test.answers=[anawer1, anawer2, anawer3];


	extraAnswers.forEach(function (text) {
		test.answers.push(text);
	})
	return test;
}
function clearFields(){
	document.getElementById("mainTextBox").value = "";
	document.getElementById("textBox1").value="";
    document.getElementById("textBox2").value="";
	document.getElementById("textBox3").value="";

	extraField.forEach(function(inputField){
		inputField.value = "";
	})
}

function addTest(){

	var item = obtainFieldsData();
	result.push(item);
	clearFields();
}

function finish(){
	var str = [];
	result.forEach(function(element){

		str.push(JSON.stringify(element));
	})
	str.join("\",\"");
		document.getElementById("content").innerHTML = "[" + str + "]";

}
