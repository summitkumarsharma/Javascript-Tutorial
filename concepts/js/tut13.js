console.log('Welcome to tut 13.js');
a = document.links;
Array.from(a).forEach(function(element) {
    href = element.href;
    if (href.includes('javascript'))
        console.log(element);
})