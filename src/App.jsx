import React, { useState } from "react";

const RECIPES = [
  {
    id: 1,
    title: "Egg Fried Rice",
    time: 12,
    kcal: 560,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "2 kopjes gekookte rijst (koud)",
      "2 eieren",
      "1 lente-ui, in ringetjes",
      "2 el sojasaus",
      "1 teentje knoflook, fijn",
      "1 el olie"
    ],
    steps: [
      "Verhit olie in pan/wok, bak knoflook 20 sec.",
      "Eieren erbij, roer tot net gestold.",
      "Rijst, sojasaus en lente-ui toevoegen; roerbak 3–4 min.",
      "Proeven en eventueel extra sojasaus toevoegen."
    ],
  },
  {
    id: 2,
    title: "Budget Chili Beans",
    time: 20,
    kcal: 430,
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "1 ui, gesnipperd",
      "1 blik kidneybonen, uitgelekt",
      "1 blik tomatenblokjes",
      "1 tl komijn, 1 tl paprikapoeder",
      "1 el olie, zout/peper"
    ],
    steps: [
      "Fruit ui 3 min in olie.",
      "Specerijen 30 sec meebakken.",
      "Tomaten + bonen erbij; 10–12 min pruttelen.",
      "Op smaak brengen; serveren met rijst of tortilla."
    ],
  },
  {
    id: 3,
    title: "Taco’s met kip (snel)",
    time: 15,
    kcal: 520,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "250 g kipreepjes",
      "1 tl tacokruiden",
      "6 mini-tortilla’s",
      "Sla, tomaat, limoen",
      "Yoghurt of salsasaus"
    ],
    steps: [
      "Bak kip met tacokruiden 5–6 min.",
      "Verwarm tortilla’s kort in droge pan.",
      "Vul met kip, sla, tomaat; besprenkel limoen.",
      "Saus erbij en meteen serveren."
    ],
  },
];

function Card({ r, onOpen }) {
  return (
    <button
      onClick={() => onOpen(r)}
      className="text-left rounded-xl border shadow hover:shadow-md bg-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-neutral-400"
      aria-label={`Open recept ${r.title}`}
    >
      <img src={r.img} alt={r.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{r.title}</h3>
        <p className="text-sm opacity-80">{r.time} min • {r.kcal} kcal</p>
      </div>
    </button>
  );
}

function Modal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      {/* ⤵ voeg hier 'modal' toe */}
      <div className="modal bg-white text-neutral-900 max-w-xl w-full rounded-2xl overflow-hidden shadow-lg">
        <img src={recipe.img} alt={recipe.title} className="w-full h-56 object-cover" />
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold">{recipe.title}</h2>
              <p className="text-sm">{recipe.time} min • {recipe.kcal} kcal</p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border hover:bg-neutral-100"
            >
              Sluiten
            </button>
          </div>

          {/* voorbeeld als je ingredients/steps hebt */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [openRecipe, setOpenRecipe] = useState(null);
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-6">Plan. Cook. Eat. Repeat.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {RECIPES.map((r) => (
          <Card key={r.id} r={r} onOpen={setOpenRecipe} />
        ))}
      </div>

      <Modal recipe={openRecipe} onClose={() => setOpenRecipe(null)} />
    </main>
  );
}
