console.log("JavaScript loaded");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var links = document.querySelectorAll("a[href$='.html']");
    links.forEach(function(link) {
        console.log("Original href:", link.getAttribute('href'));
        var modifiedHref = link.getAttribute('href').replace('.html', '');
        console.log("Modified href:", modifiedHref);
        link.setAttribute('href', modifiedHref);
   });
});