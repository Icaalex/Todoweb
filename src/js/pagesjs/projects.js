feather.replace();
import { Navbar } from "../components/navbar.js";
import { Sidebar } from "../components/sidebar.js";
//
document.getElementById("navbar").innerHTML = Navbar("projects");
document.getElementById("sidebar-container").innerHTML = Sidebar("projects");

 function ProjectsPage() {
  return `
    <section class="projects-page">
      
      <div class="projects-header">
        <h2>Projects</h2>
        <button class="add-project-btn">
          <i data-feather="plus"></i>
          New Project
        </button>
      </div>

      <div class="projects-list">
        ${ProjectItem("Personal")}
        ${ProjectItem("School")}
        ${ProjectItem("Work")}
      </div>

    </section>
  `;
}

function ProjectItem(name) {
  return `
    <div class="project-card">
      <div class="project-left">
        <span class="project-dot"></span>
        <span class="project-name">${name}</span>
      </div>

      <div class="project-right">
        <span class="task-count">0 tasks</span>
        <button class="icon-btn">
          <i data-feather="more-vertical"></i>
        </button>
      </div>
    </div>
  `;
}

  document.getElementById("page").innerHTML = ProjectsPage();
