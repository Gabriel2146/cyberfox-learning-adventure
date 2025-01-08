import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { youthQuestions } from "./questions/YouthQuestions";

const Lesson = () => {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  console.log(`Rendering Lesson component for lesson: ${lessonId}, age group: ${ageGroup}`);

  const questions = {
    "personal-info": [
      {
        question: "¿Qué información NO debes compartir en línea?",
        options: [
          "Tu dirección de casa",
          "Tu color favorito",
          "Tu película favorita",
          "Tu comida favorita",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Excelente! Tu dirección es información privada que nunca debes compartir en línea. Mantener esta información privada te ayuda a estar seguro.",
          incorrect: "Recuerda: Tu dirección de casa es información privada y personal. Compartirla en línea puede ser peligroso porque personas malintencionadas podrían usarla."
        }
      },
      {
        question: "Si alguien desconocido te pide información personal, ¿qué debes hacer?",
        options: [
          "Compartir solo un poco de información",
          "Ignorar y bloquear",
          "Preguntar por qué la necesita",
          "Compartir si parece amable",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Muy bien! Ignorar y bloquear es la mejor opción. No importa cuán amables parezcan, los desconocidos en línea pueden tener malas intenciones.",
          incorrect: "La acción más segura es ignorar y bloquear. Nunca sabemos las verdaderas intenciones de los desconocidos en línea, incluso si parecen amables."
        }
      },
      {
        question: "¿Cuál de estos datos es seguro compartir en línea?",
        options: [
          "Tu número de teléfono",
          "El nombre de tu mascota",
          "Tu deporte favorito",
          "El nombre de tu escuela",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Correcto! Compartir tus intereses generales como tu deporte favorito es seguro. Esta información no puede ser usada para identificarte o hacerte daño.",
          incorrect: "Tu deporte favorito es seguro de compartir porque es información general que no puede usarse para identificarte. Otros datos como teléfono o escuela son privados."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te pide una foto tuya en internet?",
        options: [
          "Enviar una foto antigua",
          "Decirle que no y avisar a un adulto",
          "Enviar la foto si es un amigo de un amigo",
          "Pedir una foto suya primero",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Es importante proteger tu privacidad. Nunca debes enviar fotos a desconocidos.",
          incorrect: "Recuerda, siempre es mejor decir que no y avisar a un adulto. La seguridad es lo primero."
        }
      },
      {
        question: "¿Cuál es una buena regla para usar redes sociales?",
        options: [
          "Aceptar todas las solicitudes de amistad",
          "Compartir fotos todos los días",
          "Solo conectar con personas que conoces",
          "Dar like a todo lo que ves",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Exacto! Solo debes conectar con personas que conoces en la vida real. Esto te ayuda a mantenerte seguro.",
          incorrect: "Recuerda, conectar solo con personas que conoces es una buena práctica para proteger tu información personal."
        }
      },
      {
        question: "Si un juego en línea te pide tu dirección para darte un premio, ¿qué debes hacer?",
        options: [
          "Dar la dirección para recibir el premio",
          "No dar la información y cerrar el juego",
          "Dar una dirección falsa",
          "Preguntar a otros jugadores qué hacer",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Nunca debes dar información personal a juegos en línea. Es mejor proteger tu privacidad.",
          incorrect: "Recuerda, si un juego te pide información personal, es mejor no darla y cerrar el juego."
        }
      },
      {
        question: "¿Qué información es segura para usar en tu nombre de usuario?",
        options: [
          "Tu nombre completo y edad",
          "Tu dirección de casa",
          "Un apodo que no revele datos personales",
          "Tu número de teléfono",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Bien hecho! Usar un apodo es una buena forma de mantener tu información personal segura.",
          incorrect: "Recuerda, siempre es mejor usar un apodo que no revele tu información personal en línea."
        }
      },
      {
        question: "Si alguien comparte tu información personal sin permiso, ¿qué debes hacer?",
        options: [
          "No hacer nada, no es importante",
          "Compartir su información también",
          "Avisar a tus padres o un adulto de confianza",
          "Esperar a que se olvide",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Correcto! Siempre debes avisar a un adulto de confianza si alguien comparte tu información sin permiso.",
          incorrect: "Recuerda, es importante avisar a un adulto si alguien comparte tu información personal sin tu permiso."
        }
      },
      {
        question: "¿Por qué es importante proteger tu información personal?",
        options: [
          "Para tener más amigos en línea",
          "Para ganar más juegos",
          "Para evitar que personas malas la usen",
          "Para ser más popular",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Exacto! Proteger tu información personal es crucial para mantenerte a salvo en línea.",
          incorrect: "Recuerda, proteger tu información personal es importante para evitar que personas malintencionadas la usen."
        }
      },
      {
        question: "¿Qué debes hacer antes de unirte a un nuevo juego o red social?",
        options: [
          "Dar toda tu información",
          "Consultar con tus padres o tutores",
          "Crear varias cuentas",
          "Invitar a todos tus amigos",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Siempre es bueno consultar con tus padres o tutores antes de unirte a algo nuevo en línea.",
          incorrect: "Recuerda, consultar con tus padres o tutores es una buena práctica antes de unirte a un nuevo juego o red social."
        }
      },
    ],
    "passwords": [
      {
        question: "¿Cuál es la mejor manera de crear una contraseña segura?",
        options: [
          "Usar tu nombre y fecha de nacimiento",
          "Usar una combinación de letras, números y símbolos",
          "Usar la misma contraseña para todo",
          "Escribir tu contraseña en un papel",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Excelente! Una contraseña fuerte debe combinar letras, números y símbolos. Esto la hace más difícil de adivinar o hackear.",
          incorrect: "Las contraseñas más seguras combinan letras, números y símbolos. Evita usar información personal o contraseñas simples que sean fáciles de adivinar."
        }
      },
      {
        question: "¿Con qué frecuencia debes cambiar tu contraseña?",
        options: [
          "Nunca, una vez es suficiente",
          "Cada vez que inicias sesión",
          "Cada pocos meses",
          "Solo si alguien la descubre",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Correcto! Cambiar tu contraseña cada pocos meses ayuda a mantener tu cuenta segura.",
          incorrect: "Recuerda, es importante cambiar tu contraseña regularmente para proteger tu información."
        }
      },
      {
        question: "¿Qué debes hacer si olvidas tu contraseña?",
        options: [
          "Crear una nueva cuenta",
          "Usar la opción de 'olvidé mi contraseña'",
          "Preguntar a un amigo",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Usar la opción de 'olvidé mi contraseña' es la forma correcta de recuperar el acceso a tu cuenta.",
          incorrect: "Recuerda, si olvidas tu contraseña, siempre puedes usar la opción de recuperación."
        }
      },
      {
        question: "¿Es seguro compartir tu contraseña con amigos?",
        options: [
          "Sí, si son buenos amigos",
          "No, nunca debes compartirla",
          "Solo si te lo piden",
          "Sí, si es para un juego",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Nunca debes compartir tu contraseña, incluso con amigos. Es importante mantenerla privada.",
          incorrect: "Recuerda, compartir tu contraseña nunca es seguro. Siempre debe permanecer privada."
        }
      },
      {
        question: "¿Qué tipo de contraseña es más segura?",
        options: [
          "123456",
          "contraseña",
          "MiNombre123!",
          "abcdefg",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Correcto! Usar una combinación de letras, números y símbolos es la mejor manera de crear una contraseña segura.",
          incorrect: "Recuerda, las contraseñas simples son fáciles de adivinar. Siempre usa combinaciones más complejas."
        }
      },
      {
        question: "¿Qué debes hacer si alguien intenta acceder a tu cuenta?",
        options: [
          "Ignorarlo",
          "Cambiar tu contraseña inmediatamente",
          "Contarle a un amigo",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Cambiar tu contraseña inmediatamente es la mejor forma de proteger tu cuenta.",
          incorrect: "Recuerda, si alguien intenta acceder a tu cuenta, siempre debes cambiar tu contraseña de inmediato."
        }
      },
      {
        question: "¿Qué es un administrador de contraseñas?",
        options: [
          "Un programa que guarda tus contraseñas",
          "Una persona que te ayuda a recordar contraseñas",
          "Un tipo de contraseña",
          "Un juego de computadora",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Correcto! Un administrador de contraseñas es una herramienta útil para mantener tus contraseñas seguras.",
          incorrect: "Recuerda, un administrador de contraseñas puede ayudarte a gestionar y proteger tus contraseñas."
        }
      },
      {
        question: "¿Por qué es importante tener contraseñas diferentes para cada cuenta?",
        options: [
          "Para que sea más fácil recordarlas",
          "Para que si una se pierde, las demás estén seguras",
          "No es importante",
          "Para que todos puedan acceder a tus cuentas",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Usar contraseñas diferentes ayuda a proteger tus cuentas en caso de que una sea comprometida.",
          incorrect: "Recuerda, tener contraseñas únicas para cada cuenta es crucial para tu seguridad en línea."
        }
      },
      {
        question: "¿Qué es una contraseña de un solo uso?",
        options: [
          "Una contraseña que puedes usar varias veces",
          "Una contraseña que solo puedes usar una vez",
          "Una contraseña que se olvida fácilmente",
          "Una contraseña que es muy larga",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Las contraseñas de un solo uso son útiles para aumentar la seguridad en transacciones.",
          incorrect: "Recuerda, las contraseñas de un solo uso son temporales y se utilizan para una sola sesión."
        }
      },
      {
        question: "¿Qué debes hacer si recibes un correo electrónico pidiendo tu contraseña?",
        options: [
          "Responder con tu contraseña",
          "Ignorarlo y eliminarlo",
          "Enviar tu contraseña si parece real",
          "Contarle a un adulto",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Siempre debes ignorar y eliminar correos sospechosos que piden tu contraseña.",
          incorrect: "Recuerda, nunca debes responder a correos que piden tu contraseña. Siempre es mejor ignorarlos."
        }
      },
    ],
    "online-safety": [
      {
        question: "¿Qué debes hacer si alguien te molesta en línea?",
        options: [
          "Ignorarlo",
          "Contarle a un adulto",
          "Responder con insultos",
          "Hacer lo mismo que él",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Muy bien! Contarle a un adulto de confianza es la mejor opción. Ellos pueden ayudarte a manejar la situación de forma segura.",
          incorrect: "Siempre es mejor contarle a un adulto de confianza cuando alguien te molesta en línea. Ellos pueden ayudarte y tomar las acciones necesarias."
        }
      },
      {
        question: "¿Es seguro chatear con extraños en línea?",
        options: [
          "Sí, siempre es seguro",
          "No, nunca es seguro",
          "Solo si son amables",
          "Sí, si no compartes información personal",
        ],
        correctAnswer: 3,
        feedback: {
          correct: "¡Correcto! Chatear con extraños puede ser riesgoso, pero si no compartes información personal, es más seguro.",
          incorrect: "Recuerda, siempre hay riesgos al chatear con extraños. Mantén tu información personal privada."
        }
      },
      {
        question: "¿Qué es un virus informático?",
        options: [
          "Un tipo de juego",
          "Un programa que daña tu computadora",
          "Una forma de comunicarse",
          "Un tipo de contraseña",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Un virus informático puede dañar tu computadora y robar información. Es importante tener un buen antivirus.",
          incorrect: "Recuerda, un virus informático es un programa dañino. Siempre debes proteger tu computadora con software de seguridad."
        }
      },
      {
        question: "¿Qué debes hacer si recibes un enlace sospechoso?",
        options: [
          "Hacer clic en él para ver qué es",
          "Ignorarlo y eliminarlo",
          "Compartirlo con amigos",
          "Preguntar a un adulto",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Ignorar y eliminar enlaces sospechosos es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes hacer clic en enlaces sospechosos. Siempre es mejor ignorarlos."
        }
      },
      {
        question: "¿Por qué es importante tener un antivirus en tu computadora?",
        options: [
          "Para jugar mejor",
          "Para proteger tu computadora de virus",
          "No es importante",
          "Para que sea más rápida",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Un antivirus protege tu computadora de amenazas y virus que pueden robar información.",
          incorrect: "Recuerda, tener un antivirus es crucial para mantener tu computadora segura de virus y ataques."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te pide información personal en un juego?",
        options: [
          "Dar la información si es un amigo",
          "Decir que no y avisar a un adulto",
          "Compartir solo un poco",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Siempre debes decir que no y avisar a un adulto si alguien te pide información personal.",
          incorrect: "Recuerda, nunca debes compartir información personal en juegos. Siempre es mejor proteger tu privacidad."
        }
      },
      {
        question: "¿Qué es el ciberacoso?",
        options: [
          "Cuando alguien te ayuda en línea",
          "Cuando alguien te molesta o acosa en línea",
          "Cuando haces amigos en línea",
          "Cuando juegas en línea",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El ciberacoso es un problema serio y siempre debes reportarlo a un adulto.",
          incorrect: "Recuerda, el ciberacoso es cuando alguien te molesta en línea. Siempre es importante hablar con un adulto sobre esto."
        }
      },
      {
        question: "¿Es seguro usar la misma contraseña para todas tus cuentas?",
        options: [
          "Sí, es más fácil",
          "No, es muy arriesgado",
          "Solo si es una buena contraseña",
          "Sí, si la recuerdas",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Usar la misma contraseña es arriesgado. Si una cuenta se ve comprometida, todas tus cuentas están en peligro.",
          incorrect: "Recuerda, siempre debes usar contraseñas diferentes para cada cuenta para mantenerte seguro."
        }
      },
      {
        question: "¿Qué debes hacer si ves algo inapropiado en línea?",
        options: [
          "Ignorarlo",
          "Contarle a un adulto",
          "Compartirlo con amigos",
          "Hacer una captura de pantalla",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Siempre debes contarle a un adulto si ves algo inapropiado en línea.",
          incorrect: "Recuerda, reportar contenido inapropiado a un adulto es importante para tu seguridad."
        }
      },
      {
        question: "¿Por qué es importante cerrar sesión en cuentas públicas?",
        options: [
          "Para que otros puedan usar tu cuenta",
          "Para proteger tu información personal",
          "No es importante",
          "Para que sea más fácil acceder la próxima vez",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Cerrar sesión en cuentas públicas ayuda a proteger tu información personal de otros.",
          incorrect: "Recuerda, siempre debes cerrar sesión en computadoras públicas para mantener tu información segura."
        }
      },
    ],
    "scams": [
      {
        question: "¿Qué es una estafa?",
        options: [
          "Un tipo de juego",
          "Un intento de engañarte para robarte",
          "Una forma de ganar dinero",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Las estafas son intentos de engañarte para robarte información o dinero. Es importante aprender a identificarlas.",
          incorrect: "Recuerda, una estafa es un engaño para robarte información o dinero. Los estafadores usan trucos para parecer confiables, pero debemos estar alerta."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te ofrece un premio que parece demasiado bueno para ser verdad?",
        options: [
          "Aceptar el premio",
          "Ignorarlo y no responder",
          "Contarle a un amigo",
          "Preguntar a un adulto",
        ],
        correctAnswer: 3,
        feedback: {
          correct: "¡Bien hecho! Siempre es mejor preguntar a un adulto si algo parece demasiado bueno para ser verdad.",
          incorrect: "Recuerda, si algo parece demasiado bueno para ser verdad, es mejor preguntar a un adulto antes de actuar."
        }
      },
      {
        question: "¿Es seguro compartir información personal para ganar un premio?",
        options: [
          "Sí, si es un buen premio",
          "No, nunca es seguro",
          "Solo si es un amigo",
          "Sí, si parece real",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Nunca debes compartir información personal, incluso si te ofrecen un premio.",
          incorrect: "Recuerda, compartir información personal para ganar premios nunca es seguro. Siempre protege tu información."
        }
      },
      {
        question: "¿Qué es un phishing?",
        options: [
          "Un tipo de juego",
          "Un intento de robar información personal",
          "Una forma de ganar dinero",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El phishing es un intento de engañarte para que compartas información personal.",
          incorrect: "Recuerda, el phishing es un engaño para robar tu información. Siempre verifica la fuente antes de compartir datos."
        }
      },
      {
        question: "¿Qué debes hacer si recibes un mensaje sospechoso?",
        options: [
          "Responder y preguntar más",
          "Ignorarlo y eliminarlo",
          "Compartirlo con amigos",
          "Hacer clic en los enlaces",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Ignorar y eliminar mensajes sospechosos es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes responder a mensajes sospechosos. Siempre es mejor ignorarlos."
        }
      },
      {
        question: "¿Es seguro comprar cosas en línea sin preguntar a un adulto?",
        options: [
          "Sí, siempre es seguro",
          "No, siempre debes preguntar",
          "Solo si tienes dinero",
          "Sí, si es un buen sitio",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Siempre debes preguntar a un adulto antes de hacer compras en línea.",
          incorrect: "Recuerda, preguntar a un adulto antes de comprar en línea es importante para tu seguridad."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te pide dinero en línea?",
        options: [
          "Darles el dinero",
          "Decir que no y avisar a un adulto",
          "Preguntar a tus amigos",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Siempre debes decir que no y avisar a un adulto si alguien te pide dinero en línea.",
          incorrect: "Recuerda, nunca debes enviar dinero a personas que conoces solo en línea. Siempre es mejor avisar a un adulto."
        }
      },
      {
        question: "¿Qué es un 'esquema piramidal'?",
        options: [
          "Un tipo de juego",
          "Un intento de engañarte para ganar dinero",
          "Una forma de hacer amigos",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Un esquema piramidal es un tipo de estafa que promete ganancias a cambio de dinero.",
          incorrect: "Recuerda, los esquemas piramidales son ilegales y siempre debes evitarlos."
        }
      },
      {
        question: "¿Es seguro hacer clic en anuncios en línea?",
        options: [
          "Sí, siempre es seguro",
          "No, pueden ser engañosos",
          "Solo si son de sitios conocidos",
          "Sí, si son divertidos",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Muchos anuncios en línea pueden ser engañosos. Siempre verifica antes de hacer clic.",
          incorrect: "Recuerda, hacer clic en anuncios puede ser riesgoso. Siempre verifica la fuente antes de interactuar."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te pide que compartas tu contraseña?",
        options: [
          "Compartirla si es un amigo",
          "Decir que no y avisar a un adulto",
          "Compartirla si parece real",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Nunca debes compartir tu contraseña, incluso si parece que es un amigo.",
          incorrect: "Recuerda, siempre debes proteger tu contraseña y nunca compartirla con nadie."
        }
      },
    ],
    "cybersecurity": [
      {
        question: "¿Qué es el phishing y cómo puedes identificarlo?",
        options: [
          "Un virus que daña tu computadora",
          "Un intento de robar información haciéndose pasar por una entidad confiable",
          "Una red social nueva",
          "Un tipo de contraseña segura",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El phishing es un tipo de estafa donde los atacantes se hacen pasar por entidades confiables para robar información. Es importante verificar siempre la autenticidad de los correos y mensajes que recibimos.",
          incorrect: "El phishing es una técnica de engaño donde los estafadores se hacen pasar por entidades confiables (bancos, redes sociales, etc.) para robar información personal. Siempre verifica la autenticidad de los remitentes y enlaces."
        }
      },
      {
        question: "¿Cuál es una buena práctica para proteger tus cuentas en línea?",
        options: [
          "Usar la misma contraseña en todas las cuentas",
          "Compartir tus contraseñas con amigos de confianza",
          "Activar la autenticación de dos factores",
          "Guardar las contraseñas en notas del teléfono",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Excelente! La autenticación de dos factores añade una capa extra de seguridad a tus cuentas, haciendo más difícil que los hackers accedan incluso si conocen tu contraseña.",
          incorrect: "La autenticación de dos factores es una medida de seguridad adicional que requiere un segundo paso para verificar tu identidad, como un código enviado a tu teléfono."
        }
      },
      {
        question: "¿Qué debes hacer si sospechas que tu cuenta ha sido hackeada?",
        options: [
          "No hacer nada y esperar",
          "Cambiar inmediatamente la contraseña y activar la autenticación de dos factores",
          "Publicar en redes sociales que te hackearon",
          "Crear una nueva cuenta y abandonar la anterior",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Cambiar la contraseña inmediatamente y activar medidas de seguridad adicionales son los primeros pasos cruciales para proteger tu cuenta.",
          incorrect: "Cuando sospechas que tu cuenta ha sido comprometida, es crucial actuar rápidamente cambiando la contraseña y activando medidas de seguridad adicionales para prevenir más daños."
        }
      },
      {
        question: "¿Qué es el ransomware?",
        options: [
          "Un programa que bloquea tus archivos y pide dinero para recuperarlos",
          "Un antivirus gratuito",
          "Una red social segura",
          "Un tipo de contraseña",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Exacto! El ransomware es un tipo de malware que encripta tus archivos y exige un pago para desbloquearlos. Es importante mantener copias de seguridad y no abrir archivos sospechosos.",
          incorrect: "El ransomware es un tipo de malware peligroso que secuestra tus archivos pidiendo un rescate. Para protegerte, mantén copias de seguridad y ten cuidado con los archivos que descargas."
        }
      },
      {
        question: "¿Cuál es una señal de que un sitio web es seguro para compras en línea?",
        options: [
          "Tiene muchas ofertas y descuentos",
          "El candado de seguridad (HTTPS) en la barra de direcciones",
          "Usa muchas imágenes llamativas",
          "Pide pago solo en efectivo",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! El candado y HTTPS indican que la conexión está cifrada y es segura para transmitir datos sensibles como información de pago.",
          incorrect: "El candado de seguridad (HTTPS) en la barra de direcciones indica que la conexión está cifrada y es segura. Siempre verifica esto antes de hacer compras en línea."
        }
      },
      {
        question: "¿Qué es el 'sexting' y por qué es peligroso?",
        options: [
          "Una red social nueva",
          "Compartir contenido íntimo por mensajes, lo cual puede ser usado para extorsión",
          "Un tipo de mensaje cifrado",
          "Una aplicación de mensajería",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El sexting puede tener graves consecuencias, ya que el contenido compartido puede ser usado para extorsión o distribuido sin consentimiento.",
          incorrect: "El sexting es compartir contenido íntimo por mensajes, lo cual es muy peligroso porque ese contenido puede ser usado para extorsión o compartido sin permiso."
        }
      },
      {
        question: "¿Qué es el 'grooming' en línea?",
        options: [
          "Un juego en línea",
          "Cuando un adulto intenta ganarse la confianza de un menor con fines maliciosos",
          "Una red social para adolescentes",
          "Un tipo de virus",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! El grooming es una forma de acoso donde adultos intentan ganarse la confianza de menores con fines dañinos. Es importante estar alerta y reportar comportamientos sospechosos.",
          incorrect: "El grooming es cuando un adulto intenta ganarse la confianza de un menor con fines maliciosos. Es importante reconocer las señales y mantener la privacidad en línea."
        }
      },
      {
        question: "¿Qué precauciones debes tomar al usar redes WiFi públicas?",
        options: [
          "Conectarse a cualquier red disponible",
          "Usar una VPN y evitar acceder a cuentas bancarias",
          "Compartir la conexión con otros",
          "Desactivar el firewall",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Las redes WiFi públicas pueden ser inseguras. Usar una VPN y evitar actividades sensibles es la mejor manera de protegerte.",
          incorrect: "En redes WiFi públicas, es importante usar una VPN y evitar acceder a información sensible como cuentas bancarias, ya que pueden ser interceptadas."
        }
      },
      {
        question: "¿Qué es el 'cyberbullying' y cómo enfrentarlo?",
        options: [
          "Un juego en línea",
          "Acoso a través de medios digitales que debe ser reportado y documentado",
          "Una red social nueva",
          "Un tipo de virus",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien! El cyberbullying es acoso digital y debe ser tomado en serio. Documenta la evidencia, bloquea al acosador y reporta el comportamiento.",
          incorrect: "El cyberbullying es acoso a través de medios digitales. Es importante documentar la evidencia, bloquear al acosador y reportar el comportamiento a las autoridades correspondientes."
        }
      },
      {
        question: "¿Qué es la 'huella digital' y por qué es importante?",
        options: [
          "Una marca en la pantalla",
          "El rastro de actividades que dejamos en internet",
          "Un tipo de contraseña",
          "Un virus informático",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Tu huella digital es el rastro permanente que dejas en internet. Lo que publicas hoy puede afectar tu futuro personal y profesional.",
          incorrect: "La huella digital es el rastro de todas tus actividades en internet. Es importante ser consciente de ella porque puede afectar tu reputación y oportunidades futuras."
        }
      }
    ],
    "online-privacy": [
      {
        question: "¿Qué es el seguimiento en línea (online tracking)?",
        options: [
          "Un sistema de GPS",
          "Cómo las empresas recolectan datos sobre tu actividad en internet",
          "Una app de ejercicio",
          "Un antivirus",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El seguimiento en línea es cómo las empresas recolectan información sobre tu comportamiento en internet para crear perfiles y mostrar publicidad dirigida.",
          incorrect: "El seguimiento en línea se refiere a cómo las empresas recolectan y analizan tu actividad en internet. Es importante entender esto para proteger tu privacidad."
        }
      },
      {
        question: "¿Qué información es sensible y no deberías compartir en línea?",
        options: [
          "Tu nombre",
          "Tu dirección de correo electrónico",
          "Tu número de teléfono",
          "Tu número de seguro social",
        ],
        correctAnswer: 3,
        feedback: {
          correct: "¡Exacto! Tu número de seguro social es información muy sensible y no deberías compartirlo en línea.",
          incorrect: "Recuerda, tu número de seguro social es información muy sensible y no deberías compartirlo en línea."
        }
      },
      {
        question: "¿Qué es la configuración de privacidad en redes sociales?",
        options: [
          "Una forma de hacer amigos",
          "Opciones que te permiten controlar quién ve tu información",
          "Un tipo de contraseña",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! La configuración de privacidad te permite controlar quién puede ver tu información y publicaciones en redes sociales.",
          incorrect: "Recuerda, la configuración de privacidad es importante para proteger tu información en redes sociales."
        }
      },
      {
        question: "¿Por qué es importante leer los términos y condiciones?",
        options: [
          "Para entender cómo se usará tu información",
          "Porque son muy divertidos",
          "No es importante",
          "Para hacer amigos",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Bien hecho! Leer los términos y condiciones te ayuda a entender cómo se usará tu información y qué derechos tienes.",
          incorrect: "Recuerda, es importante leer los términos y condiciones para saber cómo se usará tu información."
        }
      },
      {
        question: "¿Qué es un 'cookie' en internet?",
        options: [
          "Un tipo de galleta",
          "Un archivo que almacena información sobre tu actividad en un sitio web",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Un 'cookie' es un archivo que almacena información sobre tu actividad en un sitio web para mejorar tu experiencia.",
          incorrect: "Recuerda, los 'cookies' son archivos que almacenan información sobre tu actividad en un sitio web."
        }
      },
      {
        question: "¿Qué debes hacer si recibes un mensaje sospechoso en redes sociales?",
        options: [
          "Ignorarlo",
          "Responder y preguntar más",
          "Compartirlo con amigos",
          "Hacer clic en los enlaces",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Bien hecho! Ignorar mensajes sospechosos es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes responder a mensajes sospechosos. Siempre es mejor ignorarlos."
        }
      },
      {
        question: "¿Qué es la autenticación de dos factores?",
        options: [
          "Un tipo de contraseña",
          "Un método de seguridad que requiere dos formas de verificación",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! La autenticación de dos factores añade una capa extra de seguridad a tus cuentas.",
          incorrect: "Recuerda, la autenticación de dos factores es un método de seguridad que requiere dos formas de verificación."
        }
      },
      {
        question: "¿Qué debes hacer si alguien te acosa en línea?",
        options: [
          "Ignorarlo",
          "Contarle a un adulto",
          "Hacer lo mismo que él",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien! Contarle a un adulto es la mejor opción. Ellos pueden ayudarte a manejar la situación.",
          incorrect: "Recuerda, siempre es mejor contarle a un adulto si alguien te acosa en línea."
        }
      },
      {
        question: "¿Qué es un perfil en línea?",
        options: [
          "Una forma de hacer amigos",
          "La información que compartes sobre ti en internet",
          "Un tipo de contraseña",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Tu perfil en línea es la información que compartes sobre ti en internet.",
          incorrect: "Recuerda, tu perfil en línea es la información que compartes sobre ti en internet."
        }
      },
    ],
    "digital-footprint": [
      {
        question: "¿Qué información permanece en internet aunque la borres?",
        options: [
          "Nada, todo se puede borrar",
          "Solo las fotos",
          "Todo lo que se ha compartido puede haber sido guardado por otros",
          "Solo los mensajes",
        ],
        correctAnswer: 2,
        feedback: {
          correct: "¡Exacto! Una vez que algo se publica en internet, puede haber sido guardado o compartido por otros, haciendo imposible su eliminación completa.",
          incorrect: "Recuerda que cualquier contenido que publicas en internet puede ser guardado por otros usuarios, incluso si lo borras después."
        }
      },
      {
        question: "¿Cómo puedes gestionar tu huella digital?",
        options: [
          "No publicando nada",
          "Revisando y ajustando la configuración de privacidad",
          "Compartiendo más información",
          "No es importante",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Revisar y ajustar la configuración de privacidad te ayuda a gestionar tu huella digital.",
          incorrect: "Recuerda, gestionar tu huella digital es importante para proteger tu privacidad en línea."
        }
      },
      {
        question: "¿Qué es un motor de búsqueda?",
        options: [
          "Un tipo de juego",
          "Una herramienta que te ayuda a encontrar información en internet",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Un motor de búsqueda te ayuda a encontrar información en internet.",
          incorrect: "Recuerda, un motor de búsqueda es una herramienta que te ayuda a encontrar información en internet."
        }
      },
      {
        question: "¿Por qué es importante ser consciente de tu huella digital?",
        options: [
          "Porque puede afectar tu reputación",
          "Porque es divertido",
          "No es importante",
          "Para hacer amigos",
        ],
        correctAnswer: 0,
        feedback: {
          correct: "¡Correcto! Ser consciente de tu huella digital es importante porque puede afectar tu reputación.",
          incorrect: "Recuerda, tu huella digital puede afectar tu reputación y oportunidades futuras."
        }
      },
      {
        question: "¿Qué debes hacer si encuentras información falsa sobre ti en línea?",
        options: [
          "Ignorarlo",
          "Contarle a un adulto",
          "Tratar de borrarlo tú mismo",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien! Contarle a un adulto es la mejor opción. Ellos pueden ayudarte a manejar la situación.",
          incorrect: "Recuerda, siempre es mejor contarle a un adulto si encuentras información falsa sobre ti en línea."
        }
      },
      {
        question: "¿Qué es un 'hashtag'?",
        options: [
          "Un tipo de contraseña",
          "Una forma de categorizar contenido en redes sociales",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Un 'hashtag' es una forma de categorizar contenido en redes sociales.",
          incorrect: "Recuerda, los 'hashtags' son útiles para categorizar contenido en redes sociales."
        }
      },
      {
        question: "¿Qué es un 'perfil público'?",
        options: [
          "Una forma de hacer amigos",
          "Un perfil que cualquiera puede ver",
          "Un tipo de contraseña",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Un perfil público es un perfil que cualquiera puede ver.",
          incorrect: "Recuerda, un perfil público es un perfil que cualquiera puede ver."
        }
      },
      {
        question: "¿Qué debes hacer si alguien comparte información personal tuya sin permiso?",
        options: [
          "No hacer nada",
          "Contarle a un adulto",
          "Compartir su información también",
          "Ignorarlo",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Siempre debes contarle a un adulto si alguien comparte información personal tuya sin permiso.",
          incorrect: "Recuerda, es importante contarle a un adulto si alguien comparte información personal tuya sin permiso."
        }
      },
      {
        question: "¿Qué es un 'meme'?",
        options: [
          "Una forma de arte",
          "Una imagen o video que se comparte en internet con un mensaje humorístico",
          "Un tipo de contraseña",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Exacto! Un 'meme' es una imagen o video que se comparte en internet con un mensaje humorístico.",
          incorrect: "Recuerda, los 'memes' son imágenes o videos que se comparten en internet con un mensaje humorístico."
        }
      },
    ],
    "secure-browsing": [
      {
        question: "¿Qué es un certificado SSL?",
        options: [
          "Un programa antivirus",
          "Un protocolo que asegura la conexión entre tu navegador y el sitio web",
          "Una licencia de software",
          "Un tipo de contraseña",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! SSL es un protocolo de seguridad que cifra la comunicación entre tu navegador y el sitio web, protegiendo tus datos.",
          incorrect: "SSL es un protocolo de seguridad importante que protege tus datos cuando navegas en internet, especialmente en sitios que manejan información sensible."
        }
      },
      {
        question: "¿Qué debes hacer si un sitio web parece sospechoso?",
        options: [
          "Hacer clic en todos los enlaces",
          "Ignorarlo y salir",
          "Compartirlo con amigos",
          "Hacer una captura de pantalla",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Ignorar sitios web sospechosos es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes interactuar con sitios web que parecen sospechosos."
        }
      },
      {
        question: "¿Qué es un 'firewall'?",
        options: [
          "Un tipo de antivirus",
          "Una barrera de seguridad que protege tu red",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Un 'firewall' es una barrera de seguridad que protege tu red de accesos no autorizados.",
          incorrect: "Recuerda, un 'firewall' es importante para proteger tu red de accesos no autorizados."
        }
      },
      {
        question: "¿Por qué es importante actualizar tu software regularmente?",
        options: [
          "Para tener más espacio en tu computadora",
          "Para mejorar la seguridad y corregir errores",
          "No es importante",
          "Para hacer amigos",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Actualizar tu software regularmente mejora la seguridad y corrige errores.",
          incorrect: "Recuerda, es importante actualizar tu software regularmente para mejorar la seguridad."
        }
      },
      {
        question: "¿Qué es un 'malware'?",
        options: [
          "Un tipo de juego",
          "Un software diseñado para dañar o infiltrarse en sistemas",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El 'malware' es un software diseñado para dañar o infiltrarse en sistemas.",
          incorrect: "Recuerda, el 'malware' es un software dañino que puede afectar tu computadora."
        }
      },
      {
        question: "¿Qué debes hacer si recibes un correo electrónico sospechoso?",
        options: [
          "Hacer clic en los enlaces",
          "Ignorarlo y eliminarlo",
          "Responder y preguntar más",
          "Compartirlo con amigos",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Ignorar y eliminar correos electrónicos sospechosos es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes interactuar con correos electrónicos sospechosos."
        }
      },
      {
        question: "¿Qué es un 'phishing'?",
        options: [
          "Un tipo de juego",
          "Un intento de engañarte para que compartas información personal",
          "Una forma de ganar dinero",
          "Un programa de computadora",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! El 'phishing' es un intento de engañarte para que compartas información personal.",
          incorrect: "Recuerda, el 'phishing' es un engaño para robar tu información."
        }
      },
      {
        question: "¿Qué es un 'VPN'?",
        options: [
          "Un tipo de antivirus",
          "Una red privada virtual que protege tu conexión a internet",
          "Un programa de computadora",
          "Una red social",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Bien hecho! Un 'VPN' es una red privada virtual que protege tu conexión a internet.",
          incorrect: "Recuerda, un 'VPN' es importante para proteger tu conexión a internet."
        }
      },
      {
        question: "¿Qué debes hacer si un sitio web te pide información personal?",
        options: [
          "Dar la información",
          "Ignorarlo y salir",
          "Preguntar a un amigo",
          "No hacer nada",
        ],
        correctAnswer: 1,
        feedback: {
          correct: "¡Correcto! Ignorar sitios web que piden información personal es la mejor forma de protegerte.",
          incorrect: "Recuerda, nunca debes dar información personal a sitios web sospechosos."
        }
      },
    ],
  };

  const currentLesson = questions[lessonId as keyof typeof questions];
  
  if (!currentLesson) {
    navigate('/lessons');
    return null;
  }

  const handleAnswer = (selectedIndex: number) => {
    console.log(`Selected answer: ${selectedIndex}`);
    const isCorrect = selectedIndex === currentLesson[currentQuestion].correctAnswer;
    const feedback = currentLesson[currentQuestion].feedback;
    
    if (isCorrect) {
      toast({
        title: "¡Correcto! 🎉",
        description: feedback.correct,
        variant: "default",
      });
      setScore(score + 1);
    } else {
      toast({
        title: "Incorrecto ❌",
        description: feedback.incorrect,
        variant: "destructive",
      });
    }

    if (currentQuestion < currentLesson.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/rewards", { state: { score, total: currentLesson.length } });
    }
  };

  const progress = ((currentQuestion + 1) / currentLesson.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark/90 to-dark/80 p-6">
      <button
        onClick={() => navigate('/lessons')}
        className="absolute top-4 left-4 text-white hover:text-primary transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="max-w-4xl mx-auto pt-16">
        <div className="mb-8">
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-scale-in border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {currentLesson[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {currentLesson[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-4 border-2 border-white/20 rounded-lg text-left hover:border-primary hover:bg-primary/10 transition-colors button-hover text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;

