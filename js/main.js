
// // var pageCounter = 1;
var quotes = document.getElementById("quotes");
var btn = document.getElementById("btn");


	btn.addEventListener("click", function (){
		var ourRequest = new XMLHttpRequest();
		
		ourRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
		
		ourRequest.onload= function (){
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData[0].content);
	};

		ourRequest.send();

function renderHTML(data){
	var htmlString = data;
	  
	}

	
console.log(htmlString);
 // quotes.insertAdjacentHTML('beforeend', htmlString);
});





