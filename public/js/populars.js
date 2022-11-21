$(document).ready(function() {
    $.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=fL03X4retnnENed76ITKw8NLO08bfKAc", function(data) {
        console.log(data.results);
    })
})
