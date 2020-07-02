function utworz_text() {

    let zformularz = new FormData(document.getElementById('formularz'));
    let klucze = zformularz.keys();
    var dodane = "";
    for (let klucz of klucze) {
            let nazwa_klucza = zformularz.get(klucz); 
            if (klucz.includes('architektura_')){        
                let doda = " " +zformularz.get(klucz) + " ";
                dodane = dodane + doda;
            }
    }
    
    if(zformularz.get('info_user').match(/^\s*$/g)) {
        niepelnosprawni = "";
//                console.log(niepelnosprawni);
    }else{
        niepelnosprawni = `<h2>Informacja dla użytkowników niepełnosprawnych</h2>
        ${zformularz.get('info_user')}`;
        
//                console.log(niepelnosprawni);
    }
    var bazowy = `<html>

        <head>
            <title>Deklaracja dostępności</title>
            <meta name="deklaracja-dostępności" content="${zformularz.get('urldeklaracji')}">    <meta charset="UTF-8" />
            <meta name="description" content="Deklaracja dostępności" />
            <meta name="robots" content="noindex" />
            
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="css/style.css" />
        </head>
        
        <body>
            <div class="site-branding" style="width: 980px;">
                
                <div id="logo">
                    <a href="${zformularz.get('urlwww')}" rel="home"><img src="${zformularz.get('urllogo')}" alt="Logo ${zformularz.get('podmiot')}"></a>
                </div><h1 class="site-title"><a href="${zformularz.get('urlwww')}" rel="home"> ${zformularz.get('podmiot')}</a></h1>
            </div>
            <div id="main-content-wrapper">
                <div id="content" class="site-content" style="background-color: white; padding: 30px;">
                    <div id="primary" class="content-area index-page" style="padding: 0px;">
                        <main id="main" class="site-main" role="main">
                            <div id="a11y-deklaracja">
                                <h1>Deklaracja dostępności</h1>
                                <h2>Wstęp Deklaracji</h2>
                                <p id="a11y-wstep"><span id="a11y-podmiot">${zformularz.get('podmiot')}</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do <a href="${zformularz.get('urlwww')}" id="a11y-url" title="Link do strony domowej ${zformularz.get('podmiot')}">strony internetowej ${zformularz.get('podmiot')}.</a></p>
        
                                <p>Data publikacji strony internetowej: <span id="a11y-data_publikacja">${zformularz.get('data_publikacja')}</span>.</p>
                                <p>Data ostatniej dużej aktualizacji: <span id="a11y-data_aktualizacja">${zformularz.get('data_aktualizacja')}</span>.</p>
        
        
                                <div id="a11y-status">${zformularz.get('status')} 
                                   
        
                                <p>Oświadczenie sporządzono dnia <span id="a11y-data_sporzadzenie">${zformularz.get('data_sporzadzenie')}</span>. ${zformularz.get('opis_strony')} 
                                ${niepelnosprawni}
        
                                <h2>Informacje zwrotne i dane kontaktowe</h2>
                                <div id="a11y-procedura">
                                    <div id="a11y-kontakt">
                                        <p>W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą odpowiedzialną jest <span id="a11y-osoba">${zformularz.get('osoba')}</span> adres poczty elektronicznej <a id="a11y-email" href="${zformularz.get('email')}">${zformularz.get('email')}</a> lub tel. <span id="a11y-telefon">${zformularz.get('telefon')}</span>. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak zapewnienia dostępności.</p>
                                    </div>
                                    <p>Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji w formach alternatywnych, na przykład
                                        odczytanie niedostępnego cyfrowo dokumentu, opisania zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną chodzi
                                        oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji w formie alternatywnej, powinna także określić formę tej informacji.</p>
                                    <p>Podmiot publiczny powinien zrealizować żądanie niezwłocznie i nie później, niż w ciągu 7 dni. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym, kiedy realizacja żądania będzie
                                        możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące. Jeżeli zapewnienie dostępności nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.</p>
                                    <p>W przypadku, gdy podmiot odmówi realizacji żądania zapewnienia dostępności lub alternatywnego dostępu do informacji, można złożyć skargę na takie działanie.</p>
                                    <p>Po wyczerpaniu wszystkich możliwości skargę można przesłać także do <a href="https://www.rpo.gov.pl/content/jak-zglosic-sie-do-rzecznika-praw-obywatelskich" title="Przekierowanie do strony zewnętrznej">Rzecznika Praw Obywatelskich</a>.</p>
                                </div>
                                <h2>Dostępność architektoniczna</h2>
                                <div id="a11y-architektura">${zformularz.get('architektura')} ${dodane}</div>
                            </div>
                        </main>
                    </div>
                    <p><a href="${zformularz.get('urlwww')}" id="a11y-url" title="Link do strony domowej ${zformularz.get('podmiot')}">Powrót do strony głównej ${zformularz.get('podmiot')}.</a></p>
                </div>
            </div>
        </body>                
    </html>`;
    bazowy = String(bazowy).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    document.getElementById('duda').innerHTML = bazowy;

}

i=1;
function wstaw2() {  
i++;  
//   var tekst = document.createTextNode('Dodaj lokalizację nr '+i+': ');  

var br    = document.createElement('br');  
var br1   = document.createElement('br');  
var br2   = document.createElement('br');   
var div   = document.createElement('div'); 
var label = document.createElement('label');
label.setAttribute('class', 'w3-text-blue');
label.setAttribute('for', 'architektura_'+ i);
var tekst = 'Opisz dostępność architektoniczną w lokalizacji numer '+i+':';
label.innerText= tekst;
var input = document.createElement('textarea');            
input.setAttribute('name', 'architektura_'+ i);  
input.setAttribute('style', 'height:200px;');
input.setAttribute('class', 'w3-input w3-border');
div.appendChild(label);
div.appendChild(br);     
div.appendChild(input);      
div.appendChild(br1);  
div.appendChild(br2);  
document.getElementById('kolejne_lokalizacje').appendChild(div);

}

function download(){
let pobierz = [duda.value];
var blob = new Blob(pobierz,{type:"text/html;charset=utf-8"});
saveAs(blob,"deklaracja_dostepnosci.html");
}