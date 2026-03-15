export default function BookingForm(){

  const fields = [
    {
      label: "Full Name *",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email Address *",
      type: "email",
      placeholder: "your@email.com"
    },
    {
      label: "Phone Number *",
      type: "tel",
      placeholder: "+91 XXXXX XXXXX"
    },
    {
      label: "Preferred Date *",
      type: "date"
    },
    {
      label: "Preferred Time *",
      type: "time"
    }
  ]

  return(

    <div className="booking-card">

      <form className="booking-form">

        {fields.map((field,index)=>(
          
          <div
            key={index}
            className={`form-group`}
          >

            <label>{field.label}</label>

            <input
              type={field.type}
              placeholder={field.placeholder}
            />

          </div>

        ))}


        {/* package dropdown */}

        <div className="form-group full">

          <label>Select Package *</label>

          <select>
            <option>Choose a package...</option>
            <option>Wedding</option>
            <option>Portrait</option>
            <option>Event</option>
          </select>

        </div>


        {/* textarea */}

        <div className="form-group full">

          <label>Additional Details</label>

          <textarea
            placeholder="Tell us more about your event, location, special requirements..."
          />

        </div>


        <button className="submit-btn">
          Submit Booking Request
        </button>

      </form>


      <div className="booking-info">

        <h3>What Happens Next?</h3>

        <ol>
          <li>We&apos;ll review your booking request and check availability</li>
          <li>You will receive a confirmation email within 24 hours</li>
          <li>We&apos;ll schedule a call to finalize your booking</li>
        </ol>

      </div>

    </div>

  )

}