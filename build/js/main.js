jQuery(document).ready(function($){var e,i,t,s;$.ajax({url:"data.json",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},type:"GET",dataType:"JSON",success:function(a){function c(){s=$("<ul id='ingredients' class='ingredients item'>").insertBefore(".back.btn-default"),$(a.bites[n].ingredients).each(function(e,i){s.append($(document.createElement("li")).text(i))}),$("#ingredients li").last().after("<li>+ more…</li>")}for(var n=0;n<a.bites.length;n++){var l=a.bites[n].thumbURL,r=a.bites[n].title,o=a.bites[n].description,d=a.bites[n].link;e='<div class="recipe flip-container" ontouchstart="this.classList.toggle("hover");">',e+='<div class="flipper">',e+='<div class="front">',e+='<div class="holder">',e+='<span class="thumbnail item"><img id="thumbnail" src="'+l+'" alt="'+r+'"></span>',e+='<h2 id="title" class="title item">'+r+"</h2>",e+='<p id="description" class="description item">'+o+"</p>",e+='<p class="item"><a class="btn btn-default" href="#" role="button">View recipe</a></p>',e+="</div>",e+="</div>",e+='<div class="back">',e+='<div class="holder">',e+='<h2 id="back-title" class="back-title item">'+r+"</h2>",e+='<hr class="item">',e+='<p class="item"><a id="link" class="back btn btn-default" href="'+d+'" role="button" target="_blank">View full recipe</a></p>',e+='<p class="hashtag item">#bajanbites</p>',e+="</div>",e+="</div>",e+="</div>",e+="</div>",$("#container").append(e),c()}i=$(".recipe").length;var h=i+1;if(t=i<1?"Check back later for bites!":"Check back tomorrow for bite "+h,i<6){var p='<div id="ghost" class="recipe flip-container" ontouchstart="this.classList.toggle("hover");"><div class=""><div class="front"><div class="ghost holder"><span>'+t+"</span></div></div></div></div>";$("#container").append(p)}},cache:!1,error:function(){$("#container").append('<div id="ghost" class="recipe flip-container" ontouchstart="this.classList.toggle("hover");"><div class=""><div class="front"><div class="ghost holder"><span>Oops! Something went wrong. Please check back later.</span></div></div></div></div>')}})});