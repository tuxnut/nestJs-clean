# NestJs application with clean architecture & deployed on Scalingo


## Actions pour déployer sur Scalingo:

1. Rajouter un Procfile pour y renseigner la vraie commande de démarrage de l'application en production:

```Procfile
web: yarn start:prod
```

2. Indiquer au server Nest de se binder sur le port `process.env.PORT`: injecté par Scalingo

## Création d'une arborescence clean architecture

1. Y'a des modules partout, mais ça remplace l'injection à la mimine (ie. *dependenciesContainer*)
2. L'injection de dépendances avec interface ne fonctionne pas directement => https://github.com/nestjs/nest/issues/43#issuecomment-300092490, y'a un workaround mais ça rajoute du bruit

