

var quoteContainer = document.getElementById("quotes");
var btn = document.getElementById("btn");
var i = 0;


	btn.addEventListener("click", function (){
		var ourRequest = new XMLHttpRequest();
		
		ourRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25', true);
		
		ourRequest.onload= function (){
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData);
			
	};

		ourRequest.send();
    

function renderHTML(data){
	htmlString = "";
	htmlString += "<div>" + data[i].content + "</div>";
	htmlString += "<div>" + data[i].title + "</div>";
	i ++;
	quoteContainer.innerHTML= htmlString;

	}

	
 
});





