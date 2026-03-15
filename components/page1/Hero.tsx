import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1>
          Capturing Life&apos;s 
          <br />
          Beautiful Moments
        </h1>

        <p>Professional photography for weddings, portraits, and events</p>

        <div className="hero-buttons">
          <Link href="/portfolio" className="btn btn-outline">
            View Portfolio →
          </Link>

          <Link href="/book" className="btn btn-primary">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}
