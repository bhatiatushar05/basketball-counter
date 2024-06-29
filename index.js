let team1 = document.getElementById("team1")
let team2 = document.getElementById("team2")
let count = 0
function add1(teamId) {
    if (teamId === "team1") {
        count += 1;
        document.getElementById(teamId).textContent = count;
    } else if (teamId === "team2") {
        count += 1;
        document.getElementById(teamId).textContent = count;
    }
}
function add2(teamId) {
    if (teamId === "team1") {
        count += 2;
        document.getElementById(teamId).textContent = count;
    } else if (teamId === "team2") {
        count += 2;
        document.getElementById(teamId).textContent = count;
    }
}
function add3(teamId) {
    if (teamId === "team1") {
        count += 3;
        document.getElementById(teamId).textContent = count;
    } else if (teamId === "team2") {
        count += 3;
        document.getElementById(teamId).textContent = count;
    }
}
function res(teamId) {
    if (teamId === "team1") {
        count = 0;
        document.getElementById(teamId).textContent = count;
    } else if (teamId === "team2") {
        count = 0;
        document.getElementById(teamId).textContent = count;
    }
}
