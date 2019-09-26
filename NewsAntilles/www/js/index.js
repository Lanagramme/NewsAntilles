rubrique('societe');
$('#frist').css('border-bottom', '2px solid #db5e11');
$(".splash").delay( 1000 ).fadeOut( 400 );
$('.parametres').click(function() {
   $('#param').toggle('slow');
});
$('.propos').click(function() {
   $('#contact').toggle('slow');
});
$('.vers').click(function() {
   $('#build').toggle('slow');
});

function affMenu(){
   $(".all" ).hide();
   $(".opaque").toggle();
   $('.togglable').css('display', 'none');
   $('.side').css('margin-left', '0'); 
   
}

function affAccueil(){
   $('.side').css('margin-left', '-100%'); 
   $(".opaque").fadeOut( 200 );
   $('li'    ).css("border-bottom", "0px solid black");
   $(".all"  ).hide();
   $("output").show();
}

function rubrique(a){
   affAccueil();
   under = document.getElementsByClassName('under');
   for (const item of under) {
      if (item.classList.contains(a))
      {item.style.borderBottom = '2px solid #db5e11';}
   }
   
    $('.titlebar h1').html(a);

   b=0;
   $('output').html('');
   spin = '<div class="lds-ellipsis" style="margin-left: 45vw; margin-top: 40vh;"><div></div><div></div><div></div><div></div></div>';
   $('output').append(spin);
   fetch("https://www.bfmtv.com/rss/" + a + "/").then((res) => {
   res.text().then((xmlTxt) => {
      var domParser = new DOMParser();
      doc = domParser.parseFromString(xmlTxt, 'text/xml');
      try {
         $('.lds-ellipsis').hide();
      } catch (error) {
         
      }
         doc.querySelectorAll('item').forEach((item) => {
      
            tit = item.querySelector('link').textContent;
			
            di = document.createElement('div');
            di.className = "article section" + b;
			
            di = '<div class="article section' +b+ '" onclick="lire(`' +tit+ '`)"></div>';
            $('output').append(di);

            h2 = document.createElement('h2');
            h2.textContent = item.querySelector('title').textContent;
            h2.className = "titreA";
      
            $('.section' + b).append(h2);

            p = document.createElement('p');
            p.innerHTML = item.querySelector('description').textContent;
            p.className = "texteA";
      
            $('.section' + b).append(p);
            b++;
         });
      });
   });
}

function lire(a){
   f = "<div class='page-article'></div>";
   g = '<div class="page-bar" onclick="closeFrame()"><img src="img/back.png" alt="retour" class="button-menu"></div>';
   h = "<iframe class='iframe' src='" +a+ "'></iframe>";
   $('body').append(f);
   $('.page-article').append(g);
   $('.page-article').append(h);
}  

function closeFrame(){
   g = document.getElementsByClassName('page-article');
   g[0].parentNode.removeChild(g[0]);
}