interface Question {
  id: number;
  subject: string;
  level: '6ème' | '5ème' | '4ème' | '3ème' | '2nde' | '1ère' | 'Terminale';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const questions: Question[] = [
  // Question pour la premième catégorie
    {
      "id": 1,
      "subject": "Scratch Basics",
      "level": "6ème",
      "question": "Quelle est la fonction du bloc \"dire ... pendant ... secondes\" ?",
      "options": [
        "Faire bouger le sprite",
        "Faire parler le sprite dans une bulle pendant un temps défini",
        "Jouer un son",
        "Changer de costume"
      ],
      "correctAnswer": "Faire parler le sprite dans une bulle pendant un temps défini",
      "explanation": "Ce bloc permet d'afficher une bulle de dialogue au-dessus du sprite pendant une durée spécifiée."
    },
    {
      "id": 2,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Comment fait-on pour démarrer un script dans Scratch ?",
      "options": [
        "En utilisant le bloc \"quand le drapeau vert est cliqué\"",
        "En appuyant sur la touche espace",
        "En cliquant sur le sprite",
        "En appuyant sur la touche entrée"
      ],
      "correctAnswer": "En utilisant le bloc \"quand le drapeau vert est cliqué\"",
      "explanation": "Le drapeau vert est le moyen standard pour démarrer un programme Scratch."
    },
    {
      "id": 3,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quelle est la couleur des blocs de mouvement dans Scratch ?",
      "options": [
        "Rouge",
        "Vert",
        "Bleu",
        "Violet"
      ],
      "correctAnswer": "Bleu",
      "explanation": "Les blocs de mouvement sont toujours bleus dans Scratch pour faciliter leur identification."
    },
    {
      "id": 4,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Comment appelle-t-on un personnage dans Scratch ?",
      "options": [
        "Un lutin",
        "Un sprite",
        "Un acteur",
        "Un personnage"
      ],
      "correctAnswer": "Un sprite",
      "explanation": "Dans Scratch, les personnages ou objets sont appelés \"sprites\"."
    },
    {
      "id": 5,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de répéter une action 10 fois ?",
      "options": [
        "répéter indéfiniment",
        "répéter 10 fois",
        "répéter jusqu'à",
        "attendre 10 secondes"
      ],
      "correctAnswer": "répéter 10 fois",
      "explanation": "Le bloc \"répéter x fois\" permet d'exécuter une séquence d'instructions un nombre défini de fois."
    },
    {
      "id": 6,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de faire tourner un sprite de 15 degrés ?",
      "options": [
        "tourner de 15 degrés",
        "tourner dans le sens des aiguilles d'une montre",
        "tourner vers la droite",
        "tourner vers la gauche"
      ],
      "correctAnswer": "tourner de 15 degrés",
      "explanation": "Le bloc \"tourner de x degrés\" permet de faire tourner un sprite d'un nombre défini de degrés."
    },
    {
      "id": 7,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc sert à afficher un message à l'écran ?",
      "options": [
        "dire ... pendant ... secondes",
        "montrer",
        "afficher texte",
        "dire"
      ],
      "correctAnswer": "dire ... pendant ... secondes",
      "explanation": "Le bloc \"dire ... pendant ... secondes\" permet d'afficher un message sous forme de bulle de dialogue."
    },
    {
      "id": 8,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Comment appelle-t-on une instruction qui ne s'exécute qu'une seule fois ?",
      "options": [
        "Une boucle",
        "Un événement",
        "Un script",
        "Une condition"
      ],
      "correctAnswer": "Un événement",
      "explanation": "Les événements sont des actions qui se produisent lorsque quelque chose se passe, comme \"quand le drapeau vert est cliqué\"."
    },
    {
      "id": 9,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Que fait le bloc \"attendre ... secondes\" ?",
      "options": [
        "Faire une pause dans l'exécution du script",
        "Changer le costume du sprite",
        "Faire bouger le sprite",
        "Réduire la taille du sprite"
      ],
      "correctAnswer": "Faire une pause dans l'exécution du script",
      "explanation": "Le bloc \"attendre ... secondes\" permet de mettre en pause l'exécution du script pour un certain temps."
    },
    {
      "id": 10,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de changer le costume d'un sprite ?",
      "options": [
        "changer le costume en ...",
        "montrer un costume",
        "changer l'apparence",
        "costume suivant"
      ],
      "correctAnswer": "changer le costume en ...",
      "explanation": "Le bloc \"changer le costume en ...\" permet de modifier l'apparence d'un sprite en choisissant un nouveau costume."
    },
    {
      "id": 11,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'ajouter un effet sonore ?",
      "options": [
        "jouer un son ...",
        "jouer la musique",
        "effet sonore",
        "ajouter un bruit"
      ],
      "correctAnswer": "jouer un son ...",
      "explanation": "Le bloc \"jouer un son ...\" permet de faire jouer un son au sprite."
    },
    {
      "id": 12,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel est le rôle du bloc \"si ... alors\" ?",
      "options": [
        "Effectuer une action si une condition est remplie",
        "Répéter une action à l'infini",
        "Mettre en pause le script",
        "Changer l'apparence du sprite"
      ],
      "correctAnswer": "Effectuer une action si une condition est remplie",
      "explanation": "Le bloc \"si ... alors\" permet de conditionner une action en fonction d'une situation particulière."
    },
    {
      "id": 13,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de déplacer un sprite de 10 pas ?",
      "options": [
        "avancer de 10 pas",
        "déplacer de 10 unités",
        "se déplacer",
        "marcher de 10 pas"
      ],
      "correctAnswer": "avancer de 10 pas",
      "explanation": "Le bloc \"avancer de 10 pas\" permet de déplacer un sprite dans la direction de son orientation."
    },
    {
      "id": 14,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc est utilisé pour répéter une action indéfiniment ?",
      "options": [
        "répéter 10 fois",
        "répéter jusqu'à ce que",
        "répéter indéfiniment",
        "boucle"
      ],
      "correctAnswer": "répéter indéfiniment",
      "explanation": "Le bloc \"répéter indéfiniment\" permet de répéter une action sans fin jusqu'à ce qu'une autre condition l'arrête."
    },
    {
      "id": 15,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de changer la taille d'un sprite ?",
      "options": [
        "modifier la taille",
        "changer la taille",
        "modifier taille en %",
        "réduire taille"
      ],
      "correctAnswer": "modifier la taille",
      "explanation": "Le bloc \"modifier la taille\" permet d'agrandir ou réduire la taille du sprite en pourcentage."
    },
    {
      "id": 16,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Comment peut-on ajouter un autre sprite dans Scratch ?",
      "options": [
        "En cliquant sur le bouton \"Ajouter un sprite\"",
        "En glissant un sprite depuis la bibliothèque",
        "En utilisant le bloc \"ajouter un sprite\"",
        "En appuyant sur la touche \"A\""
      ],
      "correctAnswer": "En cliquant sur le bouton \"Ajouter un sprite\"",
      "explanation": "Dans Scratch, on peut ajouter un sprite en cliquant sur le bouton \"Ajouter un sprite\" en bas de l'écran."
    },
    {
      "id": 17,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Comment fait-on pour modifier un sprite dans Scratch ?",
      "options": [
        "En utilisant le bloc \"changer de costume\"",
        "En cliquant sur le sprite et en modifiant son apparence",
        "En appuyant sur la touche \"Modifier\"",
        "En dessinant un nouveau sprite"
      ],
      "correctAnswer": "En cliquant sur le sprite et en modifiant son apparence",
      "explanation": "Pour modifier un sprite, on peut cliquer dessus et changer son costume ou dessiner une nouvelle apparence."
    },
    {
      "id": 18,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de faire avancer un sprite dans la direction qu'il regarde ?",
      "options": [
        "avancer de ... pas",
        "se déplacer en avant",
        "avancer",
        "mouvement automatique"
      ],
      "correctAnswer": "avancer de ... pas",
      "explanation": "Le bloc \"avancer de ... pas\" déplace le sprite dans la direction qu'il regarde."
    },
    {
      "id": 19,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel est le but du bloc \"attendre jusqu'à ce que\" ?",
      "options": [
        "Attendre un événement avant d'exécuter l'action suivante",
        "Mettre une pause entre deux actions",
        "Faire une boucle infinie",
        "Réinitialiser le script"
      ],
      "correctAnswer": "Attendre un événement avant d'exécuter l'action suivante",
      "explanation": "Le bloc \"attendre jusqu'à ce que\" permet de mettre en pause le script jusqu'à ce qu'une condition soit remplie."
    },
    {
      "id": 20,
      "level": "6ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'afficher un message à l'écran ?",
      "options": [
        "dire ... pendant ... secondes",
        "montrer",
        "afficher texte",
        "dire"
      ],
      "correctAnswer": "dire ... pendant ... secondes",
      "explanation": "Le bloc \"dire ... pendant ... secondes\" permet d'afficher un message sous forme de bulle de dialogue."
    },
  
  // Question pour la deuxième catégorie
    {
      "id": 21,
      "subject": "Scratch Basics",
      "level": "5ème",
      "question": "Quel bloc permet de changer la couleur du costume d'un sprite ?",
      "options": [
        "changer la couleur",
        "changer de costume",
        "effet couleur",
        "changer l'apparence"
      ],
      "correctAnswer": "effet couleur",
      "explanation": "Le bloc \"effet couleur\" permet de changer la couleur du costume du sprite en appliquant un effet."
    },
    {
      "id": 22,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de déplacer un sprite d'une position précise à une autre ?",
      "options": [
        "se déplacer",
        "aller à x: ... y: ...",
        "déplacer en x et y",
        "déplacer à la souris"
      ],
      "correctAnswer": "aller à x: ... y: ...",
      "explanation": "Le bloc \"aller à x: ... y: ...\" permet de déplacer le sprite à une position spécifique sur la scène."
    },
    {
      "id": 23,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Comment appelle-t-on une série de blocs qui s'exécutent ensemble ?",
      "options": [
        "Un script",
        "Un événement",
        "Une boucle",
        "Un bloc"
      ],
      "correctAnswer": "Un script",
      "explanation": "Un script est un ensemble de blocs exécutés dans un ordre spécifique pour accomplir une tâche."
    },
    {
      "id": 24,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de créer un clone d'un sprite ?",
      "options": [
        "créer un clone de moi",
        "dupliquer",
        "cloner",
        "créer un nouveau sprite"
      ],
      "correctAnswer": "créer un clone de moi",
      "explanation": "Le bloc \"créer un clone de moi\" permet de générer un clone du sprite en cours."
    },
    {
      "id": 25,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'attendre jusqu'à ce qu'un certain événement se produise ?",
      "options": [
        "attendre ... secondes",
        "attendre jusqu'à ce que",
        "attente",
        "attendre un événement"
      ],
      "correctAnswer": "attendre jusqu'à ce que",
      "explanation": "Le bloc \"attendre jusqu'à ce que\" permet de mettre le script en pause jusqu'à ce qu'une condition soit vraie."
    },
    {
      "id": 26,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Que fait le bloc \"quand le drapeau vert est cliqué\" ?",
      "options": [
        "Il démarre le programme",
        "Il arrête le programme",
        "Il affiche un message",
        "Il crée un clone"
      ],
      "correctAnswer": "Il démarre le programme",
      "explanation": "Le bloc \"quand le drapeau vert est cliqué\" est utilisé pour démarrer le script dans Scratch."
    },
    {
      "id": 27,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de répéter une action tant qu'une condition est vraie ?",
      "options": [
        "répéter indéfiniment",
        "répéter jusqu'à ce que",
        "répéter 10 fois",
        "boucle infinie"
      ],
      "correctAnswer": "répéter jusqu'à ce que",
      "explanation": "Le bloc \"répéter jusqu'à ce que\" répète une action tant que la condition spécifiée est vraie."
    },
    {
      "id": 28,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de tester si une condition est remplie ?",
      "options": [
        "si ... alors",
        "test condition",
        "vérifier si",
        "condition"
      ],
      "correctAnswer": "si ... alors",
      "explanation": "Le bloc \"si ... alors\" permet de tester si une condition est remplie et d'exécuter une action en fonction."
    },
    {
      "id": 29,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de faire tourner un sprite dans une direction spécifique ?",
      "options": [
        "tourner dans le sens des aiguilles d'une montre",
        "tourner de 15 degrés",
        "tourner vers la droite",
        "tourner dans le sens inverse des aiguilles d'une montre"
      ],
      "correctAnswer": "tourner dans le sens des aiguilles d'une montre",
      "explanation": "Le bloc \"tourner dans le sens des aiguilles d'une montre\" permet de faire tourner un sprite dans cette direction."
    },
    {
      "id": 30,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'ajouter un effet sonore à un sprite ?",
      "options": [
        "jouer un son ...",
        "ajouter un bruit",
        "jouer un effet sonore",
        "effet son"
      ],
      "correctAnswer": "jouer un son ...",
      "explanation": "Le bloc \"jouer un son ...\" permet de jouer un son spécifique sur le sprite."
    },
    {
      "id": 31,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de changer la vitesse de déplacement d'un sprite ?",
      "options": [
        "changer la vitesse",
        "modifier la vitesse",
        "définir la vitesse",
        "tourner à une certaine vitesse"
      ],
      "correctAnswer": "changer la vitesse",
      "explanation": "Le bloc \"changer la vitesse\" permet de modifier la vitesse de déplacement d'un sprite."
    },
    {
      "id": 32,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc sert à répéter une action jusqu'à ce qu'une condition soit vraie ?",
      "options": [
        "répéter jusqu'à",
        "répéter indéfiniment",
        "attendre jusqu'à ce que",
        "répéter jusqu'à la fin"
      ],
      "correctAnswer": "répéter jusqu'à",
      "explanation": "Le bloc \"répéter jusqu'à\" permet de répéter des actions jusqu'à ce qu'une condition spécifiée soit vraie."
    },
    {
      "id": 33,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de contrôler la taille d'un sprite ?",
      "options": [
        "modifier la taille",
        "changer la taille",
        "ajuster la taille",
        "réduire la taille"
      ],
      "correctAnswer": "modifier la taille",
      "explanation": "Le bloc \"modifier la taille\" permet de modifier la taille du sprite de manière dynamique."
    },
    {
      "id": 34,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de donner un nom à un sprite ?",
      "options": [
        "donner un nom",
        "nommer",
        "changer le nom",
        "nom"
      ],
      "correctAnswer": "donner un nom",
      "explanation": "Le bloc \"donner un nom\" permet de spécifier un nom pour un sprite."
    },
    {
      "id": 35,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'utiliser des variables dans Scratch ?",
      "options": [
        "définir une variable",
        "variable",
        "afficher une variable",
        "créer une variable"
      ],
      "correctAnswer": "définir une variable",
      "explanation": "Le bloc \"définir une variable\" permet de créer et de modifier des variables dans un projet Scratch."
    },
    {
      "id": 36,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de faire répéter une action à une vitesse définie ?",
      "options": [
        "répéter indéfiniment",
        "répéter 10 fois",
        "attendre 1 seconde",
        "répéter à une vitesse définie"
      ],
      "correctAnswer": "répéter 10 fois",
      "explanation": "Le bloc \"répéter 10 fois\" permet de répéter une action un certain nombre de fois, à une vitesse définie."
    },
    {
      "id": 37,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de déplacer un sprite vers la souris ?",
      "options": [
        "suivre la souris",
        "déplacer vers la souris",
        "mouvement souris",
        "se déplacer vers la souris"
      ],
      "correctAnswer": "déplacer vers la souris",
      "explanation": "Le bloc \"déplacer vers la souris\" permet de déplacer un sprite vers la position de la souris sur la scène."
    },
    {
      "id": 38,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet d'ajouter un arrière-plan à la scène ?",
      "options": [
        "changer l'arrière-plan",
        "modifier le fond",
        "ajouter un arrière-plan",
        "changer de décor"
      ],
      "correctAnswer": "changer l'arrière-plan",
      "explanation": "Le bloc \"changer l'arrière-plan\" permet de modifier l'arrière-plan de la scène dans Scratch."
    },
    {
      "id": 39,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de définir la direction d'un sprite ?",
      "options": [
        "tourner vers",
        "choisir la direction",
        "regarder vers",
        "définir l'orientation"
      ],
      "correctAnswer": "tourner vers",
      "explanation": "Le bloc \"tourner vers\" permet de faire tourner un sprite vers une direction spécifiée."
    },
    {
      "id": 40,
      "level": "5ème",
      "subject": "Scratch Basics",
      "question": "Quel bloc permet de faire une pause dans l'exécution du script ?",
      "options": [
        "attendre ... secondes",
        "pause",
        "mettre en pause",
        "temps d'attente"
      ],
      "correctAnswer": "attendre ... secondes",
      "explanation": "Le bloc \"attendre ... secondes\" permet de mettre une pause dans l'exécution du script pendant une durée spécifiée."
    },
  // Question pour la troisième catégorie
  {
    "id": 41,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de répéter une action jusqu'à ce qu'une condition soit remplie ?",
    "options": [
      "répéter jusqu'à",
      "répéter indéfiniment",
      "répéter une fois",
      "répéter quand"
    ],
    "correctAnswer": "répéter jusqu'à",
    "explanation": "Le bloc \"répéter jusqu'à\" répète une action tant qu'une condition spécifique n'est pas remplie."
  },
  {
    "id": 42,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Que permet de faire un clone dans Scratch ?",
    "options": [
      "Créer une copie identique d'un sprite",
      "Multiplier les sprites",
      "Créer un sous-sprite",
      "Réduire le nombre de sprites"
    ],
    "correctAnswer": "Créer une copie identique d'un sprite",
    "explanation": "Un clone est une copie exacte d'un sprite initial dans Scratch."
  },
  {
    "id": 43,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel est l'objectif principal de la programmation ?",
    "options": [
      "Créer des jeux",
      "Réaliser des projets interactifs",
      "Automatiser des tâches",
      "Faire de l'animation"
    ],
    "correctAnswer": "Automatiser des tâches",
    "explanation": "Le but principal de la programmation est de rendre les tâches répétitives automatiques."
  },
  {
    "id": 44,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet d'afficher un message d'erreur ou un texte au début d'un projet ?",
    "options": [
      "dire ... pendant ... secondes",
      "afficher un message",
      "écrire",
      "afficher du texte"
    ],
    "correctAnswer": "dire ... pendant ... secondes",
    "explanation": "Le bloc \"dire ... pendant ... secondes\" peut être utilisé pour afficher un message ou une erreur."
  },
  {
    "id": 45,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de changer l'orientation d'un sprite ?",
    "options": [
      "tourner de ... degrés",
      "pivot",
      "orienter",
      "rotation"
    ],
    "correctAnswer": "tourner de ... degrés",
    "explanation": "Le bloc \"tourner de ... degrés\" permet de faire pivoter un sprite de l'angle spécifié."
  },
  {
    "id": 46,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de déplacer un sprite vers la droite de 10 unités ?",
    "options": [
      "déplacer de 10",
      "glisser",
      "se déplacer",
      "déplacer en x"
    ],
    "correctAnswer": "déplacer de 10",
    "explanation": "Le bloc \"déplacer de 10\" déplace le sprite de 10 unités vers la droite."
  },
  {
    "id": 47,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de jouer un son dans Scratch ?",
    "options": [
      "jouer le son",
      "émémettre un son",
      "jouer un effet sonore",
      "activer un son"
    ],
    "correctAnswer": "jouer le son",
    "explanation": "Le bloc \"jouer le son\" permet de jouer un son enregistré dans Scratch."
  },
  {
    "id": 48,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet d'attendre un certain temps avant d'exécuter une action ?",
    "options": [
      "attendre ... secondes",
      "pause",
      "temporiser",
      "attendre"
    ],
    "correctAnswer": "attendre ... secondes",
    "explanation": "Le bloc \"attendre ... secondes\" permet de suspendre l'exécution du script pendant un temps déterminé."
  },
  {
    "id": 49,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel est le rôle des variables dans un programme ?",
    "options": [
      "Stocker des informations",
      "Exécuter des calculs",
      "Gérer les entrées utilisateur",
      "Afficher des messages"
    ],
    "correctAnswer": "Stocker des informations",
    "explanation": "Les variables sont utilisées pour stocker des données dans un programme."
  },
  {
    "id": 50,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de répéter une action un nombre défini de fois ?",
    "options": [
      "répéter x fois",
      "répéter",
      "répéter indéfiniment",
      "répéter jusqu'à"
    ],
    "correctAnswer": "répéter x fois",
    "explanation": "Le bloc \"répéter x fois\" permet de répéter une action un nombre spécifié de fois."
  },
  {
    "id": 51,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Que permet de faire le bloc \"changer le costume\" dans Scratch ?",
    "options": [
      "Changer l'apparence du sprite",
      "Changer la position du sprite",
      "Faire sauter le sprite",
      "Faire clignoter le sprite"
    ],
    "correctAnswer": "Changer l'apparence du sprite",
    "explanation": "Le bloc \"changer le costume\" permet de modifier l'apparence du sprite en lui attribuant un nouveau costume."
  },
  {
    "id": 52,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de tester si une condition est vraie dans Scratch ?",
    "options": [
      "si ... alors",
      "si",
      "si alors",
      "vérifier"
    ],
    "correctAnswer": "si ... alors",
    "explanation": "Le bloc \"si ... alors\" teste si une condition est remplie et exécute une action en conséquence."
  },
  {
    "id": 53,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de faire avancer un sprite de 10 unités ?",
    "options": [
      "avancer de 10",
      "glisser",
      "se déplacer",
      "faire un pas"
    ],
    "correctAnswer": "avancer de 10",
    "explanation": "Le bloc \"avancer de 10\" déplace le sprite de 10 unités vers l'avant."
  },
  {
    "id": 54,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de masquer un sprite ?",
    "options": [
      "cacher",
      "masquer",
      "disparaître",
      "effacer"
    ],
    "correctAnswer": "cacher",
    "explanation": "Le bloc \"cacher\" rend un sprite invisible."
  },
  {
    "id": 55,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Comment crée-t-on une boucle infinie dans Scratch ?",
    "options": [
      "répéter indéfiniment",
      "répéter jusqu'à",
      "répéter x fois",
      "recommencer"
    ],
    "correctAnswer": "répéter indéfiniment",
    "explanation": "Le bloc \"répéter indéfiniment\" crée une boucle sans fin qui répète l'action indéfiniment."
  },
  {
    "id": 56,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de faire sauter un sprite ?",
    "options": [
      "sauter",
      "faire un bond",
      "glisser",
      "déplacer"
    ],
    "correctAnswer": "sauter",
    "explanation": "Le bloc \"sauter\" permet de faire sauter un sprite dans un projet Scratch."
  },
  {
    "id": 57,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet d'ajouter un effet visuel à un sprite ?",
    "options": [
      "appliquer un effet",
      "changer l'apparence",
      "ajouter un filtre",
      "effet visuel"
    ],
    "correctAnswer": "appliquer un effet",
    "explanation": "Le bloc \"appliquer un effet\" permet d'ajouter un effet visuel, comme la couleur ou la luminosité, au sprite."
  },
  {
    "id": 58,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de changer la taille d'un sprite ?",
    "options": [
      "modifier la taille",
      "changer l'échelle",
      "agrandir",
      "réduire"
    ],
    "correctAnswer": "modifier la taille",
    "explanation": "Le bloc \"modifier la taille\" permet de redimensionner un sprite en ajustant son échelle."
  },
  {
    "id": 59,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet de définir la vitesse de déplacement d'un sprite ?",
    "options": [
      "vitesse",
      "changer la vitesse",
      "définir la vitesse",
      "modifier la vitesse"
    ],
    "correctAnswer": "changer la vitesse",
    "explanation": "Le bloc \"changer la vitesse\" permet de contrôler la vitesse de déplacement d'un sprite."
  },
  {
    "id": 60,
    "subject": "Scratch Basics",
    "level": "4ème",
    "question": "Quel bloc permet d'exécuter une action à la fin d'une séquence de commandes ?",
    "options": [
      "quand le drapeau vert est cliqué",
      "quand la touche est pressée",
      "quand",
      "fin"
    ],
    "correctAnswer": "quand le drapeau vert est cliqué",
    "explanation": "Le bloc \"quand le drapeau vert est cliqué\" permet de déclencher un script lorsque le drapeau vert est activé."
  },

  // Question pour la quatrième catégorie
  {
    "id": 61,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de créer des clones d'un sprite tout en exécutant un script spécifique pour chaque clone ?",
    "options": [
      "créer un clone de ...",
      "dupliquer sprite",
      "ajouter un clone",
      "générer un clone"
    ],
    "correctAnswer": "créer un clone de ...",
    "explanation": "Le bloc \"créer un clone de ...\" permet de générer une copie d'un sprite et d'exécuter le script attaché au clone."
  },
  {
    "id": 62,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de détecter si une touche spécifique du clavier est pressée ?",
    "options": [
      "touche ... pressée ?",
      "clavier activé",
      "vérifier touche",
      "touche active"
    ],
    "correctAnswer": "touche ... pressée ?",
    "explanation": "Le bloc \"touche ... pressée ?\" permet de détecter si une touche du clavier est pressée."
  },
  {
    "id": 63,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment peut-on interrompre un script spécifique dans Scratch ?",
    "options": [
      "arrêter ce script",
      "pause script",
      "interrompre",
      "stopper script"
    ],
    "correctAnswer": "arrêter ce script",
    "explanation": "Le bloc \"arrêter ce script\" met fin à l'exécution du script en cours."
  },
  {
    "id": 64,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc peut être utilisé pour effectuer une action seulement si une condition est vraie, sinon en exécuter une autre ?",
    "options": [
      "si ... sinon",
      "condition alternative",
      "vrai ou faux",
      "tester sinon"
    ],
    "correctAnswer": "si ... sinon",
    "explanation": "Le bloc \"si ... sinon\" permet d'exécuter une action si une condition est vraie, ou une autre action sinon."
  },
  {
    "id": 65,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de faire répéter indéfiniment une action jusqu'à ce que le programme soit arrêté ?",
    "options": [
      "répéter indéfiniment",
      "boucle infinie",
      "répéter pour toujours",
      "exécuter sans fin"
    ],
    "correctAnswer": "répéter pour toujours",
    "explanation": "Le bloc \"répéter pour toujours\" fait en sorte qu'une action se répète sans interruption."
  },
  {
    "id": 66,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment peut-on intégrer une liste dans Scratch pour stocker plusieurs éléments ?",
    "options": [
      "créer une liste",
      "générer un tableau",
      "ajouter une structure",
      "liste multiple"
    ],
    "correctAnswer": "créer une liste",
    "explanation": "Le bloc \"créer une liste\" permet de créer une structure de données pour stocker plusieurs éléments."
  },
  {
    "id": 67,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de dire au programme d'attendre une durée spécifique avant de continuer ?",
    "options": [
      "attendre ... secondes",
      "pause ... secondes",
      "retarder action",
      "délai d'attente"
    ],
    "correctAnswer": "attendre ... secondes",
    "explanation": "Le bloc \"attendre ... secondes\" fait une pause dans l'exécution du script pendant un certain temps."
  },
  {
    "id": 68,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment peut-on ajouter un élément spécifique à une liste dans Scratch ?",
    "options": [
      "ajouter ... à ...",
      "insérer élément",
      "mettre dans liste",
      "ajouter élément"
    ],
    "correctAnswer": "ajouter ... à ...",
    "explanation": "Le bloc \"ajouter ... à ...\" permet d'ajouter un élément au contenu d'une liste."
  },
  {
    "id": 69,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc peut être utilisé pour arrêter uniquement un script d'un clone ?",
    "options": [
      "arrêter ce clone",
      "stopper clone",
      "arrêter tout",
      "fin du clone"
    ],
    "correctAnswer": "arrêter ce clone",
    "explanation": "Le bloc \"arrêter ce clone\" met fin uniquement à l'exécution des scripts du clone actuel."
  },
  {
    "id": 70,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de répéter une action en utilisant une variable incrémentée à chaque répétition ?",
    "options": [
      "répéter avec variable",
      "répéter (n) fois",
      "compteur de boucle",
      "répéter jusqu'à"
    ],
    "correctAnswer": "répéter (n) fois",
    "explanation": "Le bloc \"répéter (n) fois\" exécute une action un nombre défini de fois, souvent en utilisant une variable comme compteur."
  },
  {
    "id": 71,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet de jouer un son jusqu'à ce qu'il soit terminé avant de passer à l'action suivante ?",
    "options": [
      "jouer le son ... jusqu'à la fin",
      "jouer son",
      "lancer un son",
      "terminer le son"
    ],
    "correctAnswer": "jouer le son ... jusqu'à la fin",
    "explanation": "Le bloc \"jouer le son ... jusqu'à la fin\" attend que le son soit terminé avant de continuer l'exécution du script."
  },
  {
    "id": 72,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc est utilisé pour lire une variable ou un élément spécifique d'une liste ?",
    "options": [
      "lire élément ... de ...",
      "voir variable",
      "obtenir valeur",
      "récupérer élément"
    ],
    "correctAnswer": "lire élément ... de ...",
    "explanation": "Le bloc \"lire élément ... de ...\" récupère la valeur d'un élément spécifique d'une liste."
  },
  {
    "id": 73,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment un sprite peut-il détecter une couleur spécifique dans Scratch ?",
    "options": [
      "touche la couleur ... ?",
      "détecter couleur",
      "vérifier couleur",
      "collision couleur"
    ],
    "correctAnswer": "touche la couleur ... ?",
    "explanation": "Le bloc \"touche la couleur ... ?\" permet à un sprite de détecter une couleur spécifique."
  },
  {
    "id": 74,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc peut être utilisé pour supprimer tous les éléments d'une liste ?",
    "options": [
      "supprimer tout de ...",
      "vider liste",
      "réinitialiser liste",
      "effacer liste"
    ],
    "correctAnswer": "supprimer tout de ...",
    "explanation": "Le bloc \"supprimer tout de ...\" vide entièrement une liste."
  },
  {
    "id": 75,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment un sprite peut-il se diriger vers un autre sprite dans Scratch ?",
    "options": [
      "pointer vers ...",
      "aller à ...",
      "cibler sprite",
      "suivre sprite"
    ],
    "correctAnswer": "pointer vers ...",
    "explanation": "Le bloc \"pointer vers ...\" fait pivoter un sprite pour qu'il soit orienté vers un autre."
  },
  {
    "id": 76,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet d'attendre qu'un message soit reçu avant d'exécuter une action ?",
    "options": [
      "quand je reçois ...",
      "attendre message",
      "écouter signal",
      "recevoir signal"
    ],
    "correctAnswer": "quand je reçois ...",
    "explanation": "Le bloc \"quand je reçois ...\" déclenche un script lorsque le message spécifié est reçu."
  },
  {
    "id": 77,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Comment peut-on comparer deux nombres dans Scratch pour vérifier une condition ?",
    "options": [
      "bloc de comparaison",
      "tester nombres",
      "opérateur de comparaison",
      "comparer ... avec ..."
    ],
    "correctAnswer": "opérateur de comparaison",
    "explanation": "Les opérateurs de comparaison comme \"<\", \">\", et \"=\" permettent de comparer deux nombres."
  },
  {
    "id": 78,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc permet d'afficher une variable sur la scène ?",
    "options": [
      "montrer variable",
      "afficher",
      "voir valeur",
      "variable visible"
    ],
    "correctAnswer": "montrer variable",
    "explanation": "Le bloc \"montrer variable\" rend visible une variable sur la scène."
  },
  {
    "id": 79,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc peut être utilisé pour effacer toutes les formes dessinées par le stylo ?",
    "options": [
      "effacer tout",
      "réinitialiser dessin",
      "vider stylo",
      "supprimer dessins"
    ],
    "correctAnswer": "effacer tout",
    "explanation": "Le bloc \"effacer tout\" supprime tout ce qui a été dessiné par le stylo."
  },
  {
    "id": 80,
    "subject": "Scratch Advanced",
    "level": "3ème",
    "question": "Quel bloc peut être utilisé pour régler l'épaisseur du stylo ?",
    "options": [
      "régler épaisseur stylo",
      "ajuster taille stylo",
      "stylo épaisseur",
      "mettre largeur stylo"
    ],
    "correctAnswer": "régler épaisseur stylo",
    "explanation": "Le bloc \"régler épaisseur stylo\" ajuste la largeur du trait dessiné par le stylo."
  },

  // Question pour la cinquième catégorie
  {
    "id": 81,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de créer un clone d'un sprite dans Scratch ?",
    "options": [
      "créer un clone de moi-même",
      "dupliquer sprite",
      "ajouter un clone",
      "créer un clone"
    ],
    "correctAnswer": "créer un clone de moi-même",
    "explanation": "Le bloc \"créer un clone de moi-même\" permet de dupliquer un sprite et d'exécuter un script spécifique pour chaque clone."
  },
  {
    "id": 82,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc est utilisé pour détecter si une touche spécifique du clavier est pressée ?",
    "options": [
      "touche pressée ... ?",
      "détecter touche",
      "si touche appuyée",
      "clavier activé"
    ],
    "correctAnswer": "touche pressée ... ?",
    "explanation": "Le bloc \"touche pressée ... ?\" vérifie si une touche particulière du clavier est pressée."
  },
  {
    "id": 83,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment peut-on faire rebondir un sprite lorsqu'il atteint un bord ?",
    "options": [
      "rebondir si bord atteint",
      "retourner à bord",
      "changement de direction",
      "collision avec bord"
    ],
    "correctAnswer": "rebondir si bord atteint",
    "explanation": "Le bloc \"rebondir si bord atteint\" change automatiquement la direction d'un sprite lorsqu'il touche un bord."
  },
  {
    "id": 84,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de définir une liste vide pour y ajouter des éléments ?",
    "options": [
      "créer une liste",
      "nouvelle liste",
      "ajouter une liste",
      "initialiser liste"
    ],
    "correctAnswer": "créer une liste",
    "explanation": "Le bloc \"créer une liste\" initialise une nouvelle liste vide qui peut contenir plusieurs éléments."
  },
  {
    "id": 85,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment ajouter un élément spécifique à une liste dans Scratch ?",
    "options": [
      "ajouter ... à ...",
      "insérer dans liste",
      "ajouter élément",
      "mettre dans liste"
    ],
    "correctAnswer": "ajouter ... à ...",
    "explanation": "Le bloc \"ajouter ... à ...\" permet d'ajouter un nouvel élément à la fin d'une liste."
  },
  {
    "id": 86,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de supprimer un élément d'une liste à une position donnée ?",
    "options": [
      "supprimer ... de ...",
      "retirer élément",
      "effacer position",
      "supprimer dans liste"
    ],
    "correctAnswer": "supprimer ... de ...",
    "explanation": "Le bloc \"supprimer ... de ...\" permet de retirer un élément spécifique d'une liste en indiquant sa position."
  },
  {
    "id": 87,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de mélanger les costumes d'un sprite pour créer une animation ?",
    "options": [
      "suivant costume",
      "changer costume",
      "animation costume",
      "défilement costume"
    ],
    "correctAnswer": "suivant costume",
    "explanation": "Le bloc \"suivant costume\" change le costume du sprite pour passer au costume suivant dans la liste."
  },
  {
    "id": 88,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment détecter la distance entre un sprite et un objet ou une position ?",
    "options": [
      "distance de ...",
      "proximité de ...",
      "mesurer distance",
      "calculer distance"
    ],
    "correctAnswer": "distance de ...",
    "explanation": "Le bloc \"distance de ...\" mesure la distance entre le sprite actuel et un autre sprite ou une position donnée."
  },
  {
    "id": 89,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de définir l'effet graphique d'un sprite ?",
    "options": [
      "ajouter effet ...",
      "changer effet ... de ...",
      "modifier effet ...",
      "effet graphique"
    ],
    "correctAnswer": "changer effet ... de ...",
    "explanation": "Le bloc \"changer effet ... de ...\" permet de modifier des effets visuels comme la couleur, la transparence ou la luminosité d'un sprite."
  },
  {
    "id": 90,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de redémarrer un effet graphique appliqué à un sprite ?",
    "options": [
      "effacer tous les effets",
      "réinitialiser effets",
      "supprimer effets",
      "retirer effets"
    ],
    "correctAnswer": "effacer tous les effets",
    "explanation": "Le bloc \"effacer tous les effets\" supprime tous les effets graphiques appliqués à un sprite, le restaurant à son état initial."
  },
  {
    "id": 91,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc peut être utilisé pour régler la direction dans laquelle un sprite se déplace ?",
    "options": [
      "pointer dans la direction ...",
      "changer direction",
      "définir déplacement",
      "orientation du sprite"
    ],
    "correctAnswer": "pointer dans la direction ...",
    "explanation": "Le bloc \"pointer dans la direction ...\" oriente un sprite dans une direction spécifique avant qu'il ne se déplace."
  },
  {
    "id": 92,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment un clone peut-il être supprimé automatiquement après une action ?",
    "options": [
      "supprimer ce clone",
      "effacer clone",
      "arrêter clone",
      "fin clone"
    ],
    "correctAnswer": "supprimer ce clone",
    "explanation": "Le bloc \"supprimer ce clone\" détruit le clone actuel après qu'il a exécuté ses scripts."
  },
  {
    "id": 93,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de basculer un sprite entre deux costumes spécifiques ?",
    "options": [
      "basculer costume à ...",
      "aller au costume ...",
      "changer costume ...",
      "définir costume ..."
    ],
    "correctAnswer": "basculer costume à ...",
    "explanation": "Le bloc \"basculer costume à ...\" permet de passer directement à un costume spécifique du sprite."
  },
  {
    "id": 94,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment afficher le contenu d'une liste dans l'interface de Scratch ?",
    "options": [
      "montrer liste",
      "afficher éléments",
      "dévoiler liste",
      "liste visible"
    ],
    "correctAnswer": "montrer liste",
    "explanation": "Le bloc \"montrer liste\" affiche le contenu d'une liste dans l'interface utilisateur pour qu'elle soit visible pendant l'exécution."
  },
  {
    "id": 95,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de vérifier si une liste contient un élément spécifique ?",
    "options": [
      "contient ... dans ... ?",
      "vérifier liste",
      "élément présent",
      "liste inclut"
    ],
    "correctAnswer": "contient ... dans ... ?",
    "explanation": "Le bloc \"contient ... dans ... ?\" retourne vrai si l'élément est présent dans la liste spécifiée."
  },
  {
    "id": 96,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment déclencher une action uniquement pour un clone spécifique ?",
    "options": [
      "quand je commence comme un clone",
      "si clone activé",
      "début de clone",
      "initialisation clone"
    ],
    "correctAnswer": "quand je commence comme un clone",
    "explanation": "Le bloc \"quand je commence comme un clone\" exécute un script seulement pour les clones et non pour le sprite principal."
  },
  {
    "id": 97,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc peut être utilisé pour attendre un temps aléatoire entre deux valeurs ?",
    "options": [
      "attendre aléatoire entre ... et ...",
      "attendre temps variable",
      "pause aléatoire",
      "temps aléatoire"
    ],
    "correctAnswer": "attendre aléatoire entre ... et ...",
    "explanation": "Le bloc \"attendre aléatoire entre ... et ...\" permet de faire une pause dont la durée est choisie de façon aléatoire entre deux limites."
  },
  {
    "id": 98,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de redimensionner un sprite de manière progressive ?",
    "options": [
      "changer taille de ...",
      "agrandir sprite",
      "augmenter taille",
      "réduire taille"
    ],
    "correctAnswer": "changer taille de ...",
    "explanation": "Le bloc \"changer taille de ...\" modifie progressivement la taille d'un sprite en augmentant ou en réduisant sa valeur."
  },
  {
    "id": 99,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Comment peut-on synchroniser plusieurs scripts exécutant des actions différentes ?",
    "options": [
      "envoyer un message",
      "coordination",
      "déclencheur global",
      "action synchronisée"
    ],
    "correctAnswer": "envoyer un message",
    "explanation": "Le bloc \"envoyer un message\" peut être utilisé pour synchroniser des scripts en diffusant un message déclencheur."
  },
  {
    "id": 100,
    "subject": "Scratch Notions Expert",
    "level": "2nde",
    "question": "Quel bloc permet de vérifier l'angle d'orientation actuel d'un sprite ?",
    "options": [
      "orientation actuelle",
      "direction",
      "angle de rotation",
      "vérifier orientation"
    ],
    "correctAnswer": "direction",
    "explanation": "Le bloc \"direction\" donne l'angle d'orientation actuel d'un sprite en degrés."
  },
  
  // Question pour la sixième catégorie
  
];