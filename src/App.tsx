import React, { useState } from 'react';
import './App.css';

interface CVData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    summary: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: Array<{
    category: string;
    skills: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string;
    link: string;
  }>;
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
}

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      summary: ''
    },
    education: [{
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }],
    experience: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    skills: [{
      category: '',
      skills: ''
    }],
    projects: [{
      name: '',
      description: '',
      technologies: '',
      link: ''
    }],
    languages: [{
      language: '',
      proficiency: ''
    }]
  });

  const updatePersonalInfo = (field: keyof CVData['personalInfo'], value: string) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, {
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }]
    }));
  };

  const removeEducation = (index: number) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const removeExperience = (index: number) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const updateSkills = (index: number, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const addSkills = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, { category: '', skills: '' }]
    }));
  };

  const removeSkills = (index: number) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const updateProjects = (index: number, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const addProject = () => {
    setCvData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        name: '',
        description: '',
        technologies: '',
        link: ''
      }]
    }));
  };

  const removeProject = (index: number) => {
    setCvData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const updateLanguages = (index: number, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const addLanguage = () => {
    setCvData(prev => ({
      ...prev,
      languages: [...prev.languages, { language: '', proficiency: '' }]
    }));
  };

  const removeLanguage = (index: number) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CV Data:', cvData);
    alert('CV form submitted! Check console for data.');
  };

  const generatePDF = () => {
    // This would integrate with a PDF generation library
    alert('PDF generation feature would be implemented here!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📄 Techn Plus CVs</h1>
        <p>Create your professional CV with our comprehensive form</p>
      </header>

      <main className="App-main">
        <form onSubmit={handleSubmit} className="cv-form">
          {/* Personal Information */}
          <section className="form-section">
            <h2>👤 Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  value={cvData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  value={cvData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={cvData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  value={cvData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label>Address</label>
                <input
                  type="text"
                  value={cvData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo('address', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  value={cvData.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                />
              </div>
              <div className="form-group full-width">
                <label>Professional Summary</label>
                <textarea
                  value={cvData.personalInfo.summary}
                  onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                  rows={4}
                  placeholder="Write a brief professional summary..."
                />
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="form-section">
            <h2>🎓 Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="form-card">
                <div className="card-header">
                  <h3>Education #{index + 1}</h3>
                  {cvData.education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Institution *</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Degree *</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Field of Study</label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => updateEducation(index, 'field', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>GPA</label>
                    <input
                      type="text"
                      value={edu.gpa}
                      onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                      placeholder="e.g., 3.8/4.0"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addEducation} className="add-btn">
              + Add Education
            </button>
          </section>

          {/* Work Experience */}
          <section className="form-section">
            <h2>💼 Work Experience</h2>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="form-card">
                <div className="card-header">
                  <h3>Experience #{index + 1}</h3>
                  {cvData.experience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Company *</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(index, 'company', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Position *</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => updateExperience(index, 'position', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(index, 'description', e.target.value)}
                      rows={3}
                      placeholder="Describe your responsibilities and achievements..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addExperience} className="add-btn">
              + Add Experience
            </button>
          </section>

          {/* Skills */}
          <section className="form-section">
            <h2>🛠️ Skills</h2>
            {cvData.skills.map((skill, index) => (
              <div key={index} className="form-card">
                <div className="card-header">
                  <h3>Skill Category #{index + 1}</h3>
                  {cvData.skills.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkills(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      value={skill.category}
                      onChange={(e) => updateSkills(index, 'category', e.target.value)}
                      placeholder="e.g., Programming Languages, Tools, etc."
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Skills</label>
                    <textarea
                      value={skill.skills}
                      onChange={(e) => updateSkills(index, 'skills', e.target.value)}
                      rows={2}
                      placeholder="e.g., JavaScript, React, Node.js, Git..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addSkills} className="add-btn">
              + Add Skill Category
            </button>
          </section>

          {/* Projects */}
          <section className="form-section">
            <h2>🚀 Projects</h2>
            {cvData.projects.map((project, index) => (
              <div key={index} className="form-card">
                <div className="card-header">
                  <h3>Project #{index + 1}</h3>
                  {cvData.projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => updateProjects(index, 'name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Technologies</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => updateProjects(index, 'technologies', e.target.value)}
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Link</label>
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => updateProjects(index, 'link', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProjects(index, 'description', e.target.value)}
                      rows={3}
                      placeholder="Describe the project, your role, and key features..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addProject} className="add-btn">
              + Add Project
            </button>
          </section>

          {/* Languages */}
          <section className="form-section">
            <h2>🌍 Languages</h2>
            {cvData.languages.map((lang, index) => (
              <div key={index} className="form-card">
                <div className="card-header">
                  <h3>Language #{index + 1}</h3>
                  {cvData.languages.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLanguage(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Language</label>
                    <input
                      type="text"
                      value={lang.language}
                      onChange={(e) => updateLanguages(index, 'language', e.target.value)}
                      placeholder="e.g., English, Spanish, French"
                    />
                  </div>
                  <div className="form-group">
                    <label>Proficiency</label>
                    <select
                      value={lang.proficiency}
                      onChange={(e) => updateLanguages(index, 'proficiency', e.target.value)}
                    >
                      <option value="">Select proficiency</option>
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Basic">Basic</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addLanguage} className="add-btn">
              + Add Language
            </button>
          </section>

          {/* Submit Buttons */}
          <section className="form-section">
            <div className="button-group">
              <button type="submit" className="submit-btn">
                💾 Save CV Data
              </button>
              <button type="button" onClick={generatePDF} className="pdf-btn">
                📄 Generate PDF
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
