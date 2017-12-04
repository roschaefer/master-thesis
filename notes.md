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

### Abstract:
Warum geht der geographische Kontext verloren?

#### Introduction
Wirrer dritter paragraph.
Betonung, es gibt noch kein Framework für koordinierte Interaktionen
#### Motivation
Rundfunk MITBESTIMMEN rausnehmen
#### Contributions
von structure of work abgrenzen

