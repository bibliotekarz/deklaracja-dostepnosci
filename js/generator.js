function UtworzText() {

    let zformularz = new FormData(document.getElementById('formularz'));

    if (zformularz.get('hinfo_user').match(/^\s*$/g)) {
        niepelnosprawni = "";
    } else {
        niepelnosprawni = `<h3>Informacja dla użytkowników niepełnosprawnych</h3> ${zformularz.get('hinfo_user')}`;
    }
    
    FormatDaty();
    FormatEmaila();

    // :TODO: poprawić style ujednolicić i posprzątać
    // :TODO: walidacja formatu daty

    var bazowy = `<html>
        <head>
            <title>Deklaracja dostępności</title>
            <meta name="deklaracja-dostępności" content="${zformularz.get('urldeklaracji')}">    
            <meta charset="UTF-8" />
            <meta name="description" content="Deklaracja dostępności" />
            <style>
            body {
                font-size: .813em;
                line-height: 1.385em;
                color: #575757;
                font-family: Verdana,sans-serif;
            }
    
            #content {
                width: 90%;
                background-color: white;
                padding: 30px;
            }
    
            .site-branding {
                width: 90%;
                min-height: 93px;
                height: 120px;
                margin: 0 auto;
                display: table;
            }
    
            #logo {
                vertical-align: middle;
                display: table-cell;
            }
    
            a,
            a:visited {
                color: #575757;
            }
    
            #logo img {
                display: block;
                max-width: none;
                margin:0 auto;
            }
    
            .site-title a,
            .site-title a:visited {
                color: #000;
                border-color: transparent;
                border-top-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                border-left-color: transparent;
                display: inline-block;
                text-decoration: none;
            }
    
            .site-title {
                border: none;
                display: table-cell;
                vertical-align: middle;
                font-family: Mukta;
                color: #000;
                line-height: 110%;
                font-kerning: normal;
                letter-spacing: 3px;
            }
    
            #main-content-wrapper {
                width: 980px;
                margin: 0 auto;
                background-color: #fff;
                -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .08);
                /*    -moz-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .08); */
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, .08);
                position: relative;
                z-index: 1;
                display: table-row;
            }
            h1 h2 h3 {
                clear: both;
                font-weight: 400;
                color: #154d88;
                line-height: 1.1em;
            }
        
            h1 {
                font-size: 2em;
            }
    
            h2 {
                font-size: 1.5em;
            }
            h3 {
                font-size: 1.17em;
            }
            .alert{
                color: #ff0000;
            }

    /* formularz */
    .w3-container, .w3-panel {
        padding: 0.01em 16px;
    }
    .w3-card-4, .w3-hover-shadow:hover {
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
    }
    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: .35em .625em .75em;
    }
    legend {
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }
    .w3-text-blue, .w3-hover-text-blue:hover {
        color: #2196F3 !important;
    }
    .w3-border {
        border: 1px solid #ccc !important;
    }
    .w3-input {
        padding: 8px;
        display: block;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 100%;
    }
    </style>
        </head>
        
        <body>
            <div class="site-branding" style="width: 980px;">
                <div id="logo">
                <a href="${zformularz.get('urlwww')}" rel="home"><img src="${zformularz.get('urllogo')}" alt="Logo ${zformularz.get('podmiot')}"></a>
                </div>
                <h1 class="site-title"><a href="${zformularz.get('urlwww')}" rel="home"> ${zformularz.get('podmiot')}</a></h1>      

            </div>
            <div id="main-content-wrapper">



                <div id="content" class="site-content" style="background-color: white; padding: 30px;">
                    <div id="primary" class="content-area index-page" style="padding: 0px;">
                        <main id="main" class="site-main" role="main">
                            <div id="a11y-deklaracja">
                                <h2>Deklaracja dostępności</h2>
                                <h3>Wstęp Deklaracji</h3>
                                <p id="a11y-wstep"><span id="a11y-podmiot">${zformularz.get('podmiot')}</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do <a href="${zformularz.get('urlwww')}" id="a11y-url" title="Link do strony domowej ${zformularz.get('podmiot')}">strony internetowej ${zformularz.get('podmiot')}.</a></p>
        
                                <p>Data publikacji strony internetowej: <span id="a11y-data_publikacja">${zformularz.get('data_publikacja')}</span>.</p>
                                <p>Data ostatniej dużej aktualizacji: <span id="a11y-data_aktualizacja">${zformularz.get('data_aktualizacja')}</span>.</p>
        
        
                                <div id="a11y-status">${zformularz.get('hstatus')}
                                   
        
                                <p>Oświadczenie sporządzono dnia <span id="a11y-data_sporzadzenie">${zformularz.get('data_sporzadzenie')}</span>. ${zformularz.get('hopis_strony')}
                                 ${niepelnosprawni} 
                                <h3>Informacje zwrotne i dane kontaktowe</h3>
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
                                <h3>Dostępność architektoniczna</h3>
                                <div id="a11y-architektura">${zformularz.get('harchitektura')}</div>
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


function FormatEmaila() {
    var formatemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.formularz.email.value.match(formatemail)) {
        return true;
    }
    else {
        alert("Wprowadzony adres email --> " + document.formularz.email.value + " <-- zdaje się być nieprawidłowy.");
        document.formularz.email.focus();
        throw new Error("Błędny format maila STOP");
    }
}

// data_publikacja data_aktualizacja data_sporzadzenie

function FormatDaty() {
    var formatdaty = /^\d{4}\-\d{2}\-\d{2}$/;
        if (document.formularz.data_publikacja.value.match(formatdaty)) {
        return true;
    }
    else {
        alert("Wprowadzona data --> " + document.formularz.data_publikacja.value + " <-- ma niewłaściwy format\n Przykład poprawnego formatu daty 2020-01-31.");
        document.formularz.data_publikacja.focus();
        throw new Error("Błędny format daty STOP");
    }
}

function Download() {
    UtworzText();
    let pobierz = [duda.value];
    var blob = new Blob(pobierz, { type: "text/html;charset=utf-8" });
    saveAs(blob, "deklaracja_dostepnosci.html");
}