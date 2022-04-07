# NestJs application with clean architecture & deployed on Scalingo


## Actions pour déployer sur Scalingo:

1. Rajouter un Procfile pour y renseigner la vraie commande de démarrage de l'application en production:

```Procfile
web: yarn start:prod
```

2. Indiquer au server Nest de se binder sur le port `process.env.PORT`: injecté par Scalingo
