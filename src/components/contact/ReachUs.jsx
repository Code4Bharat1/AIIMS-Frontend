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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError('Please fill all fields correctly.');
      return;
    }


    setIsSending(true);
    setError('');
    setSuccess('');

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
      to_email: 'tiwariv1669@gmail.com',
    };

    try {
      await emailjs.send(
        'service_nxg7pyg',
        'template_1p1x39y',
        templateParams,
        'hTsTL8p_B8CsA9X-e'
      );

      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-end relative mb-30 px-4 lg:px-0">
      <div className="hidden lg:flex bg-[#AFDDFF] h-[600px] w-[1200px] rounded-l-full relative z-10 pr-56 items-center justify-between">
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
            regular parent-teacher meetings,<br />
            top-notch teachers, and a leading <br /> curriculum. Experience the best in <br />
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
          attention, regular parent-teacher meetings, top-notch teachers, and
          a leading curriculum. Experience the best in education with us.
        </p>
      </div>

      <div className="relative w-full  max-w-[500px] lg:absolute lg:w-[500px] lg:left-[calc(100%-1400px)] lg:top-1/2 lg:-translate-y-1/2 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-4 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
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
            className="bg-white p-2  rounded-lg text-black text-lg outline-none placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white p-2 rounded-lg text-black text-lg outline-none w-full  placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="bg-white p-2 rounded-lg text-black text-lg outline-none w-full placeholder:text-center placeholder:text-black/50"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white p-2 rounded-lg text-black text-lg outline-none w-full placeholder:text-center placeholder:text-black/50"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white p-2 rounded-lg text-black text-lg outline-none w-full resize-none col-span-1 lg:col-span-2 placeholder:text-black/50"
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
              className="bg-[#AFDDFF] hover:bg-[#bfe3ff] cursor-pointer px-4 py-2 rounded-lg text-black self-end active:scale-90"
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
