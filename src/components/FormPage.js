import React, { useState } from 'react';

const HealthDashboard = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    address: '',
    bloodPressure: '',
    heartRate: '',
    weight: '',
    height: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log('Health information submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      age: '',
      phoneNumber: '',
      address: '',
      bloodPressure: '',
      heartRate: '',
      weight: '',
      height: '',
    });
  };

  return (
    <div>
      <h2>Personalized Health Dashboard</h2>
      {/* Form for health information */}
      <form className="border p-4 rounded shadow-sm bg-light mx-auto mt-5" style={{borderColor:'black',maxWidth:'1100px'}}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold'}}>Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="nameHelp"/>
    <div id="nameHelp" className="form-text">Enter your full name.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="age" className="form-label" style={{ fontWeight: 'bold' }}>Age</label>
    <input type="number" className="form-control" id="age"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Height" className="form-label" style={{ fontWeight: 'bold' }}>Height</label>
    <input type="number" className="form-control" id="Height"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Weight" className="form-label" style={{ fontWeight: 'bold' }}>Weight</label>
    <input type="number" className="form-control" id="Weight"/>
  </div>
  <div className="mb-3">
    <label htmlFor="phoneNumber" className="form-label" style={{ fontWeight: 'bold' }}>Phone Number</label>
    <input type="tel" className="form-control" id="phoneNumber"/>
  </div>

  <div className="mb-3">
    <label htmlFor="address" className="form-label" style={{ fontWeight: 'bold' }}>Address</label>
    <textarea className="form-control" id="address" rows="3"></textarea>
  </div>
  <div className="mb-3">
        <label htmlFor="disease" className="form-label" style={{ fontWeight: 'bold' }}>Disease</label>
        <select className="form-select" id="disease">
        <option value="Heart diseases">Heart diseases</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Diabetes">Diabetes</option>
          <option value="BP">BP</option>
          <option value="osteoarthritis">osteoarthritis</option>
          <option value="back and neck pain">back and neck pain</option>
          <option value="cataract">cataract</option>
          <option value="anemia">anemia</option>
          <option value="kidney problems">kidney problems</option>
          <option value="depression">depression</option>
          </select>
  </div>

  <div className="mb-3">
    <label htmlFor="unspecifiedDisease" className="form-label" style={{ fontWeight: 'bold' }}>Unspecified Disease</label>
    
    <input
      type="text"
      className="form-control"
      id="specifyUnspecifiedDisease"
      placeholder="Specify Unspecified Disease"
      style={{ marginTop: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="medications" className="form-label" style={{ fontWeight: 'bold' }}>Medications</label>
    <div className="row">
      <div className="col">
        <label htmlFor="medicationName" className="form-label" style={{ fontWeight: 'bold' }}>Medication Name</label>
        <input type="text" className="form-control" id="medicationName"/>
      </div>
      <div className="col">
        <label htmlFor="medicationDosage" className="form-label" style={{ fontWeight: 'bold' }}>Dosage</label>
        <input type="text" className="form-control" id="medicationDosage"/>
      </div>
      <div className="col">
        <label htmlFor="medicationPurpose" className="form-label" style={{ fontWeight: 'bold' }}>Purpose</label>
        <input type="text" className="form-control" id="medicationPurpose"/>
      </div>
    </div>
    <div className="form-text">Enter information about each medication.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="medicationSchedule" className="form-label" style={{ fontWeight: 'bold' }}>Medication Schedule</label>
    <div className="row">
      <div className="col">
        <label htmlFor="medicationTime" className="form-label" style={{ fontWeight: 'bold' }}>Time</label>
        <input type="time" className="form-control" id="medicationTime"/>
      </div>
      <div className="col">
        <label htmlFor="medicationReminder" className="form-label" style={{ fontWeight: 'bold' }}>Set Reminder</label>
        <input type="checkbox" className="form-check-input" id="medicationReminder"/>
      </div>
    </div>
    <div className="form-text">Set the time for medication and choose whether to set a reminder.</div>
  </div>
    
  <div className="mb-3">
    <label htmlFor="emergencyContact" className="form-label" style={{ fontWeight: 'bold' }}>Emergency Contact</label>
    <input type="tel" className="form-control" id="emergencyContact"/>
  </div>

  <div className="mb-3">
    <label htmlFor="familyMembers" className="form-label" style={{ fontWeight: 'bold' }}>Family Members</label>
    <div className="row">
      <div className="col">
        <label htmlFor="familyMemberName" className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
        <input type="text" className="form-control" id="familyMemberName"/>
      </div>
      <div className="col">
        <label htmlFor="familyMemberAge" className="form-label" style={{ fontWeight: 'bold' }}>Age</label>
        <input type="number" className="form-control" id="familyMemberAge"/>
      </div>
      <div className="col">
        <label htmlFor="familyMemberRelation" className="form-label" style={{ fontWeight: 'bold' }}>Relation</label>
        <select className="form-select" id="familyMemberRelation">
          <option value="spouse">Spouse</option>
          <option value="child">Child</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <div className="form-text">Enter names, ages, and relations of family members.</div>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  );
};

export default HealthDashboard;