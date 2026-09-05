import useLocalStorage from '../hooks/useLocalStorage';

function RepairForm() {
  const [formData, setFormData] = useLocalStorage('repairFormData', {
    name: '',
    phone: '',
    email: '',
    issue: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to server
    alert('Form submitted! Data is saved in localStorage.');
    console.log('Submitted:', formData);
  };

  const handleReset = () => {
    // Clear localStorage for this key and reset to initial empty state
    localStorage.removeItem('repairFormData');
    setFormData({ name: '', phone: '', email: '', issue: '', date: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Repair Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="issue">Issue Description</label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            rows="3"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" style={{ padding: '0.5rem 1.5rem' }}>Submit</button>
          <button type="button" onClick={handleReset} style={{ padding: '0.5rem 1.5rem' }}>
            Reset (clear stored data)
          </button>
        </div>
      </form>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
        Your data is automatically saved in your browser's local storage.
      </p>
    </div>
  );
}

export default RepairForm;