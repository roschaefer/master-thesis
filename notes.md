Pack libraries und frameworks in extra kapitel in Foundations
Die Entscheidung welches Framework genommen wird in die Analyse
Frontend Framework Comparison in Foundations
Zum Thema Component Pattern: Wie ist der Datenfluss? Wie sind die Mechanismen?
mach ein ... in das GeoJSON rein, wo was weggelassen wurde
Evaluation nur von Deiner Software

Evaluation
Drei Punkte:
* Use case
* Performance
  * was ist eine aktzeptable Antwortzeit (in der Literatur nachsehen, kann man
    auch in die Anforderungen packen)
* Technische Limits


 # 2017-11-28

 * mehr padding für die Treemap wenn man einen Screenshot macht
 * weniger weiß auf den Screenshots
 * Evaluation: Use-cases, was kann man noch dazu tun?
 * Ein paar, wo es hilft, oder auch nicht!
 * Es fehlt noch eine Schlussfolgerung aus den Use-cases
 * Wie haben die Tools dazu beigetragen
 * Korrelation ist nicht Kausalität
 * Das bewusste Aussuchen eines Kartenausschnitts ist ja auch eine Technik
 * Performance CPU Cores (2 physikalische! 4 virtuelle)
 * Auch die Attribute werden bei den GeoJSONs übertragen
   * Netzwerkverkehr anschauen und JSON elemente zählen
   * reine Geometrie von Attributen unterscheiden
   * Alle request untersuchen, auch die die nur in der Treemap relevant sind
* Performance Profiler, Diagramme nebeneinander setzen
* Es gibt auch einen Profiler der Treemap (hat einen Log)
  * FPS Logger muss man anmachen 'collectRenderingStatistics'
* NYC Pluto Geojson - einlesen 
  * Wichtig ist, dass man Metriken vergleicht! Höhere Erkenntnis

* Ein Ergebnis kann auch sein, dass vorläufige Anforderungen nicht mehr so
  wichtig sind
* Qualitative Evaluation passt

# 2017-12-04 (Gerd)

## Related Work
Eine Datensvisualisierung zeigen

Den Absatz über Treemaps leichter verständlich erklären, mit Bild!


# 2017-12-05 (Benjamin)

Zusammenhang kommt nicht raus in dem Text bei den Detailstufen der tree maps
schreib hin, was die Komponenten im Implementierungsteil machen, Zuständigkeiten
(?) Für jede Interaktion einen Screenshot machen
Wieviel Code ist notwendig um eine neue Interaktion einzubauen? => Zeigen
Requirements: Mit "Extensibility" war nicht Data Extensibility sondern "Software
extensibility" gemeint

Titelseite anpassen

# 2017-12-06 (Gerd)

vielleicht ein parallel plot anzeigen

# 2017-12-12

Analyse die Interfaces benennen
Lieber FMC Diagramm
"Ausprägung und Spezifikation" als Zusammenhang
Ein Datenmanager soll spezifiziert sein, GeoJSON endpoint eine Ausprägung davon


Im Kapitel Implementation eine Section reinbauen, welcher alle Zusammenhänge zu Kapitel Analyse enthält
Kapitel Implementation
Was ist mit level View/React gemeint? Noch erklären
Architecture => System Overview
Update mechanism in System Overview
Architektur diagramm mit Superklasse
Sequenzdiagram mit Subkomponenten (GeoJSON, Map)
position Methode fehlt im Klassendiagramm
Architektur und Ablauf ausklamüsern
Coordinator macht requests zum Datenbackend
Jede Klasse mit Prosa beschreiben

Treemap erklären, wie wird die angedockt?

Weniger Absätze!
Anzahl features in Datenset Tabelle
Mit Gimp die Benennungen drunter schreiben
Sätze und Bilder lieber zusammenhängend
Inhalt von Future Work soll nach vorne
Lieber "über den Tellerrand hinaus blicken" als Future Work
Ans Postfach senden
