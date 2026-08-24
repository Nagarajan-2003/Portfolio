// src/Components/Certificate/Certificate.jsx

import React from "react";
import { CheckCircle, OpenInNew } from "@mui/icons-material";

const Certificate = () => {
  const certifications = [
    {
      title: "Advanced Diploma in Python Programming (ADPP)",
      issuer: "Computer Software College (CSC)",
      link: "https://drive.google.com/file/d/1KrMCIXbKwae6M5E3qeScU_9Cm90kwPIu/view?usp=sharing",
    },
    {
      title: "Python Internship Completion Certificate",
      issuer: "Elewayte",
      link: "https://drive.google.com/file/d/1Xo26tBnEO0HraLTxBVZayQmPYLckw1sP/view?usp=sharing",
    },
    {
      title: "Java Internship Completion Certificate",
      issuer: "Emglitz Technologies",
      link: "https://drive.google.com/file/d/1A5ItqazjRMJMJ8k16xBfVvo2ETO-cVxc/view?usp=sharing",
    },
    {
      title: "AI WITH CHATGPT - Certificate of Completion",
      issuer: "Intrnforte",
      link: "https://drive.google.com/file/d/1DcYFEx1gbpUiOCx0Qj9UhKOnaLVw8GX_/view?usp=sharing",
    },
    {
      title: "FULL STACK WEB DEVELOPMENT - Certificate of Completion",
      issuer: "Intrnforte",
      link: "https://drive.google.com/file/d/18utIVL_3QSFe8Ll0iF4j9iZ8Hi9OWrCJ/view?usp=sharing",
    },
    {
      title: "HTML & CSS - Certificate of Completion",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1rGf99KxM1SXtLXgFBr9HbIlKySD7htst/view?usp=sharing",
    },
    {
      title: "JavaScript - Certificate of Completion",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1oHLH3Ft2lhTyMkm0uj4EFwJW4geHVynm/view?usp=sharing",
    },
  ];

  const styles = {
    section: {
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      padding: "80px 20px",
      scrollMarginTop: "80px",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "left",
    },

    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      borderBottom: "4px solid #ea580c",
      display: "inline-block",
      paddingBottom: "8px",
      marginBottom: "10px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
      marginTop: "40px",
    },

    certItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "15px",
      backgroundColor: "#111111",
      padding: "16px",
      borderRadius: "12px",
      marginBottom: "12px",
      border: "1px solid #222222",
    },

    link: {
      color: "#ffffff",
      backgroundColor: "#333333",
      padding: "10px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      flexShrink: 0,
    },
  };

  return (
    <section id="certificates" style={styles.section}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.heading}>Certificates & Achievements</h2>

          <p style={{ color: "#888888", marginTop: "10px" }}>
            Professional validation and recruitment milestones.
          </p>
        </div>

        <div style={styles.grid}>
          <div>
            <h3
              style={{
                color: "#22c55e",
                fontSize: "1.5rem",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <CheckCircle sx={{ fontSize: 28 }} />
              Certifications
            </h3>

            {certifications.map((cert, index) => (
              <div key={index} style={styles.certItem}>
                <div style={{ minWidth: 0 }}>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "1.1rem",
                      color: "#ffffff",
                    }}
                  >
                    {cert.title}
                  </h4>

                  <p
                    style={{
                      color: "#888888",
                      margin: "5px 0 0",
                      fontSize: "0.85rem",
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${cert.title}`}
                  style={styles.link}
                >
                  <OpenInNew fontSize="small" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
