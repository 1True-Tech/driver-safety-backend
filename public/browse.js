function getDrivers() {
    const cityfield = document.getElementById("inputcity");

    const request = new XMLHttpRequest();
    const url = "/getdrivers?city=" + cityfield.value;

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            let resultcontainer = document.getElementById("searchresults");
            resultcontainer.innerHTML = "";

            if (response.Status === 404) {
                resultcontainer.innerText = "No drivers found.";
            }

            for(let i = 0; i < response.length; i++) {
                let usercard = document.createElement('div');
                let cardtext = document.createElement("p");
                let viewbutton = document.createElement("button");
                let image = document.createElement("img");
                usercard.setAttribute("class", "result");

                image.src = response[i].ImageURL;

                cardtext.innerHTML = 'Name: ' + response[i].FirstName + ' '+ response[i].LastName + '<br>' + response[i].Vehicle;

                viewbutton.setAttribute("onclick", "viewDriver('" + response[i].DriverID + "')");
                viewbutton.textContent = "View Driver";

                usercard.appendChild(image);
                usercard.appendChild(cardtext);

                usercard.appendChild(viewbutton);
                resultcontainer.appendChild(usercard);
                document.getElementById('maincontent').appendChild(resultcontainer);
            }
        }
    };
    request.open("GET", url, true);
    request.send(null);
}

function viewDriver(driverid) {
    window.location.href = 'http://localhost:5173/?driverid=' + driverid;
}