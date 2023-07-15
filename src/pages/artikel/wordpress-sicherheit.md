---
layout: ../../layouts/Artikel.astro
title: "Wordpress und Sicherheit"
publishDate: "2023-06-31 00:00:00"
img: /artikel/spamfilter.png
draft: false
description: |
  Hätte ich das über WordPress mal früher gewusst,... ich hätte mir einiges an Arbeit erspart.
tags:
  - wordpress
  - e-mail-zustellung
  - smtp
  - spf
  - dmarc
  - whitelist
  - kundenkommunikation
  - spam-probleme
  - kontaktformular
  - e-mail-sicherheit
  - webseiten-optimierung
  - e-mail-management
  - online-marketing
  - webentwicklung
  - kundenbindung
---


Meine Beziehung zu WordPress würde ich als Hassliebe bezeichnen. Einerseits ist es weit verbreitet und bietet daher eine nahezu unendliche Bibliothek an schnell einsetzbaren Plugins und Themes. Das ist super praktisch, wenn es mal schnell gehen soll. Doch andererseits bin ich fest davon überzeugt, dass viele WordPress-Nutzer eigentlich gar kein WordPress benötigen. Viele Nutzer holen sich damit nur eine ständig offene Baustelle und ein potentielles Sicherheitsrisiko ins Haus, obwohl sie eigentlich nur eine schnelle Landingpage benötigen, die vor allem mal konvertieren soll. #offtopic: Natürlich kann WordPress das leisten, aber ein sauberer, dedizierter Build wäre an der Stelle deutlich effizienter, just ask me.

Mit meinen vielen Jahren Erfahrung im WP-Kosmos kenne ich mich gut aus, inklusive Plugin- und Theme-Development. Und glaubt mir, ich habe schon einiges gesehen: Von tollen, schnellen Seiten, die mit Pagebuildern erstellt wurden, bis hin zu spektakulären Hacks, die aufgrund eines erst wenige Tage veralteten Plugins und eines Exploits gesamte Multi-User-Server-Systeme lahmgelegt oder mit Malware verseucht haben. Eure Kunden werden sich sicher freuen, wenn statt ihrer coolen Landingpage plötzlich eine Werbung für eine Creme gegen Nagelpilz erscheint.

Die Wiederherstellung solcher Systeme hat mitunter Tage verschlungen, weil Agenturen, Admins und Nutzer es immer wieder versäumt haben, wichtige Updates einzuspielen und sich das auch bei indonesischen Scriptkiddies rumgesprochen hat. Aber es gibt gute Nachrichten: Mit der Zeit und nach viel Lehrgeld, habe ich effiziente Wege gefunden, um WordPress größtenteils sicher zu machen.

Hier sind einige meiner Tipps:

✅ Updates einspielen: Jaja, das mag offensichtlich klingen, aber es wird eigentlich immer vernachlässigt. Halte WordPress, deine Plugins und Themes immer auf dem neuesten Stand - und damit meine ich wirklich fast täglich.

✅ Sichere Passwörter verwenden: Wähle starke, einzigartige(!) Passwörter für deinen WordPress-Admin-Bereich und ändere sie regelmäßig. Nicht ein Passwort für alles, denn im schlimmsten Fall, hat der Cracker dann Zugang zu allen Wordpress Seiten auf dem Server (alles schon gesehen).

✅ Begrenze Login-Versuche: Es gibt Plugins, die die Anzahl der Login-Versuche begrenzen, um Brute-Force-Attacken zu verhindern.

✅ Zweifaktorauthentifizierung: Eine weitere Schutzschicht ist die Aktivierung der Zweifaktorauthentifizierung für deine WordPress-Website.

✅ Verstecke deine WordPress-Version: Hacker nutzen bekannte Sicherheitslücken in bestimmten WordPress-Versionen. Also verstecke die Version, die du verwendest.

✅ Backup, Backup, Backup: Stelle sicher, dass du regelmäßige Backups deiner Webseite machst. Im Falle eines Hacks kannst du so deine Webseite schnell wiederherstellen. Und bitte: auf einen Drittserver damit (zB AWS oder GCP).

✅ Verwende eine Firewall: Diese gibt es in diversen Ausführungen, sie wird meistens direkt in die Serverkonfiguration eingehängt und verhindert einen großen Teil von automatisierten Angriffen.

✅ Sicherheitsscan mit WP-Scan: Ein regelmäßiger Scan deiner WordPress-Website kann Schwachstellen aufdecken und dir helfen, potenzielle Sicherheitsrisiken zu minimieren. WP-Scan macht seinen Job da wirklich sehr gut und kann auch über die Konsole automatisiert werden.

✅ Premium Tipp: Webserver-Berechtigungen und PHP: Sieh zu, dass PHP nicht überall einfach ausgeführt werden kann. In Verzeichnissen wie wp-content sollte der PHP-Parser deaktiviert werden. Das kann tricky sein, weil diverse Plugins davon abgehalten werden, richtig zu arbeiten. Es ist aber das effektivste Mittel gegen Remote Code Execution.

Die Sicherheit deiner WordPress-Website ist kein einmaliges Projekt, sondern erfordert ständige Aufmerksamkeit und Pflege. Mit diesen Maßnahmen kannst du jedoch bereits einen Großteil potenzieller Angriffe abwehren. 💪🔐


## About
Ich bin Tobias, der Gründer von Tobeworks und arbeite seit zwei Dekaden als Fullstack Webdeveloper. 