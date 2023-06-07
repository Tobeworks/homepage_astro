---
layout: ../../layouts/Artikel.astro
title: "Vermeide die Cookie Consent Fehler Falle"
publishDate: "2023-06-07 00:00:00"
img: /artikel/cookie-consent.png
draft: false
description: |
  So prüfst und optimierst du deine Cookie-Einwilligung
tags:
  - cookie-consent
  - wordpress
  - datenschutz
  - DSGVO
  - website-konfiguration
  - browser-tools
  - compliance-audit
  - online-privacy
  - tracking-cookies
  - datenschutzrecht
---

Seit Jahren sehen wir auf fast jeder Webseite diese grauen Kästen, die als Cookie Consents bekannt sind. Wo früher eine schöne Website eine Einladung zu einer visuell ansprechenden Nutzererfahrung war, ist sie heute oft eine Aufforderung zum Klicken und Konfigurieren, bevor die eigentliche Reise beginnt. Aber das ist heute nicht unser Thema.
Abgesehen von der Ästhetik haben diese kleinen Fenster einen entscheidenden technischen Nutzen. Selbst bei großen Agenturen habe ich schon erhebliche Probleme bei der Implementierung dieser Funktionen gesehen. Das Verstehen dieser Mechanismen kann potenziell teure Fehler vermeiden.

## Cookie-Consents - die Grundlagen
Cookie Consents verschiedener Anbieter haben eine ähnliche Funktion. Sie blockieren bis zur ausdrücklichen Zustimmung des Benutzers die Codeteile einer Webseite, die für das Setzen von Drittanbieter-Cookies verantwortlich sind. Laut DSGVO muss dieser Code deaktiviert bleiben, bis der Benutzer ausdrücklich zustimmt, dass Drittanbieter-Cookies gesetzt werden dürfen. Es dürfen also keine Tracking-Cookies ohne Zustimmung gesetzt werden.

## Kostenlose Scripts, npm und Co.
Hier beginnt es kompliziert und für Laien undurchsichtig zu werden. Von kostenlosen Scripts bis zu teuren kommerziellen Suites verschiedener Hersteller gibt es mittlerweile eine riesige Auswahl an Software, die sich in ihren technischen Ausstattungen teilweise erheblich unterscheidet. In vielen nicht EU Ländern reicht beispielsweise ein einfaches modales Fenster aus, das darauf hinweist, dass Cookies gesetzt werden. Viele dieser oft kostenlosen Scripts haben jedoch keine Code-Blockierfunktion vorgesehen. Der Tracking-Code wird geladen und Cookies werden einfach im Hintergrund gesetzt. Mit anderen Worten: Es sieht aus wie ein Cookie Consent, erfüllt aber nicht die EU-Standards.



## WordPress, Plugins und kommerzielle Anbieter
Als Anwender oder Betreiber von (WordPress-)Webseiten ist man bei großen PnP-Anbietern wie Borlabs oder OneTrust gut aufgehoben. Grundsätzlich kann man hier nicht viel falsch machen - es sei denn, man konfiguriert diese Tools falsch. Und das sehe ich leider erschreckend oft.
Diese Programme bzw. Plugins verfügen häufig über eigene Crawling-Systeme, die den Code der Webseite durchsuchen und die Plugins entsprechend automatisch konfigurieren. Praktisch jeder Codescnipsel, der in irgendeiner Weise Drittanbieter-Cookies setzt bzw die entsprechenden Remote-Scripts, müssen im Vorfeld registriert werden. Einige Scripts schaffen es jedoch immer wieder, unter dem Radar der Crawler durchzuschlüpfen. Vor allem bei Scripts von unbekannteren Tracking-Anbietern, die die Crawler nicht ohne Weiteres erkennen, ist manuelle Eingabe bzw Konfiguration erforderlich.
Da ich standardmäßig alle Tracking-Cookies im Browser blockiere und entsprechend gewarnt werde, erkenne ich auch sofort, wenn Cookie Consents nicht ordnungsgemäß konfiguriert sind. Und das ist bei gefühlt jeder dritten Seite der Fall. Dies kann bei Abmahnungen teuer werden und den Betreiber bis zu sechsstellige Beträge kosten, wenn Tracking.Cookies schon vor dem eigentlich Consent gesetzt werden und munter drauf los tracken. ABer auch das Setzen und spätere Entfernen ist eine öfter gesehen Fehlkonfiguration.
Wie findest du heraus, ob deine Seite betroffen ist?


1. **Nutze Browser-Tools:** Tools wie die Entwicklertools in Chrome, Firefox und anderen Browsern können dir anzeigen, welche Cookies deine Webseite setzt. Du kannst damit überprüfen, ob Cookies gesetzt werden, bevor der Nutzer seine Zustimmung gegeben hat. Mehr dazu unten.

2. **Nutze Online-Cookie-Checker:** Es gibt Online-Tools, die eine Website daraufhin überprüfen können, ob sie den Cookie-Vorschriften entspricht. Beispiele dafür sind CookieMetrix und Cookiebot.

3. **Führe DSGVO-Compliance-Audits durch:** Es gibt Dienstleister, die DSGVO-Compliance-Audits durchführen. Diese können nicht nur überprüfen, ob dein Cookie Consent korrekt funktioniert, sondern auch, ob alle anderen Aspekte deiner Website den DSGVO-Bestimmungen entsprechen. Frag mich einfach, wenn ich dir einen solchen Anbieter empfehlen soll.

4. **Hole dir Rechtsberatung:** Wenn du unsicher bist, hole dir Rat von einem auf Datenschutzrecht spezialisierten Anwalt. Dieser kann dir über die genauen Anforderungen aufklären und dir helfen, deinen Cookie Consent korrekt zu konfigurieren.

5. **Führe dein eigenes Crawling durch:** Wenn du über technisches Know-how verfügst, kannst du auch selbst ein Crawling-Tool einsetzen, um deinen Code auf das Setzen von Drittanbieter-Cookies zu überprüfen.

Diese Vorschläge sind nicht abschließend. Es könnte notwendig sein, eine Kombination aus mehreren oder allen diesen Methoden zu verwenden, um sicherzustellen, dass dein Cookie Consent ordnungsgemäß konfiguriert ist. Bleib wachsam und achte darauf, dass deine Website immer den aktuellen Datenschutzbestimmungen entspricht.
Wie kann ich sofort mit den Developer-Tools des Browsers herausfinden, ob meine Seite noch Tracking Cookies setzt oder Tracking Cookies setzt, obwohl ein Cookie Consent benutzt wird?


**Für Chrome:**
1. **Öffne deine Webseite:** Navigiere zu deiner Webseite im Chrome-Browser.
2. **Öffne die Entwicklertools:** Drücke die Taste F12.
3. **Navigiere zum "Application"-Tab:** In den Entwicklertools findest du oben eine Menüleiste. Klicke dort auf "Application" (oder "Anwendung" in der deutschen Version).
4. **Überprüfe die Cookies:** Auf der linken Seite unter "Storage" (oder "Speicher") findest du eine Option namens "Cookies". Wenn du darauf klickst, siehst du alle Cookies, die deine Webseite setzt.
5. **Unterscheide die Cookies:** Nun musst du nur noch die Drittanbieter-Cookies von den technischen Cookies unterscheiden können. Das ist für Anfänger sicher nicht immer einfach, aber mit der Zeit klappt es immer besser. Ein Tracking-Cookie von z.B. Google heißt z.B. __gads (für Google Ads).

**Für Firefox:**
1. **Öffne deine Webseite:** Navigiere zu deiner Webseite im Firefox-Browser.
2. **Öffne die Entwicklertools:** Drücke die Taste F12, um die Entwicklertools zu öffnen.
3. **Navigiere zum "Web-Speicher"-Tab:** In den Entwicklertools findest du oben eine Menüleiste. Klicke dort auf "Web-Speicher".
4. **Überprüfe die Cookies:** Auf der linken Seite unter "Speicher" findest du eine Option namens "Cookies". Wenn du darauf klickst, siehst du alle Cookies, die deine Webseite setzt.
5. **Unterscheide die Cookies:** Nun musst du nur noch die Drittanbieter-Cookies von den technischen Cookies unterscheiden können. Das ist für Anfänger sicher nicht immer einfach, aber mit der Zeit klappt es immer besser. Ein Tracking-Cookie von z.B. Google heißt z.B. __gads (für Google Ads).



## Fazit
Abschließend kann ich nur betonen, dass die korrekte Umsetzung von Cookie Consents kein Hexenwerk ist, aber eine Sache, die leicht übersehen oder falsch angegangen wird. Während es definitiv nervig sein kann, sich mit all diesen technischen und rechtlichen Details auseinanderzusetzen, kann es sich im Endeffekt wirklich lohnen.

Denk daran, dass es nicht nur darum geht, Strafen zu vermeiden. Ein korrekter Umgang mit Benutzerdaten und die Einhaltung von Datenschutzbestimmungen zeigen deinen Nutzern, dass du ihr Vertrauen ernst nimmst und einen hohen Stellenwert beimisst. Das ist ein Zeichen von Professionalität und kann das Vertrauen in deine Webseite oder dein Unternehmen erheblich stärken.
