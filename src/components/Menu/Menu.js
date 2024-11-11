import styles from "@/components/Menu/Menu.module.css";

const Menu = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">
            <img src="/images/thegames_symbol.png" alt="The Games" />
          </a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuItems} id="menuItems">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="create">Cadastrar jogos</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
        <div className={styles.menuBtn} id="menuBtn">
          <i id="menuIcon">
            {/* Aqui será incluído um ícone do React Icons */}
          </i>
        </div>
      </nav>
    </>
  );
};

export default Menu;
