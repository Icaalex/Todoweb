// components/sidebar.js
export function Sidebar() {
  return `
    <aside class="sidebar">
      <div class="logo"><a href="../pages/dashboard.html" class="nav-item ">☰</a></div>

      <nav class="nav">
        <a href="../pages/projects.html" class="nav-item >
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
