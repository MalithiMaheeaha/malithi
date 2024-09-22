import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the data to a backend server here.
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
  );
}
