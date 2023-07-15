import Button from "#/components/Button";

export default function HomePage() {
  return (
    <section className="bg-black h-1/2 m-20 rounded-xl shadow grid place-items-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="tracking-tighter text-4xl font-bold">Tu aplicación para registrar animes y estudios.</h1>
        <Button size="lg" href="/anime">
          ¡Empezar!
        </Button>
      </div>
    </section>
  )
}