
import PageLayout from '../components/PageLayout';

export default function Ubicacion() {
    return (
      <PageLayout
        title="Nuestra Ubicación"
        description="Ven a visitarnos, descubre nuestros estrenos en físico y vive la mejor experiencia de cine."
      >
        <div id="ubicacion" className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="space-y-6 rounded-2xl border border-slate-800 bg-[#080d19] p-6 shadow-xl lg:col-span-1">
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/20 text-lg font-bold text-red-500">
                📍
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Dirección Principal
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Av. Principal del Cine #452, Local 3
                  <br />
                  Ciudad de la Ficción, CP 44100
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/20 text-lg font-bold text-red-500">
                🕒
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Horarios de Atención
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Lunes a Viernes: 10:00 AM - 10:00 PM
                  <br />
                  Sábados y Domingos: 12:00 PM - 11:30 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/20 text-lg font-bold text-red-500">
                📞
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Contacto Directo
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Teléfono: +34 900 555 333
                  <br />
                  Email: contacto@fantasiavideoclub.com
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl border border-slate-800 bg-[#080d19] shadow-xl md:h-[450px] lg:col-span-2">
            <iframe
              title="Mapa de Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846819!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1ses!2sus!4v1625000000000!5m2!1ses!2sus"
              allowFullScreen
              loading="lazy"
              className="h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)_contrast(125%)] opacity-85"
            />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0a0f1d]/90 p-4 backdrop-blur-md sm:flex-row">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-red-500">
                  Sucursal Central
                </span>
                <h3 className="text-sm font-bold text-white">
                  Fantasía Videoclub Store
                </h3>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    );
}
