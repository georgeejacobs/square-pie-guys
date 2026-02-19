export default function Footer() {
  return (
    <section className="bg-primary text-white p-6 text-center">
      <p className="text-sm mb-6">By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-primary px-6 py-3 rounded font-medium">
          <span>Accept</span>
        </button>
        <button className="border border-white text-white px-6 py-3 rounded font-medium">
          <span>Decline</span>
        </button>
        <button className="text-white underline px-6 py-3">
          <span>Manage cookies</span>
        </button>
      </div>
    </section>
  )
}