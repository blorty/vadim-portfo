import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ContactButton = styled(motion.input)`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(225deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.button} 100%);
  background-size: 200% 200%; // Important for the gradient to animate over a larger area
  animation: ${gradientAnimation} 5s ease infinite; // Apply the animation

  transition: transform 0.3s ease; // Smooth transition for scaling

  :hover {
    transform: scale(1.05); // Scale up the button slightly on hover
    cursor: pointer;
  }
`;



const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 50 
    }
  }
};

const MotionContactInput = motion(ContactInput);
const MotionContactInputMessage = motion(ContactInputMessage);
const MotionContactButton = motion(ContactButton);

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false); // State for error message
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromEmail = form.current['from_email'].value;
    const fromName = form.current['from_name'].value;
    const subject = form.current['subject'].value;
    const message = form.current['message'].value;

    // Check if any field is empty
    if (!fromEmail || !fromName || !subject || !message) {
      setError(true); // Set error state to true
      return; // Stop the form submission
    }

    // If all fields are filled, send the email
    emailjs.sendForm('service_v7399gj', 'template_uufv7jw', form.current, 'F3ZacXwf_Mo6GQlq5')
      .then((result) => {
        setOpen(true);
        form.current.reset();
        setError(false); // Reset error state after successful submission
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
        <Wrapper>
            <Title>Contact</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
            <ContactForm 
              ref={form} 
              onSubmit={handleSubmit}
              as={motion.form}
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionContactInput 
                placeholder="Your Email" 
                name="from_email" 
                variants={itemVariants} 
              />
              <MotionContactInput 
                placeholder="Your Name" 
                name="from_name" 
                variants={itemVariants}
              />
              <MotionContactInput 
                placeholder="Subject" 
                name="subject" 
                variants={itemVariants} 
              />
              <MotionContactInputMessage 
                placeholder="Message" 
                rows="4" 
                name="message" 
                variants={itemVariants} 
              />
              <MotionContactButton 
                type="submit" 
                value="Send" 
                whileHover={{ 
                  background: `linear-gradient(45deg, ${({ theme }) => theme.button} 0%, ${({ theme }) => theme.primary} 100%)` 
                }}
              />
            </ContactForm>
            {error && <div style={{ color: '#963939', marginTop: '10px' }}>Please fill in all fields.</div>}
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              message="Email sent successfully!"
              severity="success"
            />
        </Wrapper>
      </Container>
  )
}

export default Contact;