const downloadBtn = document.querySelector('#download-btn');
downloadBtn.addEventListener('click', downloadPDF);

function downloadPDF() {
  // Send a POST request to the server to download the PDF file
  const xhr = new XMLHttpRequest();
  xhr.open('POST', downloadBtn.getAttribute('data-url'));
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.responseType = 'blob';
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Create a temporary URL for the PDF file
      const url = window.URL.createObjectURL(xhr.response);
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = '2nd-brain.pdf';
      document.body.appendChild(link);
      link.click();
      // Remove the temporary link element
      document.body.removeChild(link);
    }
  };
  xhr.send(JSON.stringify({}));
}