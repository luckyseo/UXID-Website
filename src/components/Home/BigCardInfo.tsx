import React from 'react';
import logo from '../../assets/img/logo.png';

const BigCardInfo = () => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 20,
        padding: 40,
        width: '100%',
        minWidth: 370,
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.4s ease',
        overflow: 'hidden',
      }}
    >
      {/* Top row: logo and email */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <img src={logo} alt="logo" style={{ width: 48, height: 48, borderRadius: 12, objectFit: 'cover' }} />
        <div style={{
          background: 'rgba(255,255,255,0.18)',
          color: '#fff',
          borderRadius: 20,
          padding: '8px 24px',
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: 0.5,
        }}>uxidsociety@gmail.com</div>
      </div>

      {/* Center text */}
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
      }}>
        <span style={{
          fontWeight: 700,
          fontSize: 36,
          color: '#D1D1D1',
          letterSpacing: 1.5,
          textAlign: 'center',
        }}>
          WANT TO MAKE AN IMPACT?
        </span>
      </div>

      {/* Bottom row: social icons */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 12, marginTop: 12 }}>
        {/* LinkedIn icon */}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" fill="#fff"/><path d="M8 11v5" stroke="#232323"/><path d="M8 8v.01" stroke="#232323"/><path d="M12 16v-5" stroke="#232323"/><path d="M16 16v-3a2 2 0 0 0-4 0" stroke="#232323"/></svg>
        </a>
        {/* Instagram icon */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" fill="#fff"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#232323"/><circle cx="17.5" cy="6.5" r="1" stroke="#232323"/></svg>
        </a>
      </div>
    </div>
  );
};

export default BigCardInfo;