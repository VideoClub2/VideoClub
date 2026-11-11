
import React from 'react';

export default function Ubicacion() {
    return (
        <section
            id="ubicacion"
            className="min-h-screen bg-[#070b14] text-white px-4 md:px-12 py-12 font-sans"
        >
            {/* Encabezado */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2">
                    Nuestra Ubicación
                </h1>

                <p className="text-slate-400 text-sm md:text-base">
                    Ven a visitarnos, descubre nuestros estrenos en físico y vive la
                    mejor experiencia de cine.
                </p>
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* Información y horarios */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 lg:col-span-1">

                    {/* Dirección */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-lg shrink-0 border border-red-500/30">
                            📍
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                                Dirección Principal
                            </h3>

                            <p className="text-sm text-slate-400 mt-1">
                                Av. Principal del Cine #452, Local 3
                                <br />
                                Ciudad de la Ficción, CP 44100
                            </p>
                        </div>
                    </div>

                    {/* Horarios */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-lg shrink-0 border border-red-500/30">
                            🕒
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                                Horarios de Atención
                            </h3>

                            <p className="text-sm text-slate-400 mt-1">
                                Lunes a Viernes: 10:00 AM - 10:00 PM
                                <br />
                                Sábados y Domingos: 12:00 PM - 11:30 PM
                            </p>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-lg shrink-0 border border-red-500/30">
                            📞
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                                Contacto Directo
                            </h3>

                            <p className="text-sm text-slate-400 mt-1">
                                Teléfono: +34 900 555 333
                                <br />
                                Email: contacto@fantasiavideoclub.com
                            </p>
                        </div>
                    </div>

                </div>

                {/* Mapa interactivo */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[450px] relative">

                    <iframe
                        title="Mapa de Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846819!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1ses!2sus!4v1625000000000!5m2!1ses!2sus"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full border-0 [filter:invert(90%)_hue-rotate(180deg)_contrast(125%)] opacity-85"
                    />

                    {/* Tarjeta flotante */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#0a0f1d]/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3">

                        <div>
                            <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">
                                Sucursal Central
                            </span>

                            <h4 className="text-sm font-bold text-white">
                                Fantasía Videoclub Store
                            </h4>
                        </div>

                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-red-600/30"
                        >
                            Cómo llegar
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}
