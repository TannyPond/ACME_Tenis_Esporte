var ps = document.querySelectorAll('p')
var h2s = document.querySelectorAll('h2')
var as = document.querySelectorAll('a')
var h1s = document.querySelectorAll('h1') 
var ems = document.querySelectorAll('em')
var legends = document.querySelectorAll('legend')
var inputs = document.querySelectorAll('input')
var labels = document.querySelectorAll('label')
var textareas = document.querySelectorAll('textarea')
var h3s = document.querySelectorAll('h3')
var addresss = document.querySelectorAll('address')

function aumentarLetra(){
    //h1
    for(var i = 0; i<h1s.length; i++ ){
        var font = h1s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h1s[i].style.fontSize = "28px";
        }
        else{
            h1s[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }
    
    //h2
    for(var i = 0; i<h2s.length; i++ ){
        var font = h2s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h2s[i].style.fontSize = "24px";
        }
        else{
            h2s[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //h3
    for(var i = 0; i<h3s.length; i++ ){
        var font = h3s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h3s[i].style.fontSize = "18px";
        }
        else{
            h3s[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //h4
    for(var i = 0; i<as.length; i++ ){
        var font = as[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            as[i].style.fontSize = "14px";
        }
        else{
            as[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //p
    for(var i = 0; i<ps.length; i++ ){
        var font = ps[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            ps[i].style.fontSize = "16px";
        }
        else{
            ps[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //em
    for(var i = 0; i<ems.length; i++ ){
        var font = ems[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            ems[i].style.fontSize = "14px";
        }
        else{
            ems[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //legend
    for(var i = 0; i<legends.length; i++ ){
        var font = legends[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            legends[i].style.fontSize = "18px";
        }
        else{
            legends[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //input
    for(var i = 0; i<inputs.length; i++ ){
        var font = inputs[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            inputs[i].style.fontSize = "23px";
        }
        else{
            inputs[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //label
    for(var i = 0; i<labels.length; i++ ){
        var font = labels[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            labels[i].style.fontSize = "16px";
        }
        else{
            labels[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //textarea
    for(var i = 0; i<textareas.length; i++ ){
        var font = textareas[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            textareas[i].style.fontSize = "23px";
        }
        else{
            textareas[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }

    //address
    for(var i = 0; i<addresss.length; i++ ){
        var font = addresss[i].style.fontSize;
        font = font.replace("px","");

        if(font == ""){		 
            addresss[i].style.fontSize = "23px";
        }
        else{
            addresss[i].style.fontSize = (parseInt(font)+1)+"px";
        }
    }
    
}


function diminuirLetra(){
    //h1
    for(var i = 0; i<h1s.length; i++ ){
        var font = h1s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h1s[i].style.fontSize = "28px";
        }
        else{
            h1s[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }    
    
    //h2
    for(var i = 0; i<h2s.length; i++ ){
        var font = h2s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h2s[i].style.fontSize = "24px";
        }
        else{
            h2s[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    } 

    //h3
    for(var i = 0; i<h3s.length; i++ ){
        var font = h3s[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            h3s[i].style.fontSize = "24px";
        }
        else{
            h3s[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    } 

    //a
    for(var i = 0; i<as.length; i++ ){
        var font = as[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            as[i].style.fontSize = "14px";
        }
        else{
            as[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    } 

    //p
    for(var i = 0; i<ps.length; i++ ){
        var font = ps[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            ps[i].style.fontSize = "16px";
        }
        else{
            ps[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //em
    for(var i = 0; i<ems.length; i++ ){
        var font = ems[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            ems[i].style.fontSize = "14px";
        }
        else{
            ems[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //legend
    for(var i = 0; i<legends.length; i++){
        var font = legends[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            legends[i].style.fontSize = "22px";
        }
        else{
            legends[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //input
    for(var i = 0; i<inputs.length; i++ ){
        var font = inputs[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            inputs[i].style.fontSize = "23px";
        }
        else{
            inputs[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //label
    for(var i = 0; i<labels.length; i++ ){
        var font = labels[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            labels[i].style.fontSize = "23px";
        }
        else{
            labels[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //textarea
    for(var i = 0; i<textareas.length; i++ ){
        var font = textareas[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            textareas[i].style.fontSize = "23px";
        }
        else{
            textareas[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }

    //address
    for(var i = 0; i<addresss.length; i++ ){
        var font = addresss[i].style.fontSize;
        font = font.replace("px","");
        if(font == ""){		 
            addresss[i].style.fontSize = "23px";
        }
        else{
            addresss[i].style.fontSize = (parseInt(font)-1)+"px";
        }
    }
} 



var n = 1
function altoContrast(){
    var body = document.getElementById('pagina')
    var links = document.querySelectorAll('a')
    var rodape = document.getElementById('rodape')    

    n += 1

    if(n % 2 == 0){
        document.body.style.backgroundColor ="black"
        document.body.style.color ="white"

        for(var i = 0; i < links.length; i++){
            links[i].style.backgroundColor = 'black'
            links[i].style.color = 'yellow'
            links[i].style.borderRadius = '50px'

        } 
        
        for(var i = 0; i < rodape.length; i++){
            rodape[i].style.backgroundColor = 'black'
            rodape[i].style.color = 'white'
        }

    }else{
        document.location.reload(true);
    }
}
      

function reload(){
    window.location.reload(true);
}