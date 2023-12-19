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
      <div>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Syllabus</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FSD-MERN</td>
              <td>
                <button onClick={handleDownload}>Download</button>
              </td>
              <td>
              <a
                  href="https://drive.google.com/file/d/17sW0f9j6vqbJJVdbop1AUMxGGt3mnBJU/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
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
