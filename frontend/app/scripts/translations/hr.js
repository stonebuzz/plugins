'use strict';

angular
   .module('frontendApp')
   .config(function($translateProvider) {
      $translateProvider
         .translations('hr', {
            ON: "uključeno",
            SLOGAN: "Proširi GLPI s dodacima",
            TRENDING: "U trendu",
            TRENDING_SUB: "Popularni u ovom mjesecu",
            NEW: "Novi",
            NEW_SUB: "Najnoviji u katalogu",
            POPULAR: "Popularni",
            POPULAR_SUB: "S najviše pojedinačnih insatalacija",
            UPDATED: "Aktualizirani",
            UPDATED_SUB: "Nedavno aktualizirani dodaci",
            TAGS: "Oznake",
            TAGS_SUB: "S najvećim brojem dodataka",
            AUTHORS: "Autori",
            AUTHORS_SUB: "S najvećim brojem doprinosa",
            NAV_FEATURED: "Predstavljeni",
            NAV_ALLPLUGINS: "Svi dodaci",
            NAV_SEARCH: "Traži",
            NAV_SUBMIT_A_PLUGIN: "Pošalji dodatak",
            NAV_CONTACT: "Kontakt",
            NAV_DEVELOPER_GUIDES: "Priručnik za programere (API)",
            SEARCHBAR_PLACEHOLDER: "Traži",
            VERSION: "Verzija",
            COMPATIBLE_WITH: "Kompatibilno s",
            HOMEPAGE: "Web-stranica",
            ADDED: "Dodano",
            BY: "Autori",
            CONTRIBUTED_TO: "doprinio/doprinijela je {{plugincount}} dodataka",
            PLUGIN_CONTRIBUTED_TO: "doprinio/doprinijela je i radio/radila na ovim dodacima",
            TAGGED_WITH: "označeno",
            PLUGIN_TAGGED_WITH: "Dodaci s oznakom",
            QUESTION_SUGGESTION_PROBLEM: "Pitanja, prijedlozi, problem?",
            PLEASE_SEND_US_A_MESSAGE: "Pošalji nam poruku.",
            PLEASE_USE_SUGGESTION_TRACKER: "Ako je tvoja poruka zahtjev za značajku za GLPI softver, preporučujemo da koristiš naš sustav za praćenje prijedloga na",
            FIRSTNAME: "Ime",
            LASTNAME: "Prezime",
            EMAIL: "E-mail adresa",
            SUBJECT: "Predmet",
            YOUR_MESSAGE: "Tvoja poruka",
            SUBMIT: "Pošalji",
            SUBMIT_YOUR_PLUGIN: "Pošalji tvoj dodatak!",
            SUB_SUBMIT_YOUR_PLUGIN: "Navedi url adresu s opisom tvog dodatka.",
            GLPI_PLUGIN_CREATORS: "Stvaratelji GLPI dodataka",
            PAGINATION_RESULTS: "Rezultati",
            PAGINATION_TO: "do",
            PAGINATION_ON: "od ukupno",
            PAGINATION_ELEMENTS: "elementi",
            NO_RESULTS: "Nema rezultata",
            NEVER_UPDATED: "nikada aktualizirano nakon prve objave",
            LOADING: "Učitavanje",
            LOGIN: "Prijava",
            USER_PANEL: "Ploča korisnika",
            DISCONNECT: "Odspoji",
            SIGNIN: "Prijavi se",
            SIGNUP: "Registriraj se",
            INVALID_CREDENTIALS: "Navedeni su neispravni podaci prijave. Ako se ne sječaš lozinke pritisni „Zaboravio/la sam lozinku”",
            FIELD_REQUIRED: "* Obavezno",
            EXTERNAL_ACCOUNT_ALREADY_PAIRED: "Ovaj strani račun je već povezan s jednim drugim računom GLPI dodataka.",
            PLUGIN_ALREADY_WATCHED: "Već pratiš taj dodatak",
            YOURE_NOW_WATCHING: "Sada pratiš",
            PLUGIN_UNWATCHED: "Prekid praćenja",
            TAGGED: "Označeni",
            DOWNLOADED: "Preuzeti",
            THIS_MONTH: "Ovaj mjesec",
            THIS_WEEK: "Ovaj tjedan",
            TRANSLATIONS: "Prijevodi",
            XMLFILE_UNREACHABLE_URL: 'Nedostupan URL',
            XMLFILE_PARSE_ERROR: 'Greška XML obrade',
            XMLFILE_SPECIFICATION_ERROR: 'Greška specifikacije',
            PANEL_DECLARE_NEW_OAUTH2_APP: 'Odredi novu OAuth2 aplikaciju',
            PANEL_REGISTER_NEW_APP: 'Registriraj jednu novu aplikaciju za dobivanje API pristup',
            PANEL_APPLICATION_NAME: 'Ime aplikacije',
            PANEL_HOMEPAGE_URL: 'URL web-stranice (opcionalno)',
            PANEL_APP_DESCRIPTION: 'Opis aplikacije (opcionalno, npr. „API ključ za myscript.mylanguage”)',
            PANEL_APP_CREATE: 'Stvori',
            PANEL_MY_APPLICATIONS: 'Moje aplikacije',
            PANEL_EDIT_APP_SETTINGS: 'Uredi postavke tvoje aplikacije',
            PANEL_SETTINGS: 'Postavke',
            PANEL_CLIENT_ID: 'ID klijenta',
            PANEL_CLIENT_SECRET: 'Tajna klijenta',
            PANEL_APPLICATION_NAME_TOO_SHORT: 'Ime tvoje aplikacije mora sadržati barem {{n}} znakova',
            PANEL_APPLICATION_NAME_TOO_LONG: 'Ime tvoje aplikacije ne smije sadržati više od {{n}} znakova',
            PANEL_APP_HOMEPAGE_URL: 'URL web-stranice (opcionalno)',
            PANEL_HOMEPAGE_URL_NOT_VALID: 'Ovo nije ispravan URL',
            PANEL_APP_DESCRIPTION_TOO_LONG: 'Opis tvoje aplikacije ne smije sadržati više od {{n}} znakova',
            PANEL_APP_SAVE: 'Spremi',
            PANEL_APP_DELETE: 'Izbriši ovu aplikaciju',
            AUTHOR_NAME: 'Ime',
            AUTHOR_GLPI_PLUGINS_USERNAME: 'Korisničko ime na „GLPi dodaci”',
            AUTHOR_CONTRIBUTED_TO: 'Doprinio/doprinijela je',
            AUTHOR_PLUGIN_COUNT: '{{plugincount}} dodataka',
            PANEL_CLAIM_AN_AUTHORSHIP: 'Zatraži autorstvo',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC: 'Možeš zatražiti da si određeni autor nakon što je dodatak poslan putem XML-a.',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC2: 'Ako prihvatimo zahtjev (tj. provjerimo da si ti autor), tvoj će korisnik biti povezan sa svim tvojim dodacima i dobit ćeš određena administratorska prava',
            PANEL_CLAIM_AN_AUTHORSHIP_AUTHOR_NAME: 'Ime autora (točno kako je navedeno u oznaci &lt;autor&gt; dotičnih XML datoteka dodataka)',
            PANEL_CLAIM_AN_AUTHORSHIP_CLAIM: 'Zatraži',
            PANEL_DELETE_ACCOUNT: 'Izbriši svoj „GLPi dodaci” račun',
            PANEL_DELETE_ACCOUNT_CONFIRM: 'Za brisanje tvog „GLPi dodaci” računa moraš potvrditi lozinku.',
            PANEL_DELETE_ACCOUNT_PASSWORD: 'Lozinka',
            PANEL_DELETE_ACCOUNT_DELETE: 'Izbriši račun',
            DOWNLOADED_N_TIMES: 'Preuzeto {{n}} puta',
            ADDED_ON_DATE: 'Dodano {{date}}',
            UPDATED_MOMENTS_AGO: 'Aktualizirano {{momentsago}}',
            ADDED_MOMENTS_AGO: 'Dodano {{momentsago}}',
            TAGGED_ON_N_PLUGINS: 'Označeno na {{plugincount}} dodataka',
            CONTRIBUTED_TO_N_PLUGINS: 'Doprinio/doprinijela je {{plugincount}} dodataka',
            FINISHACTIVEACCOUNT_CLOSE_TO_THE_GOAL: 'Blizu si cilju',
            FINISHACTIVATEACCOUNT_WE_NEED_YOU_TO_VALIDATE_SOME_DATA: 'Moraš potvrditi neke podatke',
            FINISHACTIVEACCOUNT_CONFIRM_USERNAME: 'Potvrdi (ili promijeni) tvoje korisničko ime',
            FINISHACTIVATEACCOUNT_SELECT_PRIMARY_EMAIL: 'Odaberi e-mail adresu od jednog od tvojih stranih računa',
            FINISHACTIVEACCOUNT_CONFIRM: 'Potvrdi',
            LINKACCOUNT_AN_EXTERNAL_SOCIAL_ACCOUNT: 'Poveži jedan strani račun društvenih stranica',
            LINKACCOUNT_LINK_A_NEW_ACCOUNT: 'Poveži jedan novi račun',
            LINKACCOUNT_EXTERNAL_ACCOUNTS: 'Tvoji strani računi',
            LINKACCOUNT_SERVICE: 'Usluge',
            LINKACCOUNT_USERID: 'Korisnički broj ID-a',
            LINKACCOUNT_UNLINK: 'Odspoji',
            NOTIFICATIONS_PLUGINS_WATCHED: 'Praćeni dodaci',
            NOTIFICATIONS_YOURE_NOT_WATCHING_ANY_PLUGINS: 'Trenutačno ne pratiš nijedan dodatak',
            NOTIFICATIONS_YOULL_RECEIVE_NOTIFICATIONS_ON_UPDATE: 'Primit ćeš obavijesti o aktulaiziranju',
            NOTIFICATIONS_UNWATCH: 'prekid praćenja',
            NOTIFICATIONS_DISCOVER_AND_SUBSCRIBE: 'Nove dodatke možeš otkriti i pretplatiti se na obavijesti na stranicama dodataka',
            NOTIFICATIONS_PLEASE_CHECK_THOSE_TRENDING_PLUGINS: 'Pregledaj dodatke u trendu',
            PANEL_MY_INFORMATIONS: 'Moje informacije',
            PANEL_USERNAME: 'Korisničko ime',
            PANEL_USERNAME_TOOSHORT: 'Tvoje korisničko ime mora sadržati barem {{n}} znakova',
            PANEL_USERNAME_TOOLONG: 'Tvoje korisničko ne smije sadržati više od {{n}} znakova',
            PANEL_REALNAME: 'Stvarno ime',
            PANEL_REALNAME_TOOSHORT: 'Tvoje stvarno ime mora sadržati barem {{n}} znakova',
            PANEL_REALNAME_TOOLONG: 'Tvoje stvarno ne smije sadržati više od {{n}} znakova',
            PANEL_EMAIL: 'E-mail adresa',
            PANEL_FIELD_REQUIRED: 'Obavezno polje',
            PANEL_INVALID_EMAIL: 'Ovo je neispravna e-mail adresa',
            PANEL_WEBSITE: 'Web-stranica',
            PANEL_INVALID_WEBSITE: 'Ovo je neispravna URL adresa za web-stranicu',
            PANEL_PASSWORD: 'Lozinka',
            PANEL_PASSWORD_CONFIRMATION_DIFFERENT: 'Lozinka i potvrda nisu ista',
            PANEL_PASSWORD_TOOSHORT: 'Lozinka  mora sadržati barem {{n}} znakova',
            PANEL_PASSSWORD_TOOLONG: 'Lozinka ne smije sadržati više od {{n}} znakova',
            PANEL_CONFIRM_PASSWORD: 'Potvrdi lozinku',
            PANEL_UPDATE: 'Aktualiziranje',
            PANEL_ACTIONS: 'Radnje',
            PANEL_MANAGE_EXTERNAL_SOCIAL_ACCOUNTS: 'Upravljaj mojim stranim računima socijalnih mreža',
            PANEL_NOTIFICATIONS_SETTINGS: 'Postavke obvijesti',
            PANEL_MANAGE_API_KEYS: 'Upravljaj API ključevima (i odgovarajućim aplikacijama)',
            PANEL_PLEASE_DELETE_MY_ACCOUNT: 'Molim vas da izbrišete moj račun',
            PANEL_MY_PLUGINS: 'Moji dodaci',
            PANEL_AWAITING_CONFIRMATION: 'Čeka na potvrdu',
            PANEL_UNREACHABLE_XML_FILE_URL: 'Nedostupna URL adresa XML datoteke',
            PANEL_INVALID_XML: 'Neispravan XML',
            PANEL_DELETE_RELATION_TO_PLUGINS: 'Izbriši tvoju vezu s ovim dodatkom',
            PANEL_MANAGE_PERMISSIONS: 'Upravljaj dozvolama',
            PANEL_RELOAD_XML: 'Ponovo učitaj XML',
            PANEL_PLUGIN_PANEL: 'Ploča dodataka',
            N_VOTES: '{{n}} glasa',
            DOWNLOADS: 'preuzimanja',
            DOWNLOAD: 'Preuzmi',
            PLUGIN_UNWATCH: 'Prestani pratiti',
            PLUGIN_WATCH: 'Prati',
            PLUGIN_ISSUES: 'Problemi',
            SORT_BY: 'Razvrstaj prema',
            RELEVANCE: 'Važnost',
            POPULARITY: 'Popularnost',
            PLUGIN_PANEL: 'Ploča dodataka',
            PLUGIN_PANEL_SUMMARY: 'Sažetak',
            PLUGIN_PANEL_XML_STATE: 'XML stanje',
            PLUGIN_PANEL_N_TIMES: '{{n}} puta',
            PLUGIN_PANEL_CONTRIBUTORS: 'Doprinositelji (navedeni u XML datoteci)',
            PLUGIN_PANEL_SETTINGS: 'Postavke',
            PLUGIN_PANEL_XML_URL: 'URL autoritativne datoteke metaopisa dodatka (XML datoteka, pogledaj specifikaciju)',
            PLUGIN_PANEL_ACTIONS: 'Radnje',
            PLUGIN_PANEL_REFRESH_XML_FILE: 'Aktualiziraj XML datoteku',
            PLUGIN_PANEL_USER_PERMISSIONS: 'Upravljaj korisničkim dozvolama',
            PLUGIN_PANEL_URLNOTREACHABLE: 'URL adresa {{url}} nije dostupna.',
            PLUGIN_PANEL_FIELD_FAILS_TO_RESPECT_SPEC: 'Polje {{field}} ne odgovara specifikaciji',
            PLUGIN_PANEL_ERROR_AT_LINE_N: 'Greška u retku {{n}}',
            PLUGIN_PANEL_SEE_PUBLIC_PAGE: 'Pogledaj javnu stranicu',
            PLUGIN_PANEL_SAVE: 'Spremi',
            PLUGIN_PERMISSIONS_OF_PLUGIN: 'Upravljaj korisničkim dozvolama na stranici „GLPi dodaci” za dodatak „{{pluginkey}}”',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS: 'Korisničke dozvole',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_1: 'Za svaki redak dozvola postoje okviri za sve moguće dozvole koja možeš dodijeliti korisniku na stranici „GLPi dodaci” za dodatak.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_2: 'Jednostavno označi ili odznači okvire za trenutno postavljanje/uklanjanje prava u retku dozvola korisnika.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_3: 'Nakon postavljanja dozvola zatvori dijalog.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_4: 'Koristi crveni gumb s križićem za potpuno uklanjanje retka dozvola za tog korisnika, sa svim njegovim/njezinim pravima na dodatak',
            PLUGIN_PERMISSIONS_ADMIN: 'Administrator',
            PLUGIN_PERMISSIONS_ALLOWED_EVERYTHING: 'Dozvoljava sve',
            PLUGIN_PERMISSIONS_REFRESH_XML: 'Dozvoljava aktualiziranje sinkronizavije s XML datotekom',
            PLUGIN_PERMISSIONS_RECEIVE_NOTIFICATIONS: 'Primaj obavijesti o stanju prolaska XML-a',
            PLUGIN_PERMISSIONS_ALLOWED_CHANGE_XML_URL: 'Dozvoljava mijenjanje URL adrese XML-a',
            PLUGIN_PERMISSIONS_DELETE_USER_RIGHT: 'Izbriši pravo ovog korisnika',
            PLUGIN_PERMISSIONS_ADD_USER_PERMISSIONS: 'Dodaj korisnička prava',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_PLACEHOLDER: 'Please type the username, realname or email of a registered user, then use arrow and enter to select the user',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_NO_MATCHING_USERS: 'Nema odgovarajućeg korisnika.',
            SIGNIN_PAGE_TITLE: 'Povezivanje s „GLPI dodaci” računom',
            SIGNIN_USERNAME_OR_EMAIL: 'Korisničko ime ili e-mail adresa',
            SIGNIN_PASSWORD: 'Lozinka',
            SIGNIN_LOGIN: 'Prijava',
            SIGNIN_OR_CONNECT_WITH_AN_EXTERNAL_ACCOUNT: 'Ili se prijavi s jednim drugim računom',
            SIGNUP_REGISTER_MANUALLY: 'Registriraj se ručno',
            SIGNUP_USERNAME: 'Korisničko ime',
            SIGNUP_USERNAME_TOOSHORT: 'Tvoje korisničko ime mora sadržati barem {{n}} znakova',
            SIGNUP_USERNAME_TOOLONG: 'Tvoje korisničko ime ne smije sadržati više od {{n}} znakova',
            SIGNUP_USERNAME_BADCHARACTERS: 'Tvoje korisničko ime smije sadržati samo alfanumeričke znakove',
            SIGNUP_REALNAME: 'Stvarno ime',
            SIGNUP_REALNAME_TOOSHORT: 'Tvoje stvarno ime mora sadržati barem {{n}} znakova',
            SIGNUP_REALNAME_TOOLONG: 'Tvoje stvarno ime ne smije sadržati više od {{n}} znakova',
            SIGNUP_EMAIL: 'E-mail adresa',
            SIGNUP_EMAIL_INVALID: 'Ovo je neispravna e-mail adresa',
            SIGNUP_WEBSITE: 'Web-stranica',
            SIGNUP_WEBSITE_INVALID: 'Ovo je neispravna web-stranica',
            SIGNUP_PASSWORD: 'Lozinka',
            SIGNUP_PASSWORD_DIFFERENT: 'Lozinka i potvrda nisu ista',
            SIGNUP_PASSWORD_TOOSHORT: 'Lozinka mora sadržati barem {{n}} znakova',
            SIGNUP_PASSWORD_TOOLONG: 'Lozinka ne smije sadržati više od {{n}} znakova',
            SIGNUP_PASSWORD_CONFIRM: 'Potvrdi lozinku',
            SIGNUP_OR_LINK_YOUR_ACCOUNT: 'Ili poveži tvoj račun',
            SUBMIT_PLUGIN_URL: 'URL',
            SUBMIT_YOU_MUST_BE_AUTHED: 'Moraš se autentificirati',
            SUBMIT_YOU_MUST_BE_AUTHED_2: 'Za slanje tvog dodatka se moraš autentificirati',
            SUBMIT_PLEASE: 'Molim',
            SUBMIT_SIGNIN: 'Prijava',
            SUBMIT_IF_YOU_DONT_HAVE_AN_ACCOUNT: 'Ako već ne posjeduješ „GLPi dodaci” račun',
            SUBMIT_REGISTER: 'Registriraj se',
            SUBMIT_YOUR_XML_MUST_BE_VALID: 'Tvoj XML mora biti ispravan',
            SUBMIT_AND_RESPECT_THIS_FORMAT: 'i poštivati njegov format',
            SUBMIT_XML_DISPLAYED_NAME: 'Prikazano ime',
            SUBMIT_XML_KEY: 'Ime sustava',
            SUBMIT_XML_SHORT_DESCRIPTION: 'kratak opis dodatka za prikaz u popisu dodataka, samo tekst',
            SUBMIT_XML_LONG_DESCRIPTION: 'opširan opis dodatka za prikaz u karticama dodataka, dozvoljena upotreba Markdown formatiranja',
            SUBMIT_XML_YOUR_NAME: 'Tvoje ime',
            TAGS_TAGGED_ON_N_PLUGINS: 'Označeno s {{n}} dodacima',
            VIEWAPIKEY_PAGE_TITLE: 'Pogledaj podatke prijave klijenta',
            VIEWAPIKEY_CLIENT_CREDENTIALS: 'Podaci prijave klijenta',
            VIEWAPIKEY_CLIENT_ID: 'ID klijenta',
            VIEWAPIKEY_CLIENT_SECRET: 'Tajna klijenta',
            INVALID_XML_BECAUSE_UNREACHABLE_URL: 'Tvoja XML datoteka nije dostupna na navedenoj URL adresi',
            README: 'Readme',
            FORGOTPASSWORD_DIALOG_TITLE: 'Zaboravio/la si lozinku',
            FORGOTPASSWORD_DIALOG_FORMINTRO_1: "Ako se nalaziš ovdje, vjerojatno se radi o tome da si zaboravio/la lozinku.",
            FORGOTPASSWORD_DIALOG_FORMINTRO_2: "Moraš navesti tvoju e-mail adresu računa.",
            FORGOTPASSWORD_DIALOG_FORMINTRO_3: "Ako nikada prije nisi postavio/la lozinku (jer si se uvijek prijavio/la s Github računom), onda nije moguće obnoviti lozinku jer, kao što je rečeno, nikada je nisi postavio/la. Zatvori ovaj dijalog i autentificiraj se s Github računom.",
            SEND_MAIL_PASSWORD_RESET_LINK: "Pošalji poveznicu za resetiranje lozinke putem e-maila",
            CHANGELOG: 'Dnevnik promjena',
         });
   });
