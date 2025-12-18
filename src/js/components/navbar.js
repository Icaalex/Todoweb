export function Navbar(title = "projects") {
  return `
    <header class="navbar">
      <div class="nav-left">
        <h1 class="nav-title">${title}</h1>
      </div>

      <div class="nav-center">
        <div class="search-box">
          <i data-feather="search"></i>
          <input type="text" placeholder="Search tasks..." />
        </div>
      </div>

      <div class="nav-right">
        <button class="icon-btn">
          <i data-feather="bell"></i>
        </button>

        <button class="icon-btn">
          <i data-feather="user"></i>
        </button>
      </div>
    </header>
  `;
}
