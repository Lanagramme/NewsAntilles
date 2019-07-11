
    fetch("https://www.bfmtv.com/rss/politique/").then((res) => {
      res.text().then((xmlTxt) => {
        var domParser = new DOMParser();
        let doc = domParser.parseFromString(xmlTxt, 'text/xml');
        doc.querySelectorAll('item').forEach((item) => {
           
            let h2 = document.createElement('h2');
            h2.textContent = item.querySelector('title').textContent;
            document.querySelector('output').appendChild(h2);
            
            let p = document.createElement('p');
            p.textContent = item.querySelector('description').textContent;
            document.querySelector('output').appendChild(p);
            
            let a = document.createElement('a');
            let linkText = document.createTextNode("Lire plus >>");
            a.appendChild(linkText);
            a.title = "my title text";
            a.href = item.querySelector('link').textContent;
            document.querySelector('output').appendChild(a);
           })
         })
    })