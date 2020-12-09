$(document).ready(function(){
	$(".calculatorKeys").click(function(){
		var num1 = Number($("#firstNumber").val());
		var sign = $("#sign").val();
		var num2 = Number($("#secondNumber").val());
		if (sign == "+"){
			var result = addition(num1, num2);
			$("#result").text(result);
		}
		else if (sign == "-"){
			var result = subtraction(num1, num2);
			$("#result").text(result);
		}
		else if (sign == "*"){
			var result = multiplication(num1, num2);
			$("#result").text(result);
		}
		else if (sign == "/"){
			var result = division(num1, num2);
			$("#result").text(result);
		}	
		else if (sign == "%"){
			var result = modular(num1, num2);
			$("#result").text(result);
		}	
	});
});
function addition(num1, num2){
	return num1 + num2;
}
function subtraction(num1,num2){
	return num1 - num2;
}
function multiplication(num1, num2){
	return num1 * num2;
}
function division(num1, num2){
	return num1 / num2;
}
function modular (num1, num2){
	return num1 % num2;
}
