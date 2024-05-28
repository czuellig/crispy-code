# Dokumentation von crispy-code
Interaktive Medien 2<br>
Semesterarbeit von Livia Vogt und Cédric Züllig<br>
Klasse MMP23c<br>
Fachhochschule Graubünden<br>
Ende Mai 2024<br>

## Kurzbeschreibung des Projekts

Unsere API https://picsum.photos/ gibt konventionelle Bilder aus. Diese können als Placeholders benutzt werden. Welches Bild ausgespuckt wird, ist Zufall.<br>
Wir wollten diesen Zweck erweitern. Dafür haben wir mehrere Funktionen innerhalb einer Box erstellt. Dazu gehört eine Leiste mit 10 Blur-Stufen. Zudem kann man das Bild schwarzweiss einfärben via Checkbox (einge Bilder die uns die API liefert sind schon schwarzweiss bei diesen können wir die Graustufe nicht entfernen, leider gab es keine Möglichkeit diese Bilder herraus zu filtern). Die individuelle Höhe und Breite lässt sich über zwei Input-Felder ändern. Um das Projekt abzurunden, kann der User das generierte Bild via Download-Button herunterladen oder dir URL kopieren.

## Learnings

Mit Hilfe dieses Projekts haben wir gelernt mit API's zu arbeit. 
Zum Glück haben wir eine relativ Simple API ausgewählt, da wir gemerkt haben wir komplieziert nur schon das Ausswerten der Daten sein kann. Zudem haben wir uns das erste Mal mit JavaScript ausseinander gesetzt. Gerade beim programmieren mit Java Script haben wir gelernt was für eine starkes Tool ChatGPT (oder GitHub CO-Pilot) sein kann, wenn man es richtig einsetzt.

## Schwierigkeiten

Jedes unserer Features funktioniert nach einer anderen Strategie. Bis jedes einzelne von vorne bis hinten fixiert war, hat es einige Geduld gebraucht. Das hat mehr Input gebraucht, als anfangs angenommen.<br>
Für jedes Bild gibt es eine individuelle URL. Sobald eine Abänderung stattfindet (z.B. grayscale), wird die URL entsprechend erweitert. Bei mehreren Einstellungen auf einem Bild wurde es kompliziert(er). Nachdem wir die oben genannten Herausforderungen gemeistert haben, mussten wir es also noch schaffen, die URL abzuändern, nicht nur das Bild im CSS. Zu beachten war zudem die spezifische Reihenfolge der Features. 

## Benutzte Ressourcen

Folgende haben wir verwendet:
- YouTube-Tutorials
- w3schools
- ChatGPT
- Github Copilot

Wir haben ebenso die Hilfe der Dozent:innen in Anspruch genommen.
