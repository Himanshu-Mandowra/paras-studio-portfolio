import BookingForm from "@/components/page3/BookingForm";

export default function BookPage(){

  return(

    <section className="booking-page">

      <div className="container">

        <div className="booking-header">

          <h1>Book Your Session</h1>

          <p>
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </p>

        </div>

        <BookingForm/>

      </div>

    </section>

  )

}