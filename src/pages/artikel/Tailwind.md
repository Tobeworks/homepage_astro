---
layout: ../../layouts/Artikel.astro
title: Bye bye Bootstrap
publishDate: "2022-10-29 00:00:00"
img: /artikel/bootstrap.png
draft: true
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
Dazu kam ein ausgeklügeltes Grid System, das auf dem Flexbox-Modell aufbaue, nur besser, also ausschließlich per HTML zugänglich war. Ein Gamechanger in Sachen Layout.
Damit nicht genug, gab es nun endlich eine coole Icon-Library und weil das noch nicht cool genug war, war alles mobile only. Man konnte einen großen Teil der Responsivität, der gerade aufkommenden mobilen Welle, praktisch per HTML-Klassen erledigen.

## Die Migration des Todes: Bootstrap 3 auf 4 migrieren
Der Umstieg einer größeren Webapplikation von Bootstrap 3 auf die Version 4 war mit enormen Aufwand verbunden. Im Grunde wurde bei dem Versionssprung so ziemlich alles über den Haufen geworfen, sogar ganze Komponentengruppen fielen dem Update zum Opfer. Ich habe damals mehrere Wochen mit diesem Update verbraucht, denn es brachte auch etliche Verbesserungen, ua. ein verbessertes Grid System, deutlich verbesserten Zugang um Komponenten an die eigenen Bedürfnisse anzupassen und das erste Auftauchen der **Utility-Section**. Auch wurde bei dieser Version das erste Mal CSS-Grids unterstützt und auch die Flexbox-Funktionen wurden enorm ausgearbeitet. Ein Meilenstein, bei dem sich jedes Update gelohnt hat. Vor allem habe ich dort schon angefangen, die Utilities sehr häufig zu verwenden und auch die Sass-Unterstützung hat zum ersten Mal Benutzung gefunden. 

## Version 5, Wegfall von jQuery und Fokus auf die Utilites
Mit dem lang ersehnten Update auf Version 5 ging Bootstrap tendenziell weg von seinen Komponenten, und immer mehr in Richtung Utility. 
Die wirklich bahnbrechende Neuerung war, dass der dynamische Teil nun endlich auch mit Vanilla-Js und nicht mehr auf JQuery beschränkt war. Außerdem war es nun viel einfacher möglich Bootstrap in Bundlern wie Webpack zu verwenden. Jede Komponente, auch das JS, wurde zu einem einzigen verwendbaren CSS- oder JS-Modul. Das ging auch schon mit Version 4, wurde aber erst mit 5 entscheidend benutzbarer, weil das Legacy-JS komplett erneuert wurde. 
Mit der aktuellen Version ist es möglich, per Sass sein eigenes Utility-System aufzubauen, das heißt, die bestehenden Utilities logisch zu erweitern. 


## Utility-basierte CSS-Frameworks sind die Zukunft
Und an der Stelle kommt Tailwind ins Spiel. 
