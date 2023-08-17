
/* Javascript for Open Core Website */

/* Product Order Form */

function beforeSubmit() {
	var firstName = document.getElementById("Subject");
	var lastName = document.getElementById("LastName");
	var body = document.getElementById("body");
	subject.value = firstName.value + ' ' + lastName.value;
	body.value = body.value + ' ' + product.value;
}