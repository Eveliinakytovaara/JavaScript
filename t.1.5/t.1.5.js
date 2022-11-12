 let v = parseInt(prompt("Anna vuosiluku: "));
 if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
 {
     kohde.innerHTML = "Vuosi on karkausvuosi"
 }
 else
 {
     kohde.innerHTML = "Vuosi ei ole karkausvuosi"
 }

 kohde.innerHTML = html