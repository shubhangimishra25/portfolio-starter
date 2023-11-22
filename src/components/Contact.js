import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  
    const form = useRef();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_ID, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            form.current.reset();
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 5000); // Hide the success message after 5 seconds
          }
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className='py-16 lg:section' id='contact'>
        {showSuccessMessage && (
      <div className='bg-green-500 text-white text-center py-2 fixed top-16 left-1/2 transform -translate-x-1/2 z-50 rounded-md'>
          Your message has been sent successfully!
        </div>
      )}
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
          ref={form}
           onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
              name="user_name" 
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
              name="user_email"
            />
            <textarea
            name="message"
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg' type="submit" value="Send">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
