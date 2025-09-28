function Modal({ recipe, onClose }) {
  if (!recipe) return null;
  const hasDetails = Array.isArray(recipe.ingredients) && recipe.ingredients.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white text-neutral-900 max-w-xl w-full rounded-2xl overflow-hidden shadow-lg">
        <img src={recipe.img} alt={recipe.title} className="w-full h-56 object-cover" />
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-neutral-900">{recipe.title}</h2>
              <p className="text-sm text-neutral-700">
                {recipe.time} min • {recipe.kcal} kcal
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              aria-label="Sluit recept"
            >
              Sluiten
            </button>
          </div>

          {hasDetails ? (
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-neutral-900">Ingrediënten</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-800">
                  {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-neutral-900">Stappen</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-neutral-800">
                  {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
                </ol>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm text-neutral-700">Nog geen details toegevoegd.</p>
          )}
        </div>
      </div>
    </div>
  );
}

