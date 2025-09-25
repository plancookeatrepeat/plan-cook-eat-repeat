import React, { useMemo, useState } from "react";

const RECIPES = [
  {
    id: 1,
    title: "5-Min Pasta Aglio e Olio",
    cost: "€",
    time: 10,
    tags: ["vegetarian", "cheap", "fast"],
    kcal: 520,
    protein: 12,
    carbs: 70,
    fat: 22,
    img: "https://picsum.photos/seed/pasta123/1200/800",
  },
  {
    id: 2,
    title: "Budget Chili Beans",
    cost: "€",
    time: 20,
    tags: ["mealprep", "cheap"],
    kcal: 430,
    protein: 22,
    carbs: 48,
    fat: 12,
    img: "https://picsum.photos/seed/chili456/1200/800",
  },
  {
    id: 3,
    title: "Egg Fried Rice",
    cost: "€",
    time: 12,
    tags: ["fast", "cheap", "eggs"],
    kcal: 560,
    protein: 18,
    carbs: 72,
    fat: 20,
    img: "https://picsum.photos/seed/eggs789/1200/800",
  },
  {
    id: 4,
    title: "Courgette-prei soep",
    cost: "€",
    time: 15,
    tags: ["soep", "budget", "snel"],
    kcal: 120,
    protein: 4,
    carbs: 18,
    fat: 3,
    img: "https://picsum.photos/seed/soup321/1200/800",
  }
];

function Card({ r }) {
  return (
    <article className="rounded-xl border shadow hover:shadow-md bg-white overflow-hidden">
      <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{r.title}</h3>
        <p className="text-sm opacity-80">
          {r.time} min • {r.kcal} kcal
        </p>
      </div>
    </article>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => RECIPES.filter((r) => (r.title + " " + r.tags.join(" "))
      .toLowerCase()
      .includes(query.toLowerCase())),
    [query]
  );

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-4">Plan. Cook. Eat. Repeat.</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek recept"
        className="border p-2 rounded w-full mb-6"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r) => (
          <Card r={r} key={r.id} />
        ))}
      </div>
    </main>
  );
}
