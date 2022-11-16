$(document).ready(function () {
    var c = document.getElementsByClassName("btn");
    for (var i = 0; i < c.length; i++) {
        console.log(c[i].innerHTML);
        switch (c[i].innerHTML) {
            case "Art":
                $.get("https://openlibrary.org/subjects/art.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Business":
                $.get("https://openlibrary.org/subjects/business.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Cooking":
                $.get("https://openlibrary.org/subjects/cooking.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Fiction":
                $.get("https://openlibrary.org/subjects/fiction.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Languages":
                $.get("https://openlibrary.org/subjects/languages.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Religion":
                $.get("https://openlibrary.org/subjects/religion.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Self-Improvement":
                $.get("https://openlibrary.org/subjects/self-improvement.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            case "Travel":
                $.get("https://openlibrary.org/subjects/travel.json?limit=100", function (data) {
                    console.log(data.works);
                })
                break;
            }
        }
    })


