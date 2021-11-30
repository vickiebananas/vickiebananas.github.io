//to open external links in a new tab, from: https://harrymartland.co.uk/jekyll-open-links-in-new-tab/
const baseUrl = '{{ site.url }}';
document.addEventListener('click', function (event) {
    let anchor = event.target.closest("A");
    if(anchor){
        const href = anchor.href;
        //need http://127.0.0.1 for local testing
        if(!href.startsWith(baseUrl) && !href.startsWith('#') && !href.startsWith("http://127.0.0.1")){
            console.log(baseUrl);
            console.log(href);
            window.open(href,'_blank');
            event.preventDefault();
        }
    }

    console.log(baseUrl);
    console.log(href);

}, false);