/*
This function display messages on console or alert window
Function arguments:
- message - String - alias of message
- delay - Number - after what time to display a message (1000 = 1s)
- numberOfMessages - Number - how many messages to show 
- activeAlert - Boolean - true: display message in Alert window
                          false: display message in console
*/
function showMessage(message, delay, numberOfMessages, activeAlert) {
	const arrayOfMessages = [
		'Do startu!',
		'Gotowi!',
		'Start!',
		'Biegnij',
		'Biegnij Forest, biegnij',
	];

	if (numberOfMessages === 0) {
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
		}, delay * (numberOfMessages + 1));
	}

	for (let i = 0; i < numberOfMessages; i++) {
		if (numberOfMessages > arrayOfMessages.length) {
			if (activeAlert) {
				alert(
					'Zła mało komunikatów do wyświetlenia, sprawdź tablicę komunikatów'
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

showMessage('Komunikat:', 3000, 2, false);
