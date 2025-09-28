import React from "react";

const RECIPES = [
  {
    id: 1,
    title: "5-Min Pasta Aglio e Olio",
    time: 10,
    kcal: 520,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Budget Chili Beans",
    time: 20,
    kcal: 430,
    img: "https://images.unsplash.com/photo-1604908177071-3251ec2cc35e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Courgette-prei soep",
    time: 15,
    kcal: 120,
    img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800&q=80"
  }
];

function Card({ r }) {
  return (
    <article className="rounded-xl border shadow hover:shadow-md bg-white overflow-hidden">
      <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{r.title}</h3>
        <p className="text-sm opacity-80">{r.time} min • {r.kcal} kcal</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Plan. Cook. Eat. Repeat.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {RECIPES.map((r) => (
          <Card key={r.id} r={r} />
        ))}
      </div>
    </div>
  );
}

