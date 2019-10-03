rubrique('k');
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
    if (a=='k') a = "";


   b=0;
   $('output').html('');
   spin = '<div class="lds-ellipsis" style="margin-left: 45vw; margin-top: 40vh;"><div></div><div></div><div></div><div></div></div>';
   $('output').append(spin);
    
    
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "www.newsantilles.com/index.php" + a + "?format=feed&amp;type=rss";
    printf(targetUrl);
	fetch(proxyUrl + targetUrl).then((res) => {
    res.text().then((xmlTxt) => {
        var domParser = new DOMParser();
        doc = domParser.parseFromString(xmlTxt, 'text/xml');
        try {
            $('.lds-ellipsis').hide();
        } catch (error) { }
        
         doc.querySelectorAll('item').forEach((item) => {
      
            tit = item.querySelector('link').textContent;
            tit = remove_character(tit, 4)
			
            if (b%5==0) di = '<div class="section' +b+ ' haut" onclick="lire(`' +tit+ '`)"></div>';
            else di = '<div class="article section' +b+ '" onclick="lire(`' +tit+ '`)"></div>';
             
            $('output').append(di);

            h2 = document.createElement('h2');
            h2.textContent = item.querySelector('title').textContent;
            h2.className = "titreA";
      
            $('.section' + b).append(h2);

            p = document.createElement('p');
            p.innerHTML = item.querySelector('description').textContent;
            p.className = "texteA";
            p.id = 'id'+b
            $('.section' + b).append(p);
            argent(b)
            b++;
         });
        
             $('.texteA p:not(.texteA p:first-child)').each(function (index){
                 $(this).css('height', '0px')
                 $(this).css('margin', '0px')
             })
             $('.texteA p span').each(function (index){
                 $('.article img').css('height','70px')
                 $('.article img').css('width','105px')
                 $('.article img').css('background','#c7c7c7')
                 $('.article img').css('margin','0px 10px')
             })
             $('.texteA').each(function (index){
                 $(this).css('margin', '0px')
             })
             $('.texteA p').each(function (index){
                 $(this).css('margin', '0px')
             })
             $('.texteA p span').each(function (index){
                 $(this).css('font-size', '0px')
             })
      });
        
   });

}

function argent(i){
        let a = $('#id' + i + ' img:first-child').prop('src')
        a = remove_character(a, 4)
        $('#id' + i).html(`<img src='${a}'></img>`);
}

function printf(a){
    console.log(a)
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

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }