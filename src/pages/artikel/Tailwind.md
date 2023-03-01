---
layout: ../../layouts/Artikel.astro
title: Bye bye Bootstrap
publishDate: "2022-11-29 00:00:00"
img: /artikel/bootstrap.png
draft: false
description: |
  Warum Tailwind ein Gamechanger ist
tags:
  - webddesign
  - css
  - tailwind
  - boostrap
---
## So schön war die Zeit
Ich arbeite nun schon seit vielen Jahren, genauer gesagt seit Version 3, mit dem bekannten, von Twitter in die Welt gerufenen, CSS-Framework Bootstrap. Es war um 2015 das erste Framework, das es ermöglichte, einfach und schnell, fertige Komponenten in HTML-Seiten oder Templates einzubinden. Die Komponenten waren strukturell praktisch ready to use, alles was man brauchte war lediglich ein bisschen CSS. Man musste, die für Frontends immer wiederkehrende Blöcke wie Navbars oder Karussells, nun nicht mehr selbst bauen, sondern konnte auf eine riesige Library zurückgreifen, welche die Seitenerstellung enorm erleichterte. Rapid Prototyping ging nun noch schneller von der Hand. Dazu waren die Komponenten sogar teilweise dynamisch und vor allem waren sie kompatibel mit dem in dieser Zeit gängigsten JS-Framework nämlich jQuery.
Dazu kam ein ausgeklügeltes Grid System, das auf dem Flexbox-Modell aufbaute, nur besser, also ausschließlich per HTML zugänglich war. Ein Gamechanger in Sachen Layout.
Damit nicht genug, gab es nun endlich eine coole Icon-Library und weil das noch nicht cool genug war, war alles full responsive. Man konnte einen großen Teil der Responsivität, der gerade aufkommenden mobilen Welle, praktisch per HTML-Klassen erledigen. Das hat das Web nachhalting verändert, aber auch viele Seiten gleich oder ähnlich aussehen lassen.  Frontendwebframeworks killed the internet design star.

## Die Migration des Todes: Bootstrap 3 auf 4 migrieren
Der Umstieg einer größeren Webapplikation von Bootstrap 3 auf die Version 4 war mit enormen Aufwand verbunden. Im Grunde wurde bei dem Versionssprung so ziemlich alles über den Haufen geworfen, sogar ganze Komponentengruppen fielen dem Update zum Opfer. Ich habe damals mehrere Wochen mit diesem Update verbraucht, denn es brachte auch etliche Verbesserungen, ua. ein verbessertes Grid System, deutlich verbesserten Zugang um Komponenten an die eigenen Bedürfnisse anzupassen und das erste Auftauchen der **Utility-Section**. Auch wurde bei dieser Version das erste Mal CSS-Grids unterstützt und auch die Flexbox-Funktionen wurden enorm ausgearbeitet. Ein Meilenstein, bei dem sich jedes Update gelohnt hat. Vor allem habe ich dort schon angefangen, die Utilities sehr häufig zu verwenden und auch die Sass-Unterstützung hat zum ersten Mal Benutzung gefunden. 

## Version 5, Wegfall von jQuery und Fokus auf die Utilites
Mit dem lang ersehnten Update auf Version 5 ging Bootstrap tendenziell weg von seinen Komponenten, und immer mehr in Richtung Utility. 
Die wirklich bahnbrechende Neuerung war, dass der dynamische Teil nun endlich auch mit Vanilla-Js und nicht mehr auf JQuery beschränkt war. Außerdem war es nun viel einfacher möglich Bootstrap in Bundlern wie Webpack zu verwenden. Jede Komponente, auch das JS, wurde zu einem einzigen verwendbaren CSS- oder JS-Modul. Das ging auch schon mit Version 4, wurde aber erst mit 5 entscheidend benutzbarer, weil das Legacy-JS komplett erneuert wurde. 
Mit der aktuellen Version ist es möglich, per Sass sein eigenes Utility-System aufzubauen, das heißt, die bestehenden Utilities logisch zu erweitern. 


## Utility-basierte CSS-Frameworks sind die Zukunft
All die Probleme, die mit der Nutzung von Bootstrap aufkommen, werden mit Frameworks wie Tailwind größtenteils praktisch gelöst. Tailwind baut sein komplettes System utility-based auf. Das heißt, für jede Anwendung kommt eine spezifische Klasse ins Spiel. Für einen zentrierten Text dann sowas, wie man es vielleicht von Bootstrap schon kennt wie `text-center`, oder für das Layout sowas `row` oder `col`. 
Aber Tailwind geht noch viel weiter. Man kann sein komplettes Layout ohne Zuhilfenahme von externen CSS full responsive gestalten. Dazu kann man, auch ähnlich wie in Bootstrap, Breakpoints wie `sm`, `md` oder `xl` benutzen. Genau wie in BS gilt auch in Tailwind, "mobile first". Jede Klasse wird von der kleinsten zur größten Auflösung gesetzt. Das Ganze setzt sich dann auf alle möglichen States und sogar Animationen weiter fort. In sicher 90% der Fälle braucht es gar keine externen CSS mehr. Ein Layout lässt sich praktisch komplett per Config- File steuern. Das ist eine kleine Revolution.


## Nachteile Utility-basierter CSS-Frameworks
Bei aller Euphorie, die gibt es. Denn bei steigender Komplexität hat man irgendwann eine ganz schöne Klassen-Suppe vor sich. Und gerade bei größeren Anwendungen, wie Dashboards, verliert man leicht auch mal den Überblick, denn jedes Element muss man praktisch immer neu per Klassen gestalten. Aber auch dafür gibt es in Tailwind Abhilfe: Man kann immer wiederkehrende Konstrukte, wie zB Buttons, auch in `@apply` Klassen gruppieren. 

## PostCSS makes it possible
Tailwind nutzt ein sehr modernes CSS, das von vielen Browsern noch gar nicht interpretiert wird. Um die Möglichkeiten von modernem CSS aber für alle Browser nutzbar zu machen, geht über den Postprozessor [PostCSS](https://postcss.org/), der im Hintergrund für Tailwind, aber auch für den Rest der App, das Klassenmanagement umsetzt. So wird später im kompilierten CSS-File nur CSS verwendet, das die meisten Browser auch verstehen. Während der Entwicklung kann aber schon auf die neuesten Features zugegriffen werden. Gerade PostCSS stellt hier einen entscheidenden Vorteil gegenüber älteren Präprozessoren wie LESS oder SASS dar.

## In the end everything is...
Zusammenfassend kann man sagen, dass Bootstrap schon ein relativ umfassendes Framework ist, das sich an Entwickler richtet, die eine schnelle und einfache Möglichkeit benötigen, eine benutzerfreundliche Website zu erstellen. Tailwind hingegen richtet sich an Entwickler, die mehr Kontrolle und Anpassbarkeit benötigen und ein einzigartiges Design erstellen möchten. Die Wahl zwischen den beiden hängt also von den individuellen Bedürfnissen und Vorlieben ab. Tailwind ist für professionelle Entwickler zur Zeit wohl state of the art, auch wenn in es inder Community natürlich auch negative Stimmen gibt, weil das HTML natürlich nicht schöner wird, wenn man pro Element 50 Klassen verwendet.