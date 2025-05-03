'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const ReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobile') {
      if (!/^\d{0,10}$/.test(value)) return; // only allow up to 10 digits
    }

    setFormData({ ...formData, [name]: value });
  };


  const isFormValid = () => {
    const { name, email, mobile, subject, message } = formData;
    return (
      name.trim() &&
      email.includes('@') &&
      mobile.trim().length >= 10 &&
      subject.trim() &&
      message.trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError('Please fill all fields correctly.');
      return;
    }

    const { name, email, mobile, subject, message } = formData;

    const encodedMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`
    );

    const phone = '919112705078'; // WhatsApp number in international format without "+" or dashes
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };


  return (
    <div className="flex flex-col lg:flex-row justify-end relative mb-30 px-4 lg:px-0">
      <div className="hidden lg:flex bg-[#AFDDFF] h-[600px] lg:w-[800px] xl:w-[1100px] xl:pr-56 lg:pr-12 rounded-l-full relative z-10  items-center justify-between">
        <div className="flex-1" />
        <div className="flex flex-col gap-9">
          <h1 className="text-5xl font-semibold">
            Feel free to Contact <br /> Us
          </h1>
          <p className="text-3xl text-left">
            <span className="font-semibold">Get In Touch</span>
            <br />
            At AIM Tutorials , we offer advanced <br />
            classrooms, personalized attention, <br />
            regular parent-teacher meetings,
            <br />
            top-notch teachers, and a leading <br /> curriculum. Experience the
            best in <br />
            education with us.
          </p>
        </div>
      </div>

      <div className="lg:hidden mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Feel free to Contact Us</h1>
        <p className="text-2xl text-[#2467C9]">
          <span className="font-semibold">Get In Touch</span>
          <br />
          At AIM Tutorials , we offer advanced classrooms, personalized
          attention, regular parent-teacher meetings, top-notch teachers, and a
          leading curriculum. Experience the best in education with us.
        </p>
      </div>

      <div className="relative w-full  max-w-[500px] lg:absolute lg:w-[450px] xl:w-[500px] lg:left-[calc(100%-1000px)] xl:left-[calc(100%-1300px)] lg:top-1/2 lg:-translate-y-1/2 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-4 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-center lg:text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white p-2  rounded-xl text-black text-xl outline-none placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white p-2 rounded-xl text-black text-xl outline-none w-full  placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="bg-white p-2 rounded-xl text-black text-xl outline-none w-full placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white p-2 rounded-xl text-black text-xl outline-none w-full placeholder:text-center placeholder:text-black/50"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white p-2 rounded-xl text-black text-xl outline-none w-full resize-none col-span-1 lg:col-span-2 placeholder:text-black/50"
          />
          {error && (
            <p className="text-red-300 text-sm w-full text-left col-span-1 lg:col-span-2">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-300 text-sm w-full text-left col-span-1 lg:col-span-2">
              {success}
            </p>
          )}
          <div className="flex w-full justify-end col-span-1 lg:col-span-2">
            <button
              type="submit"
              className="bg-[#AFDDFF] hover:bg-[#bfe3ff] cursor-pointer px-4 py-2 rounded-xl text-black self-end active:scale-90"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReachUs;
