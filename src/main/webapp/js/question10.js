function stringCheck(value) {
		let result = 0;
		result = value.search(/^[0-9]+$/);
		if (result == -1) {
			return false;
		} else {
			return true;
		}
	}