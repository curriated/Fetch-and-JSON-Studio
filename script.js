window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((json) => {
            const astronautArray = json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace });
            const container = document.getElementById("container");
            const totalAstronauts = astronautArray.length;
            container.innerHTML = `<h2> Wow! That's a lot of astronauts! ${totalAstronauts} </h2>`
            for (let i = 0; i < astronautArray.length; i++) {
                const color = astronautArray[i].active ? 'green' : 'black';
            // let color = "black";
            // if (astronautArray[i].active) {
            //     color = "green";
            // };
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronautArray[i].firstName} ${astronautArray[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronautArray[i].hoursInSpace}</li>
                                <li style = "color:${color}">Active: ${astronautArray[i].active}</li>
                                <li>Skills: ${astronautArray[i].skills}</li>
                            </ul>
                        </div>
                    <img class="avatar" src="${astronautArray[i].picture}">
                </div> `;            
            }
        });


    })
})