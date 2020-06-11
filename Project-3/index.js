console.log("This is Project-3");

// Initialize the News api parametrs https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}

let apikey = 'e0865b648e744bc4a2c1097f1d65e12a';
let source = 'bbc-news';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create a get request

const xhr = new XMLHttpRequest();

xhr.open('GET', 'indexnews.json', true);
// xhr.getResponseHeader('content-type', 'application/json');

// what to do when response is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }
}

xhr.send()