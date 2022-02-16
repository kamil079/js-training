let tableBody = document.querySelector("tbody");
let btn = document.querySelector(".btn");
let teamFirstVal = document.querySelector("#team1");
let teamSecontVal = document.querySelector("#team2");
let pointsFirstVal = document.querySelector("#points1");
let pointsSecondVal = document.querySelector("#points2");

btn.addEventListener("click", addToTable);

function addToTable(e) {
    e.preventDefault();

    let trEl = document.createElement("tr");

    if (teamFirstVal.value !== teamSecontVal.value) {
        let tdTeamSt = document.createElement("td");
        let tdTeamNd = document.createElement("td");
        tdTeamSt.innerText = teamFirstVal.value;
        tdTeamNd.innerText = teamSecontVal.value;
        trEl.append(tdTeamSt);
        trEl.append(tdTeamNd);
    } else {
        alert("Drużyny muszą być różne!");
    }

    if (pointsFirstVal.value > 0 && pointsSecondVal.value > 0) {
        let tdTeamPoints = document.createElement("td");
        tdTeamPoints.append(
            `${pointsFirstVal.value} - ${pointsSecondVal.value}`
        );
        trEl.append(tdTeamPoints);

        tableBody.append(trEl);
    } else {
        alert("Bramki nie mogą być ujemne!");
    }
    // tableBody.append(trEl);
}
