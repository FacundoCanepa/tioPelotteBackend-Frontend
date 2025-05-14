const NuestraHistoria = () => {
  return (
    <section className="text-center py-10 px-4 space-y-6">
      <h2 className="text-center text-3xl font-garamond italic">Nuestra Historia</h2>
      <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-stone-700 font-medium">
        Más de 30 años de tradición nos avalan. <br />
        Desde los primeros ravioles de Doña Rosa hasta nuestras pastas frescas de hoy, 
        cada creación está llena de amor y dedicación.
      </p>

      <div>
                <button className="navbar-secondary font-garamond text-stone-900 font-semibold py-2 px-6 rounded-full shadow-md border border-yellow-600 hover:scale-105 transition-all">
            ver más
            </button>

      </div>
    </section>
  );
};

export default NuestraHistoria;
