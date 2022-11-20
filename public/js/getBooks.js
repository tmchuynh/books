$(document).ready(function () {
    var c = document.getElementsByClassName("btn");
    for (var i = 0; i < c.length; i++) {
        console.log(c[i].innerHTML);
        switch (c[i].innerHTML) {
            case "Art":
                $.get("https://openlibrary.org/subjects/art.json?limit=100", function (data) {
                    console.log(data.works[i].availability.isbn);
                    const author = [];
                    const subject = [];

                    for (var k = 0; k < data.works[i].authors.length; k++) {
                        // console.log(data.works[i].authors[k].name);
                        author.push(" " +data.works[i].authors[k].name + " ");
                    }
                    console.log(author);

                    for (var j = 0; j < data.works[i].subject.length; j++) {
                        subject.push(" " + data.works[i].subject[j] + " ");
                    }

                    
                    // newBook("title", "Micheal", 4568321, "music, classical", "headingTen", "collapseTen");
                    // while(data.works) {
                    newBook(data.works[i].title, author, data.works[i].availability.isbn, subject, "heading", "collapse");

                    // }
                })

                break;
            case "Business":
                $.get("https://openlibrary.org/subjects/business.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Cooking":
                $.get("https://openlibrary.org/subjects/cooking.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Fiction":
                $.get("https://openlibrary.org/subjects/fiction.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Languages":
                $.get("https://openlibrary.org/subjects/languages.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Religion":
                $.get("https://openlibrary.org/subjects/religion.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Self-Improvement":
                $.get("https://openlibrary.org/subjects/self-improvement.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
            case "Travel":
                $.get("https://openlibrary.org/subjects/travel.json?limit=100", function (data) {
                    // console.log(data.works);
                })
                break;
        }
    }

    newBook("title", "Micheal", 4568321, "music, classical", "headingTen", "collapseTen");
})



function newBook(title, authorName, isbnNum, keywordList, headingNum, target) {
    var a = document.querySelector(".accordion");

    item = document.createElement("div");
    item.classList.add("accordion-item");
    header = document.createElement("h2");
    header.classList.add("accordion-header");
    header.setAttribute("id", headingNum)
    item.appendChild(header);

    button = document.createElement("button");
    button.classList.add("accordion-button");
    button.classList.add("collapsed");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#" + target);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", target);
    button.innerHTML = String(title);
    header.appendChild(button);

    info = document.createElement("div");
    info.setAttribute("id", target);
    info.classList.add("accordioan-collapse");
    info.classList.add("collapse");
    info.setAttribute("aria-lablledby", headingNum);
    info.setAttribute("data-bs-parent", "#accordionExample");
    item.appendChild(info);

    body = document.createElement("div");
    body.classList.add("accordion-body");
    info.appendChild(body);

    p1 = document.createElement("p");
    author = document.createElement("strong");
    author.classList.add("author");
    author.innerHTML = "Author: ";
    p1.innerHTML = authorName + "<br>";
    body.appendChild(author);
    body.appendChild(p1);

    p2 = document.createElement("p");
    isbn = document.createElement("strong");
    isbn.classList.add("isbn");
    isbn.innerHTML = "ISBN: ";
    p2.innerHTML =  isbnNum + "<br>";
    body.appendChild(isbn);
    body.appendChild(p2);

    p3 = document.createElement("p");
    keywords = document.createElement("strong");
    keywords.classList.add("keywords");
    keywords.innerHTML = "Keywords: ";
    p3.innerHTML =  keywordList;
    body.appendChild(keywords);
    body.appendChild(p3);

    console.log(item);
    a.appendChild(item);
}