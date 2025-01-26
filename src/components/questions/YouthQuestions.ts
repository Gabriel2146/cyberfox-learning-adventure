export const youthQuestions = {
  "personal-info": [
    {
      type: "text",
      question: "Imagina que estás jugando tu videojuego favorito en línea y alguien te pide tu dirección para enviarte un regalo. ¿Qué le responderías y por qué?",
      icon: "Lock",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
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
      type: "multiple-choice",
      question: "¿Cuál es una buena práctica para crear contraseñas seguras?",
      icon: "KeyRound",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop",
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
      type: "text",
      question: "Tu mejor amigo te cuenta que alguien lo está molestando en línea y no sabe qué hacer. ¿Qué consejo le darías para ayudarlo?",
      icon: "AlertTriangle",
      image: "https://images.unsplash.com/photo-1590424946952-7e9f06295e52?w=800&auto=format&fit=crop",
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
      type: "multiple-choice",
      question: "¿Qué es el ciberacoso?",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
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
      type: "multiple-choice",
      question: "¿Qué es la huella digital?",
      icon: "FileCheck",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop",
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
  ],
  "critical-thinking": [
    {
      type: "multiple-choice",
      question: "¿Cómo identificar información falsa en internet?",
      icon: "AlertTriangle",
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=800&auto=format&fit=crop",
      options: [
        "Creer todo lo que veo",
        "Verificar fuentes y contrastar información",
        "Compartir sin leer",
        "Ignorar todas las noticias",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien hecho! Es importante verificar las fuentes y contrastar la información.",
        incorrect: "Para identificar información falsa, debes verificar las fuentes y contrastar la información con sitios confiables.",
        funFact: "¿Sabías que? El 64% de los adultos no pueden distinguir entre noticias falsas y reales."
      }
    }
  ],
  "digital-relationships": [
    {
      type: "multiple-choice",
      question: "¿Qué precauciones debes tomar al hacer amigos en línea?",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=800&auto=format&fit=crop",
      options: [
        "Compartir toda tu información",
        "No compartir información personal y ser cauteloso",
        "Encontrarse en persona inmediatamente",
        "Ignorar los consejos de seguridad",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Es importante ser cauteloso y proteger tu información personal.",
        incorrect: "Al hacer amigos en línea, debes ser cauteloso y nunca compartir información personal.",
        funFact: "¿Sabías que? El 50% de los jóvenes han compartido información personal con extraños en línea."
      }
    }
  ],
  "gaming-safety": [
    {
      type: "multiple-choice",
      question: "¿Qué medidas de seguridad debes tomar al jugar en línea?",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      options: [
        "Usar tu nombre real",
        "Usar un nickname y no compartir datos personales",
        "Compartir tu ubicación",
        "Aceptar todas las solicitudes de amistad",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Es más seguro usar un nickname y mantener tu información personal privada.",
        incorrect: "Al jugar en línea, es más seguro usar un nickname y nunca compartir información personal.",
        funFact: "¿Sabías que? El 70% de los jugadores en línea han sido contactados por extraños."
      }
    }
  ],
  "content-creation": [
    {
      type: "multiple-choice",
      question: "¿Qué debes considerar antes de publicar contenido en línea?",
      icon: "FileCheck",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      options: [
        "Publicar sin pensar",
        "El impacto y la privacidad del contenido",
        "Ignorar la configuración de privacidad",
        "Compartir todo lo que ves",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Es importante pensar en el impacto y la privacidad antes de publicar.",
        incorrect: "Antes de publicar contenido, debes considerar su impacto y configurar adecuadamente la privacidad.",
        funFact: "¿Sabías que? Una vez que publicas algo en línea, puede ser difícil eliminarlo por completo."
      }
    }
  ],
  "sharing-online": [
    {
      type: "multiple-choice",
      question: "¿Qué tipo de contenido es apropiado compartir en línea?",
      icon: "FileCheck",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
      options: [
        "Información privada",
        "Contenido respetuoso y apropiado para tu edad",
        "Fotos de otros sin permiso",
        "Datos personales de amigos",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien! Solo debes compartir contenido respetuoso y apropiado para tu edad.",
        incorrect: "Es importante compartir solo contenido respetuoso y apropiado para tu edad, respetando la privacidad de otros.",
        funFact: "¿Sabías que? Compartir contenido inapropiado puede tener consecuencias legales."
      }
    }
  ]
};
