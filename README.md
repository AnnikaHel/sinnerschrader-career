




## CLI


## Final
### Markdowns

Was ist frontmatters

Wie geht markdown

#### Jobs



#### Contacts

unter contact-persons/ sind alle moeglichen Kontaktpersonen angegeben. 
Im Augenblick werden nur die Daten im frontmatter eingelesen. 
Der Name der markdown datei ohne Endung (bsp. victoria) ist was man unter contact in jobs angeben muss um einen job einer Person zuordnen 




### Templates
 Nur relevant fuer Frontend Entwickler
 
 Wir setzen auf handlebars und bereiten, die jobs/ kontakte usw als data vor
 
 template/ ist der Ordner ab wo die Dateien benutzt werden
 
 alle assets/ folder in template/ (jobs/ contact-persons/) werden direkt kopiert
 alle Dateien unter partials/ werden als handlebar partials genutzt
 alle Dateien die mit einem underscore beginnen werden unter einem anderen NAmen abgelegt
 alle Dateien die nicht unter partials/, assets/ liegen oder mit einem underscrore beginnen werden als handlebar templates kompiliert
 
 Im Augenblick ist es hard verdrahtet, welche markdown dateien mit welchen templates verknuepft werden
 
