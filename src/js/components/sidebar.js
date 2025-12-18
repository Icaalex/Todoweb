// components/sidebar.js
export function Sidebar(active = "projects") {
  return `
    <aside class="sidebar">
      <div class="logo">☰</div>

      <nav class="nav">
        <a href="dashboard.html" class="nav-item ${active === "projects" ? "active" : ""}">
          <i data-feather="grid"></i>
          <span>Projects</span>
        </a>

        <a href="#" class="nav-item">
          <i data-feather="users"></i>
          <span>Team</span>
        </a>

        <a href="#" class="nav-item">
          <i data-feather="check-square"></i>
          <span>Tasks</span>
        </a>

        <a href="#" class="nav-item">
          <i data-feather="bell"></i>
          <span>Reminders</span>
        </a>

        <a href="#" class="nav-item">
          <i data-feather="message-circle"></i>
          <span>Messages</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <button id="themeToggle">
          <i data-feather="moon"></i>
        </button>
      </div>
    </aside>
  `;
}
