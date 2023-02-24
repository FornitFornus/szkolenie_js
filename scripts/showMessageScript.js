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
	const arrayOfMessages = [
		'Do startu!',
		'Gotowi!',
		'Start!',
		'Biegnij',
		'Biegnij Forest, biegnij',
	];

	if (numberShow === 0) {
		if (activeAlert) {
			alert(
				'Brak komunikatów do wyświetlenia lub jest ich za mało, sprawdź tablicę komunikatów'
			);
		} else {
			console.log(
				'Brak komunikatów do wyświetlenia lub jest ich za mało, sprawdź tablicę komunikatów'
			);
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

	for (let i = 0; i < numberShow; i++) {
		if (numberShow > arrayOfMessages.length) {
			if (activeAlert) {
				alert(
					'Za mało komunikatów do wyświetlenia, sprawdź tablicę komunikatów'
				);
			} else {
				console.log(
					'Za mało komunikatów do wyświetlenia, sprawdź tablicę komunikatów'
				);
			}
			break;
		}

		setTimeout(() => {
			if (activeAlert) {
				alert(`${message} ${arrayOfMessages[i]}`);
			} else {
				console.log(`${message} ${arrayOfMessages[i]}`);
			}
		}, delay * i);
	}
}

showMessage('Komunikat:', 3000, 5, false);
