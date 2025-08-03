function displayRoadtripPlan(response) {
    // response.data.anwer
    new Typewriter("#roadtrip-planer", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}

function roadtripGenerator(event) {
    event.preventDefault();

    let departure = document.querySelector("#departure");
    let destination = document.querySelector("#destination");
    let duration = document.querySelector("#duration");
    let apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
    let prompt = `When given the city (${departure.value}) and the destination (${destination.value}), along with the days (${duration.value}). Create the best road trip plan with some emojies. Include a suggested route with must-see stops and prices with local currency adding the estimated costs in the end of each days. The final output should be a short, less than 15 lines, easy-to-read travel plan that feels fun and inspiring for travelers who want a mix of adventure and relaxation.`;
    let context =
       "You are a well-traveled road trip organizer with amazing insights and creative travel ideas, by showing ideal places to stay overnight, and local tips."
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let roadtirpPlanner = document.querySelector("#roadtrip-planer");      
    roadtirpPlanner.style.display = "block";

    axios.get(apiUrl).then(displayRoadtripPlan);

}

let roadtripFormElement = document.querySelector("#roadtrip-planer-form");
roadtripFormElement.addEventListener("submit", roadtripGenerator);


