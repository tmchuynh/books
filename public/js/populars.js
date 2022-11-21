$(document).ready(function() {
    $.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=fL03X4retnnENed76ITKw8NLO08bfKAc", function(data) {
        console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
            popularBook(data.results[i].title, data.results[i].contributor, data.results[i].description, data.results[i].isbns, "geksio", "tieosl");
        }

    })

    // popularBook("I GIVE YOU MY BODY", "by Diana Gabaldon", "The author of Outlander novels gives tips on writing sex scenes, drawing examples from the books.", [48567896321, 54869789354], "th8ieo9sjkdmse", "l;oppkl;kop");
})


function popularBook(titleName, contributor, description, isbnNum, quoteSaying, quoteSpeaker) {
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

    blockquote = document.createElement("blockquote");
    blockquote.classList.add("blockquote");
    quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerHTML = quoteSaying;
    blockquote.appendChild(quote);
    speaker = document.createElement("footer");
    speaker.classList.add("blockquote-footer");
    speaker.innerHTML = quoteSpeaker;
    blockquote.appendChild(speaker);
    body.appendChild(blockquote);

    footer = document.createElement("p");
    footer.classList.add("card-footer");
    footer.classList.add("text.muted");
    footer.innerHTML = isbnNum;
    body.appendChild(footer);

    card.appendChild(body);
    s.appendChild(card);
    console.log(s);

}