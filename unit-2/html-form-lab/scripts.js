const submitFormHandler = (evt) => {
	evt.preventDefault();
	console.log(evt.target);
	console.log(evt.target.password.value);
	console.log(evt.target.confirmPassword.value);
	console.log(evt.target.emailUpdates.checked);
	if (evt.target.password.value !== evt.target.confirmPassword.value) {
		alert("Passwords dont match!");
		return false;
	}
};

// Event Listener
document
	.querySelector(".signup-form")
	.addEventListener("submit", submitFormHandler);
