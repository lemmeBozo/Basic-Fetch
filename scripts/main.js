
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json()) // gets the response to the fetch call 
                                         //and returns it as a json
    .then((data) => { // passes in data into the arrow function
     
        // Creates a container from which description list will be appended to
        const dList = document.createElement("dl");
        dList.classList.add("house-list");

        // for each house in data (house as in game of thrones house)
        data.forEach((house) => {
            let family = house.members.join(" | "); // convert each house into a string 
                                                    // where each name is seperated by |
                                                    // ex. Stark: Arya | John | etc....

            // Note I know using strings is easier I just don't like 
            // how its not explicitly stated that you are creating HTML elements
            const dTerm = document.createElement("dt");
            dTerm.classList.add("house");
            dTerm.innerHTML = house.name;

            const dDetails = document.createElement("dd");
            dDetails.classList.add("house-names");
            dDetails.innerHTML = family;

            dList.appendChild(dTerm);
            dList.appendChild(dDetails);
        });

        //make a reference to the html container where
        //the info will be displayed.
        //const container = document.querySelector("#container");
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(dList);
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process



function fetchRandomColor() {
    const url = "https://api.allorigins.win/raw?url=https://www.colr.org/json/color/latest";
    fetch(url) 
        .then((response) => {
            if (!response.ok) { // if response isn't ok throw error
                throw new Error("Error fetching random color");
            }
            return response.text(); // otherwise return the response as a json
        })
        .then ((data) => {
            console.log(data);
        })

}


fetchRandomColor();