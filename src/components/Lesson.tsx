import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    
    if (isCorrect) {
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien! Sigamos aprendiendo.",
        variant: "default",
      });
      setScore(score + 1);
    } else {
      toast({
        title: "Incorrecto",
        description: "¡Inténtalo de nuevo!",
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
