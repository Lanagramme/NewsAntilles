rubrique('international');

function affMenu(){
    $(".all" ).hide();
    $("#menu").show();
    $("#nav1").html('<h1>MENU</h1><img src="img/icons8-settings-50.png" alt="parametres" class="icones" id="cog" onclick="affparam()">');
}

function affAccueil(){
    $(".all"  ).hide();
    $("output").show();
    $("#nav1" ).html('<h1>NewsAntilles</h1>');
}
      
function affparam(){
    $(".all"  ).hide();
    $("#param").show();
    $("#nav1" ).html('<img onclick="affMenu()" class="icones right" style="transform:rotate(180deg)" src="img/icons8-material-sharp-48.png" alt="retour"><h1>NOTIFICATIONS</h1>')
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
        $('output').append(di);

        let h2 = document.createElement('h2');
        h2.textContent = item.querySelector('title').textContent;
        h2.className = "titreA";
        
        $('.section' + b).append(h2);

        let p = document.createElement('p');
        p.innerHTML = item.querySelector('description').textContent;
        p.className = "texteA"
        
        $('.section' + b).append(p);

        let a = document.createElement('a');
        let linkText = document.createTextNode("Lire plus >>");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = item.querySelector('link').textContent;
        a.className = "lienA"
        
        $('.section' + b).append(a);
        
        b++;
       })
     })
})


}

