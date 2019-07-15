rubrique('international');

function affMenu(){
    $(".all" ).hide();
    $("#menu").show();
    $(".nav" ).html('<h1>MENU</h1><p class="cog" onclick="affparam()">parametres</p>');
}

function affAccueil(){
    $(".all"  ).hide();
    $("output").show();
    $(".nav"  ).html('<h1>NewsAntilles</h1>');
}

function affparam(){
    $(".all"  ).hide();
    $("#param").show();
    $(".nav"  ).html('<p class="back" onclick="affMenu()">back</p><h1>NOTIFICATIONS</h1>')
}
function rubrique(a){
    let b=0;
    $('output').html('');
    affAccueil();
    fetch("https://www.bfmtv.com/rss/" + a + "/").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser();
    let doc = domParser.parseFromString(xmlTxt, 'text/xml');
    doc.querySelectorAll('item').forEach((item) => {
        
        let di = document.createElement('div');
        di.className = "article section" + b;
        document.querySelector('output').appendChild(di);

        let h2 = document.createElement('h2');
        h2.textContent = item.querySelector('title').textContent;
        document.querySelector('.section' + b).appendChild(h2);

        let p = document.createElement('p');
        p.innerHTML = item.querySelector('description').textContent;
        document.querySelector('.section' + b).appendChild(p);

        let a = document.createElement('a');
        let linkText = document.createTextNode("Lire plus >>");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = item.querySelector('link').textContent;
        document.querySelector('.section' + b).appendChild(a);
        
        b++;
       })
     })
})


}

