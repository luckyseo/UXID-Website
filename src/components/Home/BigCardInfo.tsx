import React from "react";
import logo from "../../assets/img/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const BigCardInfo = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: 20,
        padding: 40,
        width: "100%",
        minWidth: 370,
        minHeight: 470,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "all 0.4s ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 24,
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "#fff",
            borderRadius: 20,
            padding: "8px 24px",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: 0.5,
          }}
        >
          uxidsociety@gmail.com
        </div>
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 36,
            color: "#D1D1D1",
            letterSpacing: 1.5,
            textAlign: "center",
          }}
        >
          WANT TO MAKE AN IMPACT?
        </span>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 12,
          marginTop: 12,
        }}
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaLinkedin size={28} style={{ color: "#fff" }} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaInstagram size={28} style={{ color: "#fff" }} />
        </a>
      </div>
    </div>
  );
};

export default BigCardInfo;
