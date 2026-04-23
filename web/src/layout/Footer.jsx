export default function Footer() {
  return (
    <footer className="bg-forest text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg">Simply the GOAT</p>
        <p className="font-sans text-sm text-cream/70">
          &copy; {new Date().getFullYear()} — Defensible space, naturally.
        </p>
      </div>
    </footer>
  )
}
