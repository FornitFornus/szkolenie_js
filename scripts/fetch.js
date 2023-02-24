/* let data = [];

const getRandomUser = async () => {
	const data = await fetch('https://randomuser.me/api/');
	console.log('Dane: ', data.json());
};

getRandomUser();
 */

async function fetchRandomUser() {
	const response = await fetch('https://randomuser.me/api/');
	const data = await response.text();
	const convertJSON = JSON.parse(data);

	console.log(convertJSON.results[0]);
	return data;
}

fetchRandomUser();
