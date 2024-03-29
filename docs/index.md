# tp_processing_WS2023-24
Kursmaterial TP Processing (p5js) Sommersemester 2024
Kursdokumentation TP Processing TH|W–S FB Gestaltung  

## 25.3.2024 – HTML & CSS Basics

## 13.10.2023 – Einfache Formen und Farben
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