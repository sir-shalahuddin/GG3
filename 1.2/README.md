Lets assume that we have a Track schema with this format 
{ title: "song tittle", artists:[{name: "artist name 1"}],duration:200}

Create a function that :
1. Create a Mock API response with promise that returns the Track after 2 second.
2. Print an error message if the promise rejected.
3. Print the track if the promise is fulfilled

In 2 Version (Promise and async/await)

Bonus: Update the promise so that it fail at 20% chance