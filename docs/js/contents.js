/**
 * // call this after the page has loaded
 * htmlTableOfContents();
 * I've refactored this to support older browsers such as ie8 and ie7. What a life.
 */

function htmlTableOfContents () {
    var toc = document.getElementById('toc');
    var headings;

    if( navigator.userAgent.indexOf("MSIE") != -1 ) {
       headings = document.getElementsByTagName('h2');
    } else {
       headings = document.querySelectorAll("h2");
    }

    var list = document.createElement('ul');
    var heading = document.createElement('h2');

    for(var i = 0, n = headings.length; i < n; i ++) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = '#' + headings[i].id;
        link.innerText = headings[i].innerText.replace(' #','');
        listItem.appendChild(link);
        list.appendChild(listItem);
    }

    heading.id = "contents";
    heading.innerText = 'Contents';
    toc.appendChild(heading);
    toc.appendChild(list);
}

htmlTableOfContents();