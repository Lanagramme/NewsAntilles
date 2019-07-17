rubrique('international');

function affMenu(){
   $(".all" ).hide();
   $("#menu").show();
   $("#nav1").html('<h1>Menu</h1><img src="img/image 5.png" alt="parametres" class="icones" id="cog" onclick="affparam()">');
   $('.fbi1').attr('src', 'img/icons8-accueil-50.png');
   $('.fbi2').attr('src', 'img/icons8-menu-48 (1).png');
   $('.fp2').css('color', '#db5e11');
   $('.fp1').css('color', 'black');
    
    
    
}

function affAccueil(){
   $('li').css("border-bottom", "0px solid black")
   $(".all"  ).hide();
   $("output").show();
   $("#nav1" ).html('<h1>NewsAntilles</h1>');
   $('.fbi1').attr('src', 'img/icons8-accueil-50 (1).png');
   $('.fbi2').attr('src', 'img/icons8-menu-48.png');
   $('.fp1').css('color', '#db5e11');
   $('.fp2').css('color', 'black');
}
     
function affparam(){
   $(".all"  ).hide();
   $("#param").show();
   $("#nav1" ).html('<img onclick="affMenu()" class="icones right" style="transform:rotate(none)" src="img/back.png" alt="retour"><h1>Paramètres</h1>')
}

function rubrique(a){
   affAccueil();  
    try { 
       if (event.currentTarget.classList.contains('under'))
       {event.currentTarget.style.borderBottom = '2px solid #db5e11'; }
   } 
   catch {}
   let b=0;
   $('output').html('');
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

