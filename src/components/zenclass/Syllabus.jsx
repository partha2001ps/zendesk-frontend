import React from 'react';
import Navlink from '../Navlink/Navlink';

function Syllabus() {
  const handleDownload = () => {
    const pdfPath = '/hi.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'FSD-MERN-Syllabus.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Navlink />
      <div className='m-5'>
      <table className='table '>
        <thead className='thead-dark'>
          <tr className='table-active'>
            <th>Course</th>
            <th>Syllabus</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FSD-MERN</td>
            <td>
              <button className='btn btn-outline-secondary' onClick={handleDownload}>
                Download
              </button>
            </td>
            <td>
              <a
                href="https://drive.google.com/file/d/17sW0f9j6vqbJJVdbop1AUMxGGt3mnBJU/view?usp=sharing"
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                View syllabus
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Syllabus;
