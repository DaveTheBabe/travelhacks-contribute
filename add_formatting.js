//Run from the java console or add to the website.
//Will break if website structure is changed.
//Created 2017-09-03

//Get all values from container div.
var list = $('.container').children('div')
var childArray = list[3].children
//Get amount of divs
var listLength = childArray.length;

//Loop through the divs
for(var i = 0; i < listLength; i++) {
	var childText = childArray[i];
//Check if div contains dates.
	if(childText.innerText.substring(0,3) == '201'){
	//Extract year, month, day
		var calc_year = childText.innerText.substring(0,4);
		var calc_month = childText.innerText.substring(5,7);
		var calc_day = childText.innerText.substring(8,10);
	//Create a date object
		var dt = new Date(calc_year,calc_month-1,calc_day);

	//Get day from object
		var DateDay = dt.getDay();

	//Check whether a date is weekend or approaching 
	//Bold for Saturday and Sunday
	//Italic for Thursday and Friday
	//Normal for Monday, Tuesday and Wednesday
		if(DateDay == 6 || DateDay == 0)
			{ $('.container').children('div')[3].children[i].style.fontWeight = "bold" } 
		if(DateDay == 1 || DateDay == 2 || DateDay == 3)
			{ $('.container').children('div')[3].children[i].style.fontStyle = "italic" } 

		if(DateDay == 6)
			{ $('.container').children('div')[3].children[i].innerText += " | Sat" } 
		if(DateDay == 5)
			{ $('.container').children('div')[3].children[i].innerText += " | Fri" } 
		if(DateDay == 4)
			{ $('.container').children('div')[3].children[i].innerText += " | Thu" } 
		if(DateDay == 3)
			{ $('.container').children('div')[3].children[i].innerText += " | Wed" } 
		if(DateDay == 2)
			{ $('.container').children('div')[3].children[i].innerText += " | Tue" } 
		if(DateDay == 1)
			{ $('.container').children('div')[3].children[i].innerText += " | Mon" } 
		if(DateDay == 0)
			{ $('.container').children('div')[3].children[i].innerText += " | Sun" } 

	}
}
