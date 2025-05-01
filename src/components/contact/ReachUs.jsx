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
    const [status, setStatus] = useState({ error: '', success: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
            setStatus({ error: 'Please fill all fields correctly.', success: '' });
            return;
        }

        setIsSending(true);
        setStatus({ error: '', success: '' });

        try {
            await emailjs.send(
                'service_nxg7pyg',
                'template_1p1x39y',
                {
                    ...formData,
                    time: new Date().toLocaleString(),
                    to_email: 'tiwariv1669@gmail.com',
                },
                'hTsTL8p_B8CsA9X-e'
            );

            setStatus({ error: '', success: 'Message sent successfully!' });
            setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus({ error: 'Failed to send message. Please try again later.', success: '' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-end relative mt-10 mb-10 px-4 lg:px-0">
            {/* Left Text Section (Desktop) */}
            <div className="hidden lg:flex bg-[#AFDDFF] h-[500px] w-[700px] rounded-l-full relative z-10 items-center px-10 pl-52">
                <div className="flex flex-col gap-9">
                    <h1 className="text-4xl font-semibold leading-snug">Feel free to Contact Us</h1>
                    <p className="text-md">
                        <span className="font-semibold">Get In Touch</span><br />
                        At AIM Tutorials, we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                    </p>
                </div>
            </div>

            {/* Text Section (Mobile) */}
            <div className="lg:hidden mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Feel free to Contact Us</h1>
                <p className="text-lg text-[#2467C9]">
                    <span className="font-semibold">Get In Touch</span><br />
                    At AIM Tutorials, we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                </p>
            </div>

            {/* Form */}
            <div className="relative lg:absolute w-full lg:w-[500px] lg:left-[calc(100%-1000px)] lg:top-1/2 lg:-translate-y-1/2 h-auto bg-[#2467C9] z-20 rounded-2xl flex justify-center p-6 lg:p-9 text-white mx-auto lg:mx-0">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    {['name', 'email', 'mobile', 'subject'].map((field) => (
                        <input
                            key={field}
                            type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                            name={field}
                            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                            value={formData[field]}
                            onChange={handleChange}
                            className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none"
                            required
                        />
                    ))}
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none resize-none h-28"
                        required
                    />

                    {status.error && <p className="text-red-300 text-sm">{status.error}</p>}
                    {status.success && <p className="text-green-300 text-sm">{status.success}</p>}

                    <button
                        type="submit"
                        className="bg-[#AFDDFF] hover:bg-[#bfe3ff] px-4 py-2 rounded-lg text-black active:scale-95 transition-all"
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReachUs;
