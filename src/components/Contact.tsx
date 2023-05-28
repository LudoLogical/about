import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="mx-4 mb-16 flex w-full max-w-2xl flex-col items-center justify-center py-20"
    >
      <h2 className="divider mb-6 text-3xl font-bold">Contact</h2>
      <p className="mb-8 mt-4 text-center">
        Whether you want to discuss an opportunity, ask a question, or just say
        hi, now is the perfect time to reach out! I&apos;ll do my best to get
        back to you as soon as possible.
      </p>
      <a href="mailto:hello@danieldeanda.com">
        <button className="btn-primary btn">hello@danieldeanda.com</button>
      </a>
    </section>
  );
};

export default Contact;
