'use client'

const whoAreWe = () => {
  return (
    <div className="container">
    <div className="image-section">
      <img src="/imagenes/d.jpg" alt="Technology Illustration" />
    </div>
    <div className="text-section">
      <p>
        Esencia es una empresa de tecnología dedicada a desarrollar soluciones innovadoras que facilitan la transformación digital de empresas y organizaciones. Nos enfocamos en capturar la esencia de las necesidades de nuestros clientes y traducirlas en productos y servicios tecnológicos que optimicen procesos, mejoren la experiencia del usuario y promuevan la sostenibilidad.
      </p>
    </div>
    {/* Overlapping Circles */}
    <div className="circle circle-1"></div>
    <div className="circle circle-2"></div>

    <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0; 
          padding: 20px;
          position: relative;
          max-width: 1000px;
          margin: 50px auto;
        }

        .image-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-wrapper {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .text-section {
          flex: 1;
          background-color: #e5e5eb; 
          padding: 40px;
          border-radius: 10px;
          margin-left: -60px; 
          z-index: 1;
        }

        .description {
          font-size: 18px;
          line-height: 1.6;
          color: #333;
          max-width: 500px;
        }

          .text-section {
            margin-left: 0;
            text-align: center;
          }

      `}</style>


  </div>
  );
};


export default whoAreWe;