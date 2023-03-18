---
layout: ../../layouts/Artikel.astro
title: Woocommerce - (Nicht nur) Versandklassen schnell übersetzen
publishDate: "2023-03-18 00:00:00"
img: /artikel/coder.jpg
draft: false
description: |
  Schnelle Lösung für das manuelle Übersetzen von Strings mit Polylang
tags:
  - webentwicklung
  - woocommerce
  - wordpress
  - coding
---
## Schneller Tipp - Schnelle Übersetzungen in Wordpress/Woocommerce
Die Übersetzung eines WooCommerce Shops kann manchmal ein echtes Abenteuer sein, vor allem, wenn Du auf hartnäckige Strings triffst, die direkt aus der Datenbank stammen und sich einfach nicht übersetzen lassen wollen. Aber keine Sorge, wir haben eine schnelle und unkomplizierte Lösung parat, die zwar nicht die eleganteste ist, aber dennoch ein Lächeln auf Dein Gesicht zaubern wird.

Wenn Du es eilig hast und der rebellische String sich partout nicht bändigen lässt, kannst Du folgenden Code in die functions.php Deines Themes kopieren. Pass einfach die betreffenden Strings an, und voilà - Dein Übersetzungsproblem ist gelöst, und das mit einem charmanten Hauch von Witz und Leichtigkeit!

Natürlich ist dies nur eine schnelle Notlösung und in der Welt der Webentwicklung gibt es immer Raum für Verbesserungen und raffiniertere Ansätze. Dennoch zeigt dieser kleine Trick, dass manchmal selbst die kniffligsten Probleme mit einer Prise Humor und Kreativität gelöst werden können. Und wer weiß, vielleicht inspiriert Dich diese Methode, noch tiefer in die faszinierende Welt der Übersetzungen und Lokalisierung einzutauchen und eine noch besser geeignete Lösung zu finden. In der Zwischenzeit - viel Spaß beim Übersetzen von Woocoemmerce!


```

add_filter('gettext', function ($translated_text, $text, $domain) {

$current_language = pll_current_language();


if($current_language == 'en'){

		switch ($translated_text) {
			case 'Standardversand: 2-5 Werktage':
				return 'Standard Shipping - 5 workdays';
				break;
			case 'Jetzt kaufen':
				return 'Buy now';
				break;
			case 'Bezahle mit deinem Smartphone':
				return 'Pay with your smartphone';
				break;
			case 'Bezahlen Sie über PayPal; wenn Sie kein PayPal-Konto haben, können Sie auch mit Ihrer Kreditkarte bezahlen.':
				return 'Pay via PayPal; if you do not have a PayPal account, you can also pay with your credit card.';
				break;
			case '(includes %s)':
				return 'incl. Tax';
				break;	
			default:
				return $translated_text;
				break;
		}
	}else{
		 return $translated_text;
	}

}, 20, 3);
```
## Code Erklärung
Dieser Code ist ein Filter in WordPress, der dafür sorgt, dass bestimmte Texte (Strings) auf der Website übersetzt werden, wenn die aktuelle Sprache Englisch ('en') ist. Der Filter benutzt die gettext Funktion und eine anonyme Funktion, um die Übersetzungen vorzunehmen. Im Code werden mehrere deutsche Texte in englische Texte übersetzt, zum Beispiel "Standardversand: 2-5 Werktage" in "Standard Shipping - 5 workdays" oder "Jetzt kaufen" in "Buy now". Wenn die aktuelle Sprache nicht Englisch ist, bleibt der Text unverändert.

Bitte beachte, dass diese Funktion nur mit Polylang funktioniert.