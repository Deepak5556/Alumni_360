import React, { useState } from 'react';

const AddStudents = () => {
  const [batch, setBatch] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!batch || !file) {
      alert('Please select a batch and upload a file.');
      return;
    }
    alert(`Uploading file: ${file.name} for batch: ${batch}`);

  };

  return (
    <div className="container pt-5 mt-5 d-flex justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg p-4 border-0 rounded-3">
          <div className="card-body">
            <h4 className="text-center text-primary mb-4">Add Students</h4>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Select Batch</label>
                <select 
                  className="form-select" 
                  name="batch" 
                  value={batch} 
                  onChange={(e) => setBatch(e.target.value)}
                >
                  <option value="" disabled>Select Batch</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
               
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Upload File</label>
                <input 
                  type="file" 
                  className="form-control" 
                  name="file" 
                  onChange={handleFileChange} 
                />
                <div className="row justify-content-center">
                  <div className="col-11">
                  <small className="text-justify  text-danger">Note:CSV File Format should be name, rollno, batch, department, alumni, mobile, password</small>
                  </div>
                </div>
                
              </div>

              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm" 
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;