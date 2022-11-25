const MainMenu = {
  template: `
  <header>
  <nav>
  <router-link to="/">Home</router-link>
    <ul>
      <li><router-link :to="{ name: 'credit' }">Crédit</router-link></li>
    </ul>
  </nav>
</header>
    `,
};

export default MainMenu;
