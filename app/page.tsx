import Button from "#/components/Button";
import Heading from "#/components/Heading";

export default function HomePage() {
  return (
    <section className="bg-black h-96 mx-20 mt-10 rounded-xl shadow grid place-items-center">
      <div className="flex flex-col gap-6 items-center">
        <Heading>
          Tu aplicación para registrar animes y estudios.
        </Heading>
        <Button size="lg" href="/anime">
          ¡Empezar!
        </Button>
      </div>
    </section>
  )
}