import { School, Smartphone, Glasses } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgeSelection = () => {
  const navigate = useNavigate();
  console.log("Rendering AgeSelection component");

  const handleAgeSelect = (ageGroup: string) => {
    console.log(`Selected age group: ${ageGroup}`);
    navigate(`/lessons?age=${ageGroup}`);
  };

  const ageGroups = [
    {
      title: "Niños",
      age: "8-11 años",
      icon: School,
      color: "bg-primary",
      id: "kids",
    },
    {
      title: "Jóvenes",
      age: "12-18 años",
      icon: Smartphone,
      color: "bg-secondary",
      id: "teens",
    },
    {
      title: "Adultos Mayores",
      age: "65+ años",
      icon: Glasses,
      color: "bg-accent",
      id: "seniors",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary/20 to-secondary/20">
      <div className="text-center mb-12 animate-scale-in">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          ¡Aprendamos Ciberseguridad!
        </h1>
        <p className="text-lg text-gray-600">
          Elige tu grupo de edad para comenzar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => handleAgeSelect(group.id)}
            className={`${group.color} rounded-xl p-6 text-center shadow-lg card-hover button-hover`}
          >
            <group.icon className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{group.title}</h2>
            <p className="text-sm opacity-75">{group.age}</p>
          </button>
        ))}
      </div>

      <div className="mt-12 animate-float">
        <img
          src="/placeholder.svg"
          alt="Foxy"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default AgeSelection;