# Quiz - Angular Gyakorló Feladat
- Név: `ang-pr-quiz`
​
## Feladat
- Készíts egy quiz jellegű appot, amelyben kérdésekre lehet felelni.
- Az app két fő részből áll: teacher és student nézet.
- A teacher új quiz-eket tud létrehozni és azokat szerkeszteni.
- A student ki tudja tölteni a quiz-t, és értékelést kap róla.
- Egyenlőre nem szükséges azonosítás az alkalmazásba.
- ok A megjelenéshez használj Bootstrap és Font-Awesome keretrendszereket.
​
## Az alkalmazás részei
### Classes
1. ok Student: id, name, email, points, active
2. ok Answer: id, content, correct:Boolean
3. ok Question: id, question, answers<Answer[]>, points, active
4. ok Quiz: id, title, description, questions<Question[]>, active
​
### Services
1. o StudentService: a tanulók adatait szolgáltatja, CRUD műveleteket ismeri.
2. o QuestionService: Question CRUD.
3. o QuizService: Quiz CRUD.
- Általános működésük: készítsd el a json-server számára a szükséges fájlt, és 
helyezd el benne a tömböket: students, quizzes, questions (az answer-eknek 
nem kell a szerverről jönniük, elég ha el vannak mentve a Question-ben).
- A json-server szolgáltassa az adatokat, és biztosítsa a CRUD műveletekhez a 
backend-et.
​
### Components
1. AdminComponent: itt táblázatos formában jelennek meg a quiz-ek, minden sor 
végén van törlés és szerkesztés gomb. A táblázat szűrhető és rendezhető. Külön 
gomb van az új quiz létrehozására.
2. QuizEditorComponent: itt lehet Quiz-t létrehozni vagy szerkeszteni. Erre 
egy űrlap szolgál, validációval.
3. QuestionEditorComponent: ez a QuizEditorComponent-ből nyílik meg a 
`New Question` gombra kattintva. Egy kérdés csak egy Quiz-hez tartozhat. Ez is 
egy űrlap, ahol validálva lehet bevinni az egyes kérdések adatait.
4. QuizComponent: megjeleníti az egyes Quiz-eket a tanulóknak. Kiírja a kérdést 
és a lehetséges válaszokat; választás és továbblépés után pedig jó válasz 
esetén növeli a pontokat, amelyek a nézet jobb felső sarkában láthatók. Csak 
előre gomb kell, ne lehessen visszalépni. A megjelölt válasz vagy háttérszínnel, 
vagy checkbox-szaal legyen kiemelve. Elég az egyválasztós lehetőség, nem kell 
több kérdéstípus.
5. HomeComponent: itt listázza ki az alkalmazás kártyákon a quiz-eket. Ezek 
közül tud egyet választani a tanuló, és utána azt kitölteni. Kattintásra a 
QuizComponent nyílik meg az adott Quiz-zel. A kis kártyákon látszik a Quiz címe 
és rövid leírása is.
6. NavigationComponent: egyszerű Bootstrap-navigáció, Home, Admin oldalakkal.
- Általános jellemzők: 
- az űrlapokon minden mező legyen kötelező, a szövegeknek legyen min. hossza.
- emailhez használhatod az angular email direktívát:  
```html
<input email required name="email" [(ngModel)]="student.email" class="form-control">
```
- a boolean típusú adatokat select vagy checkbox elemmel lehessen módosítani 
- a táblázatokban nem kell a beágyazott objektumokra szűrni/rendezni
- lehetőleg egyedi scss segítségével finomítsd a megjelenést
​
## Összefoglalás
- A nem szabályozott kérdésekben szabad kezed van.
- Bootstrap keretrendszert használj.
- A validációhoz Template-Driven űrlapokat használj.
- Ha tudsz, akkor készíts BaseService-t, hogy ne kelljen a metódusokat minden 
service-ben megismételned. 
[Példa](https://github.com/cherryApp/str-angular-project-big-private/blob/main/src/app/service/base.service.ts
