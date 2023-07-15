---
layout: ../../layouts/Artikel.astro
title: "Warum die Mails von deiner Webseite im Spamfilter landen."
publishDate: "2023-07-06 00:00:00"
img: /artikel/shield.png
draft: false
description: |
  Und 6 Tipps, was du sofort tun kannst
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


Sehr ärgerlich: Ein Interessent, ein Lead oder potenzieller Kunde benutzt das Kontaktformular auf deiner Webseite, aber diese Nachricht kommt nie bei dir an? Du erfährst zufällig per Telefon, dass dir jemand schon mehrere Nachrichten geschrieben hat, und du hörst das zum ersten Mal? Eine Kundin beschwert sich, dass ihr wichtige Aufträge durch die Lappen gegangen sind, weil ihr Kontaktformular Mails nur sporadisch zustellt? Mails über deine WordPress-Website verschwinden im digitalen Nirwana, besser bekannt als Spam-Ordner, oder kommen überhaupt nicht erst an? Das kann fatal sein. 🤷‍♂️

Hier ist der Knackpunkt: Mails, die direkt aus zB WordPress verschickt werden, gehen normalerweise über den lokalen MTA des Servers. Das ist ungefähr so, als würdest du einen Brief ohne Absender verschicken (stark vereinfacht). Einige Empfänger, wie Google zum Beispiel, geben solchen Mails einen Spam-Score, und wenn dieser einen bestimmten Wert unterschreitet: Ab ins Spam-Nirvana oder werden sogar ganz rejected.

Das kann bei nahezu allen Formularen dazu führen, dass dir ein wichtiger Auftrag durch die Lappen geht. Du weißt schließlich nie, welche Anfragen nicht ankommen.

Aber keine Sorge, es gibt Lösungen:

1. ✅ Einen SMTP-Service implementieren: Mails werden über das Simple Mail Transfer Protocol (SMTP) geschickt, das im besten Fall via TLS oder SSL verschlüsselt ist und Zugangsdaten benötigt. Allein das sorgt schon für deutlich bessere Zustellraten.

2. ✅ SPF (Sender Policy Framework) verwenden: SPF hilft Empfängern zu überprüfen, ob eine eingehende Mail tatsächlich von deinem Server stammt. Es ist eine Sicherheitsmaßnahme, die dazu beiträgt, deine Mail-Zustellraten zu verbessern.

3. ✅ DMARC (Domain-based Message Authentication, Reporting and Conformance) nutzen: DMARC kombiniert SPF und DKIM (ein weiterer Sicherheitsstandard) und fügt einen Berichtsmechanismus hinzu. Es ist ein weiteres Tool, um deine Mail-Zustellraten zu verbessern.

4. ✅ Newsletter-Empfänger in die Whitelist aufnehmen: Fordere deine Kunden auf, deine Adresse zu ihrer Whitelist hinzuzufügen. Das erhöht die Chancen, dass deine E-Mails den Posteingang erreichen.

5. ✅ Alle eingehenden Anfragen in einer Datenbank speichern: Einfach per Login auf alle Anfragen reagieren, die über die Seite abgesetzt wurden. Kann auch als Übergangslösung verwendet werden. Man kann sicher 100% aller Anfragen abarbeiten.

6. ✅ Verwende professionelle E-Mail-Adressen: Die Verwendung einer professionellen E-Mail-Adresse, die mit deiner Domain übereinstimmt, kann dazu beitragen, das Vertrauen in deine E-Mails zu stärken und ihre Zustellbarkeit zu verbessern.



## About
Ich bin Tobias, der Gründer von Tobeworks und arbeite seit zwei Dekaden als Fullstack Webdeveloper. 