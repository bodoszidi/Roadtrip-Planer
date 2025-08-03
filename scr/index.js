function displayRoadtripPlan(response) {
    // response.data.answer
    new Typewriter("#roadtrip-planer", {
        strings: response.data.answer.trim().replace('```', '').replace('html', '').replace('```', ''),
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}



function roadtripGenerator(event) {
    event.preventDefault();
    document.getElementById("submit-button").setAttribute("disabled", true);

    let departure = document.querySelector("#departure");
    let destination = document.querySelector("#destination");
    let duration = document.querySelector("#duration");
    let apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
   let prompt = `
Plan a fun and inspiring road trip from ${departure.value} to ${destination.value} lasting ${duration.value} days. 
Include:
- Must-see stops along the route 
- Local tips and hidden gems 
- Where to stay overnight 
- Estimated daily costs with local currency 
- A mix of adventure and relaxation 
Use a cheerful tone, include emojis, and keep it short and structurize in lines to make it readable (under 15 lines). 
Make it easy to read and exciting for travelers!
- output in html format, so I can use it to render on the page. only use h2, h3, h4, p and ul list html elements.
`;
    let context =
       "You are a well-traveled road trip organizer with amazing insights and creative travel ideas, by showing ideal places to stay overnight, and local tips."
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let roadtirpPlanner = document.querySelector("#roadtrip-planer");      
    roadtirpPlanner.style.display = "block";

    axios.get(apiUrl)
        .then(displayRoadtripPlan)
        .finally(() => {
            document.getElementById("submit-button").removeAttribute("disabled");
        });

}

let roadtripFormElement = document.querySelector("#roadtrip-planer-form");
roadtripFormElement.addEventListener("submit", roadtripGenerator);



