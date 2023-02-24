/*
This function display messages on console or alert window
Function arguments:
- message - String - content of message
- delay - Number - after what time to display a message (1000 = 1s)
- numberShow - Number - how many times to show message
- activeAlert - Boolean - true: display message in Alert window
                          false: display message in console
*/
function showMessage(message, delay, numberShow, activeAlert) {
	if (numberShow === 0) {
		if (activeAlert) {
			alert('Brak komunikatów do wyświetlenia');
		} else {
			console.log('Brak komunikatów do wyświetlenia');
		}
	} else {
		setTimeout(() => {
			if (activeAlert) {
				alert('Koniec');
			} else {
				console.log('Koniec');
			}
		}, delay * (numberShow + 1));
	}

	for (let i = 1; i < numberShow + 1; i++) {
		setTimeout(() => {
			if (activeAlert) {
				alert(`${message} ${i}`);
			} else {
				console.log(`${message} ${i}`);
			}
		}, delay * i);
	}
}

showMessage('Komunikat:', 3000, 5, false);
