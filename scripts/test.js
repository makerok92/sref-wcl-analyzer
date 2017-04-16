$(document).ready(function(){
    alert("jQuery works!");
	
    $("#report-button").button().click(function(){
        // get fights JSON
		var reportCode = $("#report-input:input");
		var apiKey = "087783eb78c21061d028831d2344d118";
		var url = "https://www.warcraftlogs.com/v1/report/fights/" + reportCode
	  		+ "?api_key=" + apiKey;
		var reportObj = $.getJson(url);
		
		// test if we've got fights JSON
		var fights = reportObj.fights;		
		$("#fight-div").append(fights[0].name);
    });    

});
