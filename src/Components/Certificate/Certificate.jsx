import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

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
    }
  ];

  // Styles defined as objects to ensure they render without Tailwind
  const styles = {
    section: {
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '80px 20px',
      scrollMarginTop: '80px'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'left'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      borderBottom: '4px solid #ea580c',
      display: 'inline-block',
      paddingBottom: '8px',
      marginBottom: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '40px'
    },
    card: {
      backgroundColor: '#111111',
      padding: '24px',
      borderRadius: '12px',
      borderLeft: '4px solid #ea580c',
      marginBottom: '20px',
      transition: '0.3s'
    },
    certItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#111111',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '12px',
      border: '1px solid #222'
    },
    badge: {
      fontSize: '10px',
      fontWeight: 'bold',
      background: 'rgba(234, 88, 12, 0.2)',
      color: '#ea580c',
      padding: '4px 8px',
      borderRadius: '4px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  return (
    <section id="certificates" style={styles.section}>
      <div style={styles.container}>
        
        {/* Header */}
        <div>
          <h2 style={styles.heading}>Certificates & Achievements</h2>
          <p style={{ color: '#888', marginTop: '10px' }}>
            Professional validation and recruitment milestones.
          </p>
        </div>

        <div style={styles.grid}>
          
         

          {/* Certifications List */}
          <div>
            <h3 style={{ color: '#22c55e', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={28} /> Certifications
            </h3>
            {certifications.map((cert, index) => (
              <div key={index} style={styles.certItem}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{cert.title}</h4>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.85rem' }}>{cert.issuer}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'white', backgroundColor: '#333', padding: '10px', borderRadius: '50%', display: 'flex' }}
                >
                  <ExternalLink size={18} />
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