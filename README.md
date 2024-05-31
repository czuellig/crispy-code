# Dokumentation von crispy-code
Interaktive Medien 2<br>
Semesterarbeit von Livia Vogt und Cédric Züllig<br>
Klasse mmp23c<br>
Fachhochschule Graubünden<br>
Ende Mai 2024<br>

## Kurzbeschreibung des Projekts

Unsere API https://picsum.photos/ gibt konventionelle Bilder aus. Diese können als Placeholders benutzt werden. Welches Bild ausgespuckt wird, ist Zufall.<br>
Wir wollten diesen Zweck erweitern. Dafür haben wir mehrere Funktionen innerhalb einer Box erstellt. Dazu gehört eine Leiste mit 10 Blur-Stufen. Zudem kann man das Bild schwarzweiss einfärben via Checkbox (einige Bilder, die uns die API liefert, sind bereits schwarzweiss. Bei diesen können wir die Graustufe nicht entfernen. Leider gab es keine Möglichkeit, diese Bilder heraus zu filtern). Die individuelle Höhe und Breite lässt sich über zwei Input-Felder ändern. Um das Projekt abzurunden, kann der User das generierte Bild via Download-Button herunterladen oder die URL kopieren.<br>
Wir sind stolz auf das Ergebnis. Wieso? Weil man die Funktion tatsächlich im Alltag gut gebrauchen kann. Super praktisch!

## Learnings

Mithilfe dieses Projekts haben wir gelernt, wie man mit API's arbeitet. <br>
Bewusst haben wir uns für eine tendenziell simple API entschieden. Wir haben früh gemerkt, wie kompliziert schon das Auswerten der Daten sein kann. Zudem haben wir uns das erste Mal mit JavaScript auseinandergesetzt. Gerade beim Programmieren mit JavaScript haben wir gelernt, was für ein starkes Tool ChatGPT (oder GitHub Copilot) sein kann, wenn man es richtig einsetzt. Diese Tools haben uns dabei geholfen, Lösungen zu finden und unseren Code effizienter zu gestalten.

## Schwierigkeiten

Jedes unserer Features funktioniert nach einer anderen Strategie. Bis jedes einzelne von vorne bis hinten fixiert war, hat es viel Geduld und unzählige Versuche gebraucht. Das hat mehr Input in Anspruch genommen, als anfangs angenommen.<br>
Für jedes Bild gibt es eine individuelle URL. Sobald eine Abänderung stattfindet (z.B. grayscale), wird die URL entsprechend erweitert (nicht abgeändert). Bei mehreren Einstellungen auf einem Bild wurde es kompliziert(er). Nachdem wir die oben genannten Herausforderungen gemeistert haben, mussten wir es also noch schaffen, die URL abzuändern, nicht nur das Bild im CSS. Zu beachten war zudem die spezifische Reihenfolge der Features - ansonsten wird die URL nicht erkannt und eine Fehlermeldung poppt auf.

## Benutzte Ressourcen

Folgende haben wir verwendet:
- YouTube-Tutorials
- w3schools
- ChatGPT
- Github Copilot

Wir haben ebenso die Hilfe der Dozent:innen in Anspruch genommen. Danke für die Unterstützung!
