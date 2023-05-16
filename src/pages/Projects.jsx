// Projects.js
import React, { useState } from "react";
import Modal from "react-modal";
import Project1 from "../components/project1";
import Project2 from "../components/project2";

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (title, description, projectComponent) => {
    setCurrentProject({
      title: title,
      description: description,
      component: projectComponent,
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setModalIsOpen(false);
  };

  return (
    <section>
      <div className="container">
        <div className="proj1">
          <h1>
            Here are some projects I am proud of
          </h1>
          <h2>Top Trumps</h2>
          <button
            onClick={() =>
              openModal("Top Trumps", "Description of top trumps", Project1)
            }
          >
            Details
          </button>
        </div>
        <div className="proj2">
          <h2>Crypto Link</h2>
          <button
            onClick={() =>
              openModal("Crypto Link", "Description of Crypto Link", Project2)
            }
          >
            Details
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {currentProject && (
          <div>
            <h2>{currentProject.title}</h2>
            <currentProject.component />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Projects;
