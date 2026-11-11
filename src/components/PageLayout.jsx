export default function PageLayout({ title, description, children }) {
  return (
    <div className="min-h-screen bg-[#080d19] px-4 py-10 text-white md:px-8">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-wide md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-slate-400">{description}</p>
      </header>

      <section className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-2xl md:p-10">
        {children}
      </section>
    </div>
  );
}
