
rubrique('international');
$('#frist').css('border-bottom', '2px solid #db5e11')

function affMenu(){
   $(".all" ).hide();
   $(".menu").show();
   $("#nav1").html('<h1>Menu</h1><img src="img/image 5.png" alt="parametres" class="icones" id="cog" onclick="affparam()">');
   $('.fbi1').attr('src', 'img/icons8-accueil-50.png');
   $('.fbi2').attr('src', 'img/icons8-menu-48.png');
   $('.fp2').css('color', 'black');
   $('.fp1').css('color', 'black');  
}

function affAccueil(){
   $('li').css("border-bottom", "0px solid black")
   $(".all"  ).hide();
   $("output").show();
   $("#nav1" ).html('<h1>NewsAntilles</h1>');
   $('.fbi1').attr('src', 'img/icons8-accueil-50.png');
   $('.fbi2').attr('src', 'img/icons8-menu-48.png');
   $('.fp1').css('color', 'black');
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
        bob = event.currentTarget.innerText;
        $('.nav h1').html(bob);
   } 
   catch {}
   let b=0;
   $('output').html('');
   fetch("https://www.bfmtv.com/rss/" + a + "/").then((res) => {
   res.text().then((xmlTxt) => {
      var domParser = new DOMParser();
      let doc = domParser.parseFromString(xmlTxt, 'text/xml');
         doc.querySelectorAll('item').forEach((item) => {
      
            let tit = item.querySelector('link').textContent;
			
			
            let di = document.createElement('div');
            di.className = "article section" + b;
			
			di = '<div class="article section' +b+ '" onclick="lire(`' +tit+ '`)"></div>'
            $('output').append(di);

            let h2 = document.createElement('h2');
            h2.textContent = item.querySelector('title').textContent;
            h2.className = "titreA";
      
            $('.section' + b).append(h2);

            let p = document.createElement('p');
            p.innerHTML = item.querySelector('description').textContent;
            p.className = "texteA"
      
            $('.section' + b).append(p);
            b++;
         });
      });
   });
}


function lire(a){
	alert('lire');
	let f = "<iframe class='iframe' src='" +a+ "'>"
	$('.screen').append(f);
}