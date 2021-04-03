// Pass Form data from form field and into GET request for API
function getNBAData() {
	// onclick, get the players name from the input field element
	let player = document.getElementById('key').value;

	// Pass the player variable into the API
	const data = {
		async: true,
		crossDomain: true,
		url: 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=' + player,
		method: 'GET',
		headers: {
			'x-rapidapi-key': config,
			'x-rapidapi-host': 'free-nba.p.rapidapi.com'
		}
	};
	$.ajax(data).done(function(response) {
		// Confirm data has been received
		console.log(response);

		// pass data into variable. Since the data we received was an object, we parse the object to target the array and pass the array to the variable
		// This new variable "dataArray" now has the data type of an array
		let dataArray = response.data;
		console.table(dataArray);

		// Pass the data into the div that we created in our html file dynamically
		// We will dynamically create a table with the new mapped data
		document.getElementById('data').innerHTML = dataArray.map(
			// (player) => `<div> name: ${player.first_name} ${player.last_name}</div>`
			(player) => `<div>
			<table>
			<tr>
			<th>Name</th>
			<th>Height</th>
			<th>Position</th>
			<th>Team</th>
			</tr>
			<td>
			${player.first_name} ${player.last_name}
			</td>
			<td> ${player.height_feet} ft, ${player.height_inches} in</td>
			<td> ${player.position}</td>
			<td> ${player.team.full_name}</td>
			</table></div>`
		);
	});

	// Map and show results and create buttons for each result
	let dataContainer = document.createElement('div');

	// Logic for when button is clicked/ another search is made, the page will refresh itself and show new results.
}
