@host = http://localhost:3000

# TRAE TODOS LOS POSTS

GET {{host}}/api/posts

# TRAE TODOS LOS POSTS CON TODOS LOS DATOS DEL AUTHOR

GET {{host}}/api/posts/author

# TRAE UN POST POR SU ID

GET {{host}}/api/posts/POSTID

# CARGAR UN POST

POST {{host}}/api/posts

# ACTUALIZAR UN POST POR SU ID

PUT {{host}}/api/posts/POSTID

# BORRAR UN POST POR SU ID

DELETE {{host}}/api/posts/POSTID

# TRAE TODOS LOS AUTORES

GET {{host}}/api/authors

# TRAE UN AUTOR POR ID

GET {{host}}/api/authors/AUTORID

# CARGAR UN AUTOR

POST {{host}}/api/authors

# ACTUALIZA UN POST POR ID

PUT {{host}}/api/authors/AUTORID

# BORRAR UN AUTOR POR ID

DELETE {{host}}/api/authors/AUTORID
