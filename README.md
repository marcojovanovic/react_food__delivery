# Dokumentacija Food Delivery Projekta
---

### Osnovne funkcionalnosti projekta

```

#dark/light mode, #firebase, #push form data to firebase, #react map, #react map popup, #react map markers, #filtering, #code splitting #lazy loading #yup #context api #use-hook-form #error handling #deployment 

```

### Dokumentacija koriscena u projektu 


[react mapbox](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/)

[react mapbox](https://www.npmjs.com/package/react-mapbox-gl)

[react mapbox design](https://docs.mapbox.com/help/getting-started/map-design/)

[react mapbox marker](https://docs.mapbox.com/help/getting-started/add-markers/)

[react mapbox poput](https://docs.mapbox.com/mapbox-gl-js/example/popup/)

[Forms Yup](https://github.com/jquense/yup)

[use-hook-form](https://react-hook-form.com/)

[Schema validation](https://react-hook-form.com/get-started#SchemaValidation)

[styled components theming](https://styled-components.com/docs/advanced)

[styled components styling objects](https://styled-components.com/docs/advanced#style-objects)





## Mapbox fix
---

```
Odmah da naglasim da projekat nije preuzet sa nekog YouTube tutorijala ili kursa.  Zelim da naglasim da svi koji koriste ###react-map-gl ili mapbox module imace problem. Naime, u lokalnom okruzenju sve izgleda dobro, ali prilikom npm run build projekta mapa, se nece videti vec samo markeri ukoliko ih imate. Svakako da

```
```
Tu je Google morao pomoci, ali i tamo ima desetak razlicih resenja, jedno je konacno dalo rezultat.

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

index.js
package.json: "worker-loader": "^3.0.8",

Ovo ostavljam kao podsetnik za sebe ako se budem bavio bibliotekom, ali i za onoga ko cita ovaj dokument moze da mu bude korisno

```
## Lazy loading (Code Splliting)  Home Page
---

```
const HomeMainImage = lazy(() => import('../components/HomeMainImage'));
      <Suspense fallback={''}>
        <HomeMainImage />
      </Suspense>

```

## Dark/Light Mode Home Page
---

> Styled components su mi dale ideju kako da uradim dark/light mode 
  Koristeci theme provider koji su deo theming styled components stavljajuci u app.js naseg projekta obezbedili smo da samo varijable iz contexta.js prosledjujemo do pojedinacnih komponenti i da ako prosledimo nekoj stayled componenti (div, img, link, ul ...) props ona moze da koristi theming

```


import { ThemeProvider } from 'styled-components';

App.js

  <ThemeProvider theme={themes[theme]}></ThemeProvider>



  const LightTheme = {
    pageBackground: '#f5f5f5',
    linkColor: '#333',
    divColor: '#e22255',
    toggleColor: '#e22255',
    sideColor: 'white',
  };

  const DarkTheme = {
    pageBackground: '#333',
    linkColor: '#f5f5f5',
    divColor: '#bc3e5f',
    toggleColor: '#bc3e5f',
    sideColor: 'rgba(0,0,0,0.3)',
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  pr. Kako koristimo u komponenti

  background-color: ${(props) => props.theme.pageBackground};

```



```
Razlog zbog cega koristim lazy loading je taj, da prilikom dolaska na pocetnu stranu, jako los utisak na korisnika ostavlja kada se neka slika dugo loaduje i zato sam smatrao da bi lazy loading resio i poboljskao korisnicko iskustvo

```

### My Location Page
---

```
Pre pocetka projekta sam pravio plan sta cu raditi i nekako mi se cinilo da bi ovo bilo simpaticno resenje koje bi dalo vrednost projektu. Kako se je tema projekta isporuka hrane, imalo bi smisla korisniku dati lokaciju firme, tako da bi imao predstavu za koliko moze da ocekuje da mu se izvrsi isporuka. Zadovoljan sam sa dokumentacijom mapbox biblioteke, no bug prilikom build mi je zaista oduzeo dosta vremena, cak sam pojedine strane brze uradio neko sto sam resio ovaj npm run build problem.

Gore sam napisao koja dokumentacija je bila korisna da se napravi ova strana

```

### Contact Page
---
```
Moze se zapaziti da se pri radu sa formama najpre preporucuje rad sa modulima kao sto su Formik i use-hook-form pre nego klasicano obezbedjivanje formi koristeci useRef hook ili kontorlisane forme preko state. Tako sam odlucio da istrazim ovu temu, dokumentaciju i nasao do zaista zadovoljavajuceg resenja, tako da cu uvek u radu sa formom koristiti use-hook-form, prakticno je i jednostavno
 Prikaz greske me je odusevio
```

### Product Page
---
```
Da bismo prikazali hranu koju bi klijent mogao da naruci, morao sam prethodno da pripremim u data.js fajlu, zatim prosto izlistavamo i prikazujemo hranu kao i njene kategorije. Naposletku obezbedjujemo filtriranje hrane, jer ako bismo u praksi imali prikaz stotinak vrsta hrane, onda bi korisniku bila potrebna pomoc u pregledu

Za ovakav tip projekta koji nema neku extra tezinu smatrao sam da bi bio "overkill" da sada aktiviram neku bazu podataka ili serverless, prilicno sam vremena potrosio na react-mapbox debbuging tako da sam odlucio da idem dalje bez neke komplikovanije arhitekture 

```
