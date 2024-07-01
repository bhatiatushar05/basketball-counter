let team1 = document.getElementById("team1")
let team2 = document.getElementById("team2")
let count = {
    team1: 0,
    team2: 0
};
function add1(teamId) {
    count[teamId] += 1;
    document.getElementById(teamId).textContent = count[teamId];
}

function add2(teamId) {
    count[teamId] += 2;
    document.getElementById(teamId).textContent = count[teamId];
}

function add3(teamId) {
    count[teamId] += 3;
    document.getElementById(teamId).textContent = count[teamId];
}

function res(teamId) {
    count[teamId] = 0;
    document.getElementById(teamId).textContent = count[teamId];
}
