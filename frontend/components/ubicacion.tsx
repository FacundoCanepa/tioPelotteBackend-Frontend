const Ubicacion = () => {
  return (
    <section className="text-center py-8 px-4 ">
      <h2 className="text-2xl md:text-3xl font-semibold font-garamond  italic tracking-wide mb-2">Visítanos</h2>
      <p className="text-sm md:text-base text-stone-700 max-w-md mx-auto mb-6 font-garamond" >
        Te esperamos en nuestra tienda para disfrutar de nuestras pastas frescas, hechas con tradición y dedicación.
      </p>

      <div className="flex justify-center mb-6">
        <iframe
          title="Ubicación Tío Pelotte"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.441186044965!2d-58.04923693284867!3d-34.99505193558028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c2ff1e9727d7%3A0x221e187cd7ad3b9d!2sT%C3%ADo%20Pelotte%20(La%20pasta%20de%20mi%20pueblo)!5e0!3m2!1ses!2sar!4v1747165963286!5m2!1ses!2sar"
          width="100%"
          height="300"
          className="rounded-xl shadow-lg max-w-md w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-sm text-stone-700 max-w-md mx-auto font-garamond">
        <strong>Dirección:</strong> Calle 197 y 44, La Plata, Buenos Aires.
        <br />
        <strong>Horarios:</strong> 
        <br />
        Martes a Sábados: 8:30 a 13:00 hs y 16:30 a 20:30 hs
        <br />
        Domingos: 8:30 a 13:00 hs
        <br />
        Lunes: cerrado <em>(excepto los días 29)</em>
      </p>
    </section>
  );
};

export default Ubicacion;
