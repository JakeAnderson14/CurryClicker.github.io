var clicks = document.getElementById("clicks");
var per_click = 1;
var per_auto = 0;
var timer = setInterval( autoClick, 1000);
var AmAuto = 0;
var AmAsian = 0;
var AmBCP = 0;
var AmBCG = 0;
var AmFarm = 0;
var AmFactory = 0;
var AmMuncher = 0;
var AmChicken = 0;
var AmCompow = 0;

function Int(){
	console.log("This Game is Copy-Righted to Jake Anderson.")
	document.getElementById("AmAuto").innerHTML = AmAuto;
	document.getElementById("AmAsian").innerHTML = AmAsian;
	document.getElementById("AmBCP").innerHTML = AmBCP;
	document.getElementById("AmBCG").innerHTML = AmBCG;
	document.getElementById("AmFarm").innerHTML = AmFarm;
	document.getElementById("AmFactory").innerHTML = AmFactory;
	document.getElementById("AmMuncher").innerHTML = AmMuncher;
	document.getElementById("AmChicken").innerHTML = AmChicken;
	document.getElementById("AmCompow").innerHTML = AmCompow;
}

function save(){

}

function load(){

}

function onClick() {
	clicks = clicks + per_click;
	fixed_clicks = clicks.toFixed(1);
    document.getElementById("clicks").innerHTML = fixed_clicks;
};

function autoClick() {
	clicks = clicks + per_auto;
	fixed_auto_clicks = clicks.toFixed(1);
    document.getElementById("clicks").innerHTML = fixed_auto_clicks;
	document.getElementById("ClickAm").innerHTML = per_click;
	document.getElementById("AutoAm").innerHTML = per_auto;
}

function buyAuto() {
	if (clicks < 200) {
	}
	else
	{
	clicks = clicks - 200;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 0.5;
	AmAuto = AmAuto + 1;
	document.getElementById("AmAuto").innerHTML = AmAuto;
	}
}

function buyAsian() {
	if (clicks < 400) {
		
	}
	else
	{
	clicks = clicks - 400;
	document.getElementById("clicks").innerHTML = clicks;
	per_click = per_click + 1;
	AmAsian = AmAsian + 1;
	document.getElementById("AmAsian").innerHTML = AmAsian;
	}
}

function buyBCP() {
	if (clicks < 600) {
	}
	else
	{
	clicks = clicks - 600;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 1;
	AmBCP = AmBCP + 1;
	document.getElementById("AmBCP").innerHTML = AmBCP;
	}
}

function buyBCG() {
	if (clicks < 1000) {
	}
	else
	{
	clicks = clicks - 600;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 2.5;
	AmBCG = AmBCG + 1;
	document.getElementById("AmBCG").innerHTML = AmBCG;
	}
}

function buyFarm() {
	if (clicks < 1000) {
		
	}
	else
	{
	clicks = clicks - 1000;
	document.getElementById("clicks").innerHTML = clicks;
	per_click = per_click + 3;
	AmFarm = AmFarm + 1;
	document.getElementById("AmFarm").innerHTML = AmFarm;
	}
}

function buyFactory() {
	if (clicks < 2000) {
		
	}
	else
	{
	clicks = clicks - 2000;
	document.getElementById("clicks").innerHTML = clicks;
	per_click = per_click + 8;
	AmFactory = AmFactory + 1;
	document.getElementById("AmFactory").innerHTML = AmFactory;
	}
}

function buyMuncher() {
	if (clicks < 5000) {
	}
	else
	{
	clicks = clicks - 5000;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 30;
	AmMuncher = AmMuncher + 1;
	document.getElementById("AmMuncher").innerHTML = AmMuncher;
	}
}

function buyChicken() {
	if (clicks < 20000) {
	}
	else
	{
	clicks = clicks - 20000;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 100;
	AmChicken = AmChicken + 1;
	document.getElementById("AmChicken").innerHTML = AmChicken;
	}
}

function buyCompow() {
	if (clicks < 1000000) {
	}
	else
	{
	clicks = clicks - 1000000;
	document.getElementById("clicks").innerHTML = clicks;
	per_auto = per_auto + 1000;
	AmCompow = AmCompow + 1;
	document.getElementById("AmCompow").innerHTML = AmCompow;
	}
}

function BetaTester() {
    var password = prompt("Please enter the Password to get access to the Beta Version of Curry Clicker");
    
	if (password != "BetaTesters")
	{
		alert("Wrong Password");
		//Wrong Password
	}
	else
	{
		alert("Welcome Beta Tester");
		load('Beta.html');
		//Take them to beta
	}
}

function BetaTesting(){
	clicks = clicks + 100000;
	document.getElementById("clicks").innerHTML = clicks;
}
