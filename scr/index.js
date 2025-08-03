function displayRoadtripPlan(response) {
    // response.data.anwer
    new Typewriter("#roadtrip-planer", {
        strings: response.data.answer.trim(),
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
   let prompt = `
Plan a fun and inspiring road trip from ${departure.value} to ${destination.value} lasting ${duration.value} days. 
Include:
- Must-see stops along the route 🚗🗺️
- Local tips and hidden gems 🌟
- Where to stay overnight 🛌
- Estimated daily costs with local currency 💰
- A mix of adventure and relaxation 🏞️🌆
Use a cheerful tone, include emojis, and keep it short (under 15 lines). 
Make it easy to read and exciting for travelers!
`;
    let context =
       "You are a well-traveled road trip organizer with amazing insights and creative travel ideas, by showing ideal places to stay overnight, and local tips."
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let roadtirpPlanner = document.querySelector("#roadtrip-planer");      
    roadtirpPlanner.style.display = "block";
    roadtripPlanner.innerHTML = "Planning your dream road trip... ⏳";

    axios.get(apiUrl).then(displayRoadtripPlan);

}

let roadtripFormElement = document.querySelector("#roadtrip-planer-form");
roadtripFormElement.addEventListener("submit", roadtripGenerator);


