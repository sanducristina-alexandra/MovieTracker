Movie Tracker

Sandu Cristina-Alexandra 
https://github.com/sanducristina-alexandra/MovieTracker
https://www.youtube.com/watch?v=5bN3wg_IxkE&ab_channel=cristinaalexandra 
https://movie-tracker-roan.vercel.app
	În era digitală actuală, unde accesul la conținutul multimedia este omniprezent, gestionarea și explorarea bibliotecilor extinse de filme reprezintă o provocare pentru mulți pasionați de cinematografie. Cu evoluția tehnologică continuă și apariția serviciilor cloud, soluțiile pentru această problemă devin din ce în ce mai accesibile și eficiente.

	Un tracker de filme se încadrează în această paradigmă a inovației tehnologice, aducând în prim-plan o soluție modernă și scalabilă pentru gestionarea și descoperirea de filme. Prin intermediul serviciilor cloud, această aplicație oferă utilizatorilor săi o experiență fluentă și personalizată în explorarea și administrarea propriilor colecții de filme.

	Permite utilizatorilor să descopere, gestioneze și exploreze colecțiile lor de filme. Acesta oferă funcționalități simple și eficiente pentru adăugarea, actualizarea, ștergerea și obținerea de filme dintr-o bază de date MongoDB. Cu acest API, utilizatorii pot naviga ușor prin filmele lor preferate, pot actualiza detaliile acestora și pot adăuga noi titluri folosind un simplu formular.

 
GET /: Acesta este un răspuns pentru o cerere către ruta de bază a aplicației, adică rădăcina sau homepage-ul. Codul "200" indică faptul că cererea a fost realizată cu succes, iar timpul de 13 milisecunde indică timpul necesar serverului pentru a procesa și a răspunde la cerere.
GET /api/movies: Acesta este un răspuns pentru o cerere către ruta "/api/movies", care este probabil ruta folosită pentru a obține lista de filme din aplicație. Codul "200" indică din nou faptul că cererea a fost realizată cu succes, iar timpul de 44 milisecunde indică timpul necesar serverului pentru a procesa și a răspunde la cerere.


 
•	Funcția deleteMovie(id):
Această funcție este utilizată pentru a șterge un film din baza de date. Ea primește ca parametru ID-ul filmului pe care se dorește ștergerea. Apoi, funcția utilizează metoda fetch pentru a face o cerere DELETE către ruta corespunzătoare API-ului (/api/movies) și include ID-ul filmului în query string. După ce primește un răspuns de la server, funcția transformă răspunsul într-un obiect JSON și îl returnează pentru a fi utilizat ulterior. În cazul în care apare o eroare în timpul procesului, aceasta este capturată și afișată în consolă.


•	Funcția createMovie(entry):
Această funcție este utilizată pentru a crea un nou film în baza de date. Ea primește ca parametru un obiect entry care conține detaliile noului film. Funcția utilizează metoda fetch pentru a face o cerere POST către ruta corespunzătoare API-ului (/api/movies). În cererea POST, se includ header-ele necesare pentru a specifica tipul de conținut trimis către server (Content-Type: application/json) și corpul cererii conține detaliile filmului sub formă de obiect JSON. După ce primește un răspuns de la server, funcția transformă răspunsul într-un obiect JSON și îl returnează pentru a fi utilizat ulterior. În cazul în care apare o eroare în timpul procesului, aceasta este capturată și afișată în consolă.
 
 
