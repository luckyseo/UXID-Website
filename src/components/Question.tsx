import React, { useState } from 'react';

const faqs = [
  {
    question: 'Who can join this program?',
    answer:
      'Anyone from any year and any degree who has an interest in Interaction Design. Experience can help but isn’t necessarily required, as long as you have skill and can prove it in the interviews, you’re in.',
  },
  {
    question: 'How does the program work?',
    answer:
      'The program consists of workshops, mentorship, and hands-on projects. You will work in teams and receive guidance from experienced mentors.',
  },
  {
    question: 'What are the qualifications needed to apply?',
    answer:
      'A passion for interaction design and a willingness to learn. No prior experience is required, but a portfolio can help.',
  },
  {
    question: 'How does the application process work?',
    answer:
      'You submit an application form, and if shortlisted, you will be invited for an interview to assess your interest and skills.',
  },
  {
    question: 'How much time should I commit?',
    answer:
      'Expect to commit a few hours per week for meetings, workshops, and project work. The more you put in, the more you get out!',
  },
  {
    question: 'What will I get at the end of this program?',
    answer:
      'You will gain practical experience, mentorship, and a project for your portfolio. Plus, you’ll join a community of like-minded peers.',
  },
];

const Question = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div
      style={{
        width: '100%',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'row',
        gap: 48,
        borderRadius: 24,
        padding: 48,
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          Questions?<br />We got you.
        </div>
        <div style={{ fontSize: 20, marginBottom: 32, color: 'rgba(255,255,255,0.85)' }}>
          Got a question you can’t find here?<br />Don’t worry, you can email us!
        </div>
        <a
          href="mailto:uxidsociety@gmail.com"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            border: 'none',
          }}
        >
          <button
            style={{
              background: 'rgba(255,255,255,0.10)',
              color: 'white',
              border: 'none',
              borderRadius: 20,
              padding: '16px 32px',
              fontSize: 18,
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              marginTop: 8,
              transition: 'background 0.2s',
            }}
          >
            Contact Us!
          </button>
        </a>
      </div>
      <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(255,255,255,0.10)',
              borderRadius: 16,
              padding: openIdx === idx ? '20px 28px 20px 28px' : '20px 28px',
              boxShadow: openIdx === idx ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
              border: openIdx === idx ? '1.5px solid #fff' : '1.5px solid rgba(255,255,255,0.10)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, fontSize: 20 }}>
              <span>{faq.question}</span>
              <span style={{ fontSize: 32, fontWeight: 400, marginLeft: 16, userSelect: 'none' }}>
                {openIdx === idx ? '—' : '+'}
              </span>
            </div>
            {openIdx === idx && (
              <div style={{ marginTop: 16, fontSize: 16, color: 'rgba(255,255,255,0.92)', lineHeight: 1.5 }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;