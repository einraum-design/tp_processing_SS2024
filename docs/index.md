# tp_processing_WS2023-24
Kursmaterial TP Processing (p5js) Sommersemester 2024
Kursdokumentation TP Processing TH|W–S FB Gestaltung  

## 25.3.2024 – HTML & CSS Basics
- [TP 0A](https://einraum-design.github.io/tp_processing_SS2024/TP0/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SS2024/blob/main/docs/TP0/index.html)

### HTML - Hypertext Markup Language
Ein html Dokument enthält den Textinhalte und Verlinkungen zu Bildern, Vidoes und weitern Multimedia Inhalten. 
Eine html Seite beinhaltet eine Head und einen Body Bereich. Die Seite wird mit "HTML-Tags" aufgebaut und gegliedert.

```
<!DOCTYPE html>
<html lang="de-DE" >
	<head>
		<title>Titel der Webseite</title>

		<!-- Angabe über die Zeichencodierung - damit Sonderzeiten - zB. Umlaute – richtig dargestellt werden -->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

		<!-- hier können Stylesheets, Scripte und Bibliotheken verknüpft werden ... -->
	</head>
	<body>
		<!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
	</body>
</html> 
```

Auch die Inhalte werden mit den "Tags" ausgezeichnet/geliedert.
Ein Überschrift wird beispielsweise mit einerm beginnenden und einem schließenden h1 (Headline 1. Ordnung) umgeben:
```
<h1>Inhalt der Überschrift</h1> 
```
Es gibt vorgegebenen Tags für unterschiedliche Inhalte, zB. Überschriften: <h1>, <h2>, <h3>, <h4>, ... oder Textabsätze: <p></p>
Mehrere Element lassen sich mit <div></div> Blöcken gruppieren und strukturieren.  
Teile innerhalb eines Inhaltes lassen sich mit <span> Elemente markieren:
```
<p>Ein Textabsatz kann beliebig lang sein. Einzelne Text können mit einem <span>span-Element</span> markiert werden</p> 
```
Für Medieninlate wie zB. Bilder gibt es eigenen Elemente 
Mit einem <img> Element werden zB. Bilder in die Seite verlinkt. 
```
<img src="Dateipfad/des/Bildes/bild.jpg" alt="Beschreibung des Bildinhalts für Lesegeräte" /> 
```
Elemente wie das img-Element hat keinen Inhalt zwischen den den Tags - die Bildverlinkung ist eine Attribut innerhalb des Tags. Deshalb wird das Bild nicht mit einem einem schließenden Tag <img></img> beendet, sonder das img-Tag wird direkt im ersten Tag mit einem / beendet. --> <img src="..." />

Die Besonderheit der "Hypertext"-MarkupLanguage" (HTML) sind die Verlinkungen zwischen unterschiedlichen Webseiten.
Dafür gibt es die a-Tags. Mit diesen Tags kann auf andere Webseiten oder auf Stellen innhalb einer Seite verlinkt werden. 
Mit dem href Attribut wird das Ziel des Links definiert. Das Target gibt an, ob die Zielseite im gleichen Tab oder in einem anderen Tab geöffnet werden soll.
```
<!-- externer link -->
<a href="https://p5js.org" target="_blank">Link zu einer anderen Webseite</a> 
<!-- link auf eine weiter Seite im gleichen Verzeichnis -->
<a href="seite2.html" target="_blank">Link zu einer anderen Webseite</a> 
<!-- link zu einer ID innerhalb einer Seite -->
<!-- Damit der Link funktioniert muss die ID auf der Seite irgendwo vergeben sein -->
<a href="#ziel" target="_blank">Link zu einer anderen Webseite</a> 
```

### CSS - Cascading Style Sheet
Mit Stylesheets wird die Erscheinung der Webseite gesteuert. Es werden Farben, Abstände, Schriftarten, Größen etc festgelegt. 
Styles können an unterschiedlichen Stellen geschrieben werden. 

Direkt im HTML
```
<p style="color: #ff0000">Ein Textabsatz</p> 
```

Im head Bereich der Seite
```
<!DOCTYPE html>
<html lang="de-DE" >
	<head>
		<title>Titel der Webseite</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

		<!-- hier können Style Regeln definiert werden: -->
		<style type="text/css">
            #content {
                background-color: rgb(224, 224, 224);
                padding: 15px;
                border: 3px solid #333333;
                margin: 30px;
            }
            h1, h2, h3, * {
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
	</head>
	<body>
		<!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
	</body>
</html> 
```

Eine eigenständige .css Datei kann im head-Bereich der Seite verknüpft werden. Dies hat den Vorteil, dass die Datei für viele Seiten verwendent werden kann
```
<!DOCTYPE html>
<html lang="de-DE" >
	<head>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
	</body>
</html> 
 ```

Mit CSS kann man auf viele Arten Regeln für die Gestaltung der HTML Inhalte definieren:
zB. eine Schriftart und Schriftfarbe für alle p Elemente festlegen:
```
p {
	color: rgb(20, 20, 20);
	font-family: Arial, Helvetica, sans-serif;
}
```


Tutorials und und eine Referenz für HTML, CSS (und weitere Web Sprachen): [w3schools](https://www.w3schools.com/)

## 4.4.2024 – Einfache Formen und Farben
- [TP 1A](https://einraum-design.github.io/tp_processing_SoSe24/TP_1A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe24/blob/main/docs/TP_1A/sketch.js)
- [TP 1B](https://einraum-design.github.io/tp_processing_SoSe24/TP_1B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe24/blob/main/docs/TP_1B/sketch.js)


### Kommentare  
werden vom Compiler ignoriert:
```
// one line comment
```

``` 
/* block comment 
 long 
 comment 
 to 
 explaine
 something  
or to 
ignore 
a longer
part of 
the application */
```


### Sketchgröße

Die Fenstergröße einer Anwendung mit der createCanvas() Funktion definiert.
Der erste Parameter ist die Skechtbreite, der zweite die Höhe. Alle Größen- und Positionsangaben sind Pixelmaße.
```
createCanvas(800, 600);
```
  
Die createCanvas Function wird bin bestimmte Fällen noch mit einem dritten Parameter aufgerufen.
zB. Wenn der Sketch ein PDF erstellt, eine 3D Szene gezeigt oder ein performanterer Renderer genutzt werden soll.



### Shapes

Die Rechtecks Funktion kann mit 
- 4 Parametern: xPosition, yPosition, width, height
- 5 Parametern: xPosition, yPosition, width, height, cornerRadius
- 8 Parametern: xPosition, yPosition, width, height, cornerRadius1, cornerRadius2, cornerRadius3, cornerRadius4
aufgerufen werden.


Standartmäßig wird das Rechteck von der linken oberen Ecke als Referenzpunkt gezeichnet.

Über den rectMode() lässt sich das aber auch auf Zeichnen von der Mitte aus umstellen.

```
rectMode(CENTER); // alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
rectMode(CORNER); // (Processing default)alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Über den ellipseMode() lässt sich das aber auch auf Zeichnen von der linken oberen Ecke aus umstellen.

```
ellipseMode(CENTER); // (Processing default) alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
ellipseMode(CORNER); // alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Wechsel vom ellipseMode / rectMode wirkt sich immer auf die nach dem Aufruf gezeichneten Formen aus.


Hinweis zu arc():
Die Winkel von Start und Ende vom Bogen werden nicht in Grad sondern in Bogenmaß erwartet. 
Ihr könnt euch mit der Funktion radians(GRADZAHL) eine Gradzahl in Bogenmaß umrechnen lassen.
```
// arc (xPosition, yPosition, breite, höhe, Startwinkel, Endwinkel, Zeichentyp)  
arc(300, 300, 400, 400, radians(45), radians(360-45), PIE);
```


Colors
Standardeinstellung von Processing ist, dass alle Formen mit einer weißen Füllfarbe und schwarzer Kontur mit 1px Strichstärke gezeichnet werden.

Um eigene Farbe für Formen festzulegen gibt es die fill und stroke Funktionen.
Standartmäßig nutzt Processing das RGB Farbsystem und erwartet Zahlen im 8Bit Bereich als Farbwerte: 0 - 255
(Ihr könnt den Zahlenbereich und auch das Farbsystem mit der coloMode() Funktion umstellen.)

fill() und stroke() können mit 
- 1 Parameter aufgerufen werden: Grauwert - schwarz bis weiß - 0 - 255
- 3 Parametern: rotwert, grünwert, blauwert -> je 0 - 255
- 4 Parametern: rotwert, grünwert, blauwert, alpha -> je 0 - 255. Alpha definiert die Transparenz.

fill() und stroke() müssen jeweils bevor eine Form gezeichnet wird festgelegt werden. Nach einem Aufruf werden alle Formen in diesen Farben gezeichnet, bis fill() oder stroke() mit neuen Werten aufgerufen werden.

Mit noFill() und noStroke() kann auch keine Füllfarb oder keine Kontur festgelegt werden.


## Grundstruktur setup & draw. Systemvariablen
- [TP 2A](https://einraum-design.github.io/tp_processing_SoSe24/TP_2A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe24/blob/main/docs/TP_2A/sketch.js)
- [TP 2B](https://einraum-design.github.io/tp_processing_SoSe24/TP_2B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe24/blob/main/docs/TP_2B/sketch.js)


### function setup & draw

```
function setup(){

}

function draw(){

}
```
Die beiden Funktionen sind das Grundgerüst jeder Processing Anwendung.
Alles was im Funktionsrumpf der function setup() – zwische den geschweiften Klammern steht – wird zum Programmstart einmal ausgeführt. Hier werden alles Grundeinstellungen für das Programm gesetzt und das Canvas Elemet erstellt.

```
createCanvas(600, 400);

```

Nach Ablauf der function setup() wird der Inhalt der function draw() ausgeführt. 
Alles was in der function draw() steht wird immer wieder auf's Neue ausgeführt – standartmäßig 60 Mal pro Sekunde. 
Die function draw() beginnt meistens mit der background function, die alles aus dem vorherigen Frame übermalt und für jeden neuen Frame eine neue Zeichenfläche bereitstellt.

### Processing Variablen

Processing bietet mehrere Variablen die von Processing vordefiniert sind.
Diese könne einfach als Platzhalter im Skript eingesetzt werden und werden während der Laufzeit 
des Programmes mit den aktuellen Werten ersetzt.

mouseX -> Maus x - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
mouseY -> Maus y - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
width ->  Sketchbreite Zahlenwert Ganzzahlen (Integer)
height -> Sketchhöhe Zahlenwert Ganzzahlen (Integer)


width und height sollten verwendet werden, um Positionen von graphischen Elementen in der Anwendung unabhängig von der Fenstergröße zu berechnen.

frameCount -> Zähler der nach jedem function draw Druchgang hochgezählt wird.  Zahlenwert Ganzzahlen (Integer)
