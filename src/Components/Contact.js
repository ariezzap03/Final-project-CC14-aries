import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty.';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="my-16 mb-24">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">05</span>
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
          Have a project in mind or want to connect? Feel free to reach out — I'm always open to new opportunities.
        </p>
        <div className="flex gap-2 flex-wrap">
          {[
            { label: 'Location', value: 'Baguio City, PH' },
            { label: 'GitHub', value: 'ariezzap03' },
          ].map((chip) => (
            <div key={chip.label} className="flex flex-col border border-gray-200 rounded-full px-4 py-1.5 bg-gray-50 text-xs">
              <span className="font-mono text-gray-400 uppercase tracking-wide text-[10px]">{chip.label}</span>
              <span className="text-gray-800 font-medium">{chip.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Card */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">

        {/* Card Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
          <div>
            <p className="text-sm font-semibold text-gray-900">Send a message</p>
            <p className="text-xs font-mono text-gray-400 mt-0.5">ariezzap855@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-full border border-green-100">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Available
          </div>
        </div>

        {/* Card Body */}
        <div className="grid md:grid-cols-[1fr_1px_1.6fr]">

          {/* Info Column */}
          <div className="px-8 py-6 flex flex-col">
            {[
              { label: 'Response time', value: 'Within 24 hours' },
              { label: 'Open to', value: 'Freelance & full-time' },
              { label: 'Preferred contact', value: 'Email or GitHub' },
              { label: 'Time zone', value: 'PST (UTC+8)' },
            ].map((item) => (
              <div key={item.label} className="py-3.5 border-b border-gray-100 last:border-none">
                <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-1">{item.label}</p>
                <p className="text-sm text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block bg-gray-200" />

          {/* Form Column */}
          <div className="px-8 py-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-900">Message sent!</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Thanks for reaching out.<br />I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-mono text-gray-500 border border-gray-200 rounded-lg px-4 py-1.5 hover:text-gray-900 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan dela Cruz"
                      className={`w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm outline-none transition-all
                        ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-gray-400 focus:bg-white'}`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@email.com"
                      className={`w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm outline-none transition-all
                        ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-gray-400 focus:bg-white'}`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm outline-none resize-none transition-all
                      ${errors.message ? 'border-red-400' : 'border-gray-200 focus:border-gray-400 focus:bg-white'}`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-mono text-xs py-2.5 rounded-lg hover:opacity-80 transition-opacity"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;