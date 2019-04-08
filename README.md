#pokemon
Esta es una aplicación de pokemon en la cual estamos consumiendo la pokeapi para mostrar una lista de pokemons por región, 
y luego armar un equipo con un límite de 6 pokemons por region. 

La carpeta Styles contiene los estilos que se utilizaron en cada pantalla de la aplicacion.
En la carpeta components tenemos las pantallas que son Welcome.js, Regions.js, Pokemon.js y Team.js. Tambien tenemos la RegionData.js
que es donde se esta creando toda la data de las regiones.

En la pantalla Welcome.js tenemos un botón que nos va a dirigir a Regions.js que tiene todas las 7 regiones de pokemon. En cada región 
nos aparecerán los pokemons correspondientes a esa región, que es Pokemon.js. 
Si nosotros hacemos tap en un pokemon, este se agregará a un arreglo de elementos que inicialmente estaba vacío, pero una vez nosotros
escojamos que pokemons queremos en nuestro equipo, este arreglo se va a ir llenando. Cuando el arreglo está siendo llenado
podemos ir viendo nuestros pokemons dando tap al botón "Show Team".

