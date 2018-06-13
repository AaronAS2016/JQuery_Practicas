var data = window.location;
var data2 = valnum(data.pathname);
var url = data2+1 + '.html';
function valnum(palabra)
 {
     var checkOK = "0123456789";
     var checkStr = palabra;
     var allValid = true;
     var decPoints = 0;
     var nuevoString="";
     for(i=0; i <checkStr.length; i++)
     {
         ch = checkStr.charAt(i);
         for(j=0; j<checkOK.length; j++)
         {
             if(ch == checkOK.charAt(j))
             {
                 nuevoString=nuevoString+ch;
             }
         }
     }
     return  parseInt(nuevoString,10);
 }




var boton = $('<a>', {
  'href': url,
  'text': 'Siguiente clase',
  'class' : 'btn-primary btn'
});
boton.appendTo('body');
