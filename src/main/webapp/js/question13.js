function showMessage() {
	let input = document.messageForm.message.value;
	if (input.length == 0) {
		alert("何も入力されていません");
	} else {
		alert("入力値：" + input);
	}
}