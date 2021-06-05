
function construct(){


var titulo = document.getElementById("titulo").value;
var conteudo = document.getElementById("conteudo").value;
var link = document.getElementById("link").value;
var end = document.getElementById("tabela");

end.innerHTML += [
        `<tr>
           <td>
           <hr style="margin: 25px 0;">
             <p style="font-size: 17px; display: inline;" ><strong>${titulo}  </strong>${conteudo}</p>
             <a href="#" style="color : #1155cc; display: inline;"><strong>${link}</strong></a>
            </td>
           </tr">
        `
    ]

};


