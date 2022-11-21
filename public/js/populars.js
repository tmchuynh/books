$(document).ready(function() {
    $.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=fL03X4retnnENed76ITKw8NLO08bfKAc", function(data) {
        for (var i = 0; i < data.results.length; i++) {
        // console.log(Object.values(data.results[i].isbns[0]));
            const isbn_ = [];
            if (data.results[i].isbns.length > 0) {
                for (k = 0; k < Object.values(data.results[i].isbns[0]).length; k++) {
                    isbn_.push(Object.values(data.results[i].isbns[0])[k])
                    console.log(" " + isbn_ + " ");
                }
            } else {
                isbn_.push("N/A");
            }
            
            popularBook(data.results[i].title, data.results[i].contributor, data.results[i].description, isbn_, "geksio", "tieosl");
        }

    })

    // popularBook("I GIVE YOU MY BODY", "by Diana Gabaldon", "The author of Outlander novels gives tips on writing sex scenes, drawing examples from the books.", [48567896321, 54869789354], "th8ieo9sjkdmse", "l;oppkl;kop");
})


function popularBook(titleName, contributor, description, isbnNum) {
    var s = document.querySelector(".popular-books");

    card = document.createElement("div");
    card.classList.add("card");

    body = document.createElement("div");
    body.classList.add("card-body");

    title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = titleName;
    body.appendChild(title);

    subtitle = document.createElement("h6");
    subtitle.classList.add("card-subtitle");
    subtitle.classList.add("mb-2");
    subtitle.classList.add("text-muted");
    subtitle.innerHTML = contributor;
    body.appendChild(subtitle);

    text = document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML = description;
    body.appendChild(text);

    footer = document.createElement("p");
    footer.classList.add("card-footer");
    footer.classList.add("text.muted");
    footer.innerHTML = "ISBN(S): " + isbnNum;
    body.appendChild(footer);

    card.appendChild(body);
    s.appendChild(card);
    console.log(s);

}