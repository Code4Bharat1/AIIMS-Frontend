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
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div className="flex flex-col lg:flex-row justify-end relative mt-10 mb-10 px-4 lg:px-0">
            <div className="hidden lg:flex bg-[#AFDDFF] h-[500px] w-[700px] rounded-l-full relative z-10 items-center justify-between px-10 pl-52">
                <div className="flex-1" />
                <div className="flex flex-col gap-9">
                    <h1 className="text-4xl">Feel free to Contact <br /> Us</h1>
                    <p className="text-md text-left">
                        <span className="font-semibold">Get In Touch</span><br />
                        At AIM Tutorials , we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                    </p>
                </div>
            </div>

            <div className="lg:hidden mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Feel free to Contact Us</h1>
                <p className="text-2xl text-[#2467C9]">
                    <span className="font-semibold">Get In Touch</span><br />
                    At AIM Tutorials , we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                </p>
            </div>

            <div className="relative lg:absolute w-full lg:w-[500px] lg:left-[calc(100%-1000px)] lg:top-1/2 lg:-translate-y-1/2 h-96 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-6 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
                <form
                    onSubmit={handleSubmit}
                    className="absolute inset-0 p-6 lg:p-9 flex flex-wrap justify-center items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left"
                >
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none w-full resize-none" />

                    {error && <p className="text-red-300 text-sm w-full text-left">{error}</p>}
                    {success && <p className="text-green-300 text-sm w-full text-left">{success}</p>}

                    <div className="flex w-full justify-end">
                        <button
                            type="submit"
                            className="bg-[#AFDDFF] hover:bg-[#bfe3ff] cursor-pointer px-4 py-2 rounded-lg text-black self-end active:scale-90"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReachUs;
