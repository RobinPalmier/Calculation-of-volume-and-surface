# Calculation of volume and surface

Il s’agit de réaliser un serveur permettant de calculer les volumes et surfaces d’un certain nombre de figures géométriques. 
Les URL doivent être de la forme : objet=typeObjet&calcul=typeCalcul&donnee1=...&donnee2=...
... où :
• typeObjet peut être soit sphere, soit cube, soit cylindre
• typeCalcul peut être soit surface, soit volume

Les données sont les informations nécessaires au calcul, et peuvent être rayon, cote, hauteur. 
Par exemple, une URL valide serait(...)/objet=cylindre&calcul=volume&rayon=3&hauteur=5. 
Une URL invalide serait (...)/objet=cube&calcul=surface&rayon=3.

Le serveur doit renvoyer des pages HTML avec un minimum de mise en forme, incluant notamment une image du volume ou de la surface sur laquelle est réalisé le calcul. 
Au fur et à mesure que le service est utilisé, les résultats des calculs sont stockés dans une base de données. 
Si un objet pour lequel un calcul a déjà été réalisé est demandé une nouvelle fois, le serveur ne refait pas les calculs mais interroge directement la base de données.
