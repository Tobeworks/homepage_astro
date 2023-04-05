---
layout: ../../layouts/Artikel.astro
title: "Anfängertutorial: einen eigenen Chatbot programmieren"
publishDate: "2023-04-04 00:00:00"
img: /artikel/python_chat.png
draft: false
description: |
 Wie man mit ein paar Zeilen Code seinen eigenen Chatbot erstellen kann.
tags:
  - ki
  - chatgpt
  - python
  - coding
  - anfänger
---
## Einen eigenen Chatbot als Kommandozeilentool in Python programmieren
Seit dem Release von chatGPT im Dezember 2022 ist nichts mehr wie es einmal war. Die meisten Features sind jedoch nach wie vor in der API versteckt.
Anhand dieses einfachen Beispiels möchte ich zeigen, wie leicht es ist, ChatGPT in die lokale Konsole einzubinden. So ist es nicht mehr notwendig, ein Browserfenster zu öffnen.

Um mit dem Tutorial zu starten, lege in einem leeren Verzeichnis eine neue Datei mit dem Namen ``chat.py`` an und lege dort den folgenden Code ab:

```python
import os
import openai
from dotenv import load_dotenv


load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


def generate_response(prompt):
    response =  openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    message = response.choices[0].message.content
    return message


while True:
    user_input = input("Ich: ")
    if user_input.lower() in ["exit", "quit", "bye"]:
        break
    prompt = f"User: {user_input}\nGPT: "
    response = generate_response(prompt)
    print("GPT:", response)
```
## Code Erklärung
Dieser Code definiert eine Funktion, die es ermöglicht, eine Frage an einen Chatbot zu stellen und eine Antwort zu erhalten.
Zu Beginn werden einige Bibliotheken und Schlüssel importiert. Der Schlüssel ist notwendig, um den Zugang zum OpenAI API zu ermöglichen.
Die Funktion generate_response nimmt eine Eingabe (die Frage) und verwendet sie, um eine Antwort vom Chatbot zu generieren. Die Antwort wird als Text zurückgegeben.
Dann kommt eine Schleife, in der der Benutzer eine Frage stellen kann. Wenn der Benutzer "exit", "quit" oder "bye" eingibt, wird die Schleife beendet. Andernfalls wird die Funktion generate_response mit der Eingabe des Benutzers aufgerufen und die Antwort wird ausgegeben.


## Setup und Ausführung
Um das Skript in einer lokalen Umgebung auszuführen, empfehle ich die Verwendung von sogenannten Virtual Environments (venv). In Python können Umgebungen gezielt aufgebaut werden, welche nur die Binaries darin nutzen.
Zunächst sollte man direkt mit dem Setup beginnen und das entsprechende Python-Kommando zum Erstellen des venvs ausführen:
```
# Erstellen einer neuen virtuellen Umgebung im aktuellen Verzeichnis (wo deine Datei chat.py liegt)
python3 -m venv .

# Aktivieren der virtuellen Umgebung
. bin/activate
```
Danach geht es weiter mit der Installaton der benötigten Pakete:
```
pip install openai
pip install python-dotenv
```
Das erste Paket openai ist die offizielle Python-Bibliothek für die OpenAI-API, die das Generieren von Texten ermöglicht. Das zweite Paket python-dotenv wird verwendet, um Umgebungsvariablen aus einer .env-Datei zu laden, in der wir unseren OpenAI-API-Schlüssel speichern werden.

Nun solltest du eine Datei mit dem Namen ``.env`` im Verzeichnis deiner App anlegen und dort deinen API Key hinterlegen:
```
OPENAI_API_KEY=sk-schlüssel
```

Dein individueller Chatbot ist fast einsatzbereit, es fehlt nur noch der eigentliche Aufruf:

```
python chat.py
```

Voila, gar nicht ncht so schwer, oder? Viel Spaß beim Testen und Erweitern. 

Code via Github laden:
https://github.com/Tobeworks/console-chat