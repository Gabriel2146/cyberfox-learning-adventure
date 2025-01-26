export const youthQuestions = {
  "personal-info": [
    {
      type: "text" as const,
      question: "Imagina que estás jugando tu videojuego favorito en línea y alguien te pide tu dirección para enviarte un regalo. ¿Qué le responderías y por qué?",
      context: "En los juegos en línea, a veces podemos encontrar personas que quieren ser nuestros amigos. Aunque pueden parecer amigables, debemos ser muy cuidadosos con la información que compartimos.",
      icon: "Lock",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      correctAnswers: ["no", "nunca", "no debo", "no se debe", "no compartir", "peligroso", "privado"],
      feedback: {
        correct: "¡Excelente respuesta! Es muy importante nunca compartir información personal con desconocidos en línea.",
        incorrect: "Recuerda que nunca debes compartir información personal con desconocidos en línea, incluso si ofrecen regalos.",
        funFact: "¿Sabías que? Los estafadores en línea a menudo intentan ganarse la confianza de los niños ofreciendo regalos o premios."
      }
    }
  ],
  "passwords": [
    {
      type: "multiple-choice" as const,
      question: "¿Cuál es una buena práctica para crear contraseñas seguras?",
      context: "Las contraseñas son como las llaves de tu casa digital. Así como no dejarías la puerta de tu casa sin llave, tampoco debes usar contraseñas débiles en tus cuentas.",
      icon: "KeyRound",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec",
      options: [
        "Usar la misma contraseña para todo",
        "Combinar letras, números y símbolos",
        "Usar tu fecha de nacimiento",
        "Usar palabras del diccionario",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Una contraseña segura debe combinar diferentes tipos de caracteres.",
        incorrect: "Las contraseñas más seguras combinan letras, números y símbolos para mayor protección.",
        funFact: "¿Sabías que? El 81% de las violaciones de datos son causadas por contraseñas débiles."
      }
    }
  ],
  "online-safety": [
    {
      type: "text" as const,
      question: "Tu mejor amigo te cuenta que alguien lo está molestando en línea y no sabe qué hacer. ¿Qué consejo le darías para ayudarlo?",
      context: "El internet es como un patio de juegos gigante donde podemos encontrar amigos, pero también personas que no se comportan bien. Es importante saber cómo actuar cuando alguien nos molesta.",
      icon: "AlertTriangle",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      correctAnswers: ["adulto", "padres", "profesor", "reportar", "bloquear", "ayuda", "contar", "decir"],
      feedback: {
        correct: "¡Muy bien! Es importante buscar ayuda de un adulto de confianza y reportar el acoso.",
        incorrect: "Recuerda que lo mejor es buscar ayuda de un adulto de confianza y reportar la situación.",
        funFact: "¿Sabías que? El 60% de los jóvenes han sido testigos de ciberacoso, pero muchos no lo reportan por miedo."
      }
    }
  ],
  "cyberbullying": [
    {
      type: "multiple-choice" as const,
      question: "¿Qué es el ciberacoso?",
      context: "Así como en el patio de la escuela algunos niños pueden molestar a otros, en internet también puede ocurrir algo similar. Es importante reconocerlo para poder detenerlo.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      options: [
        "Un juego en línea",
        "Acosar o intimidar a alguien usando medios digitales",
        "Una red social",
        "Un tipo de virus",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! El ciberacoso es una forma de acoso que ocurre a través de medios digitales.",
        incorrect: "El ciberacoso es cuando alguien usa medios digitales para acosar, intimidar o molestar a otros.",
        funFact: "¿Sabías que? El 34% de los estudiantes han experimentado ciberacoso en algún momento."
      }
    }
  ],
  "digital-footprint": [
    {
      type: "multiple-choice" as const,
      question: "¿Qué es la huella digital?",
      context: "Cada vez que usamos internet, dejamos rastros, como cuando dejamos huellas en la arena de la playa. Estas huellas digitales pueden permanecer por mucho tiempo.",
      icon: "FileCheck",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      options: [
        "Una app de fotografía",
        "El rastro de información que dejas en internet",
        "Un tipo de contraseña",
        "Un dispositivo electrónico",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Tu huella digital es toda la información que dejas al usar internet.",
        incorrect: "La huella digital es el rastro de información que dejas cuando usas internet, incluyendo publicaciones, comentarios y likes.",
        funFact: "¿Sabías que? El 90% de los datos en el mundo se han creado en los últimos dos años."
      }
    }
  ]
};