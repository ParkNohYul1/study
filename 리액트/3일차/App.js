import React from "react";
import './index.css';

const MenuListItem = () => {
  return (
    <li class="ediya-menu__item">
      <a href="#" role="button" aria-haspopup="dialog" aria-pressed="false">
        <figure>
          <img src="//raw.githubusercontent.com/yamoo9/assets/master/images/ediya/iced-cherry-blossoms-latte.png" alt="" width="323" height="323" />
          <figcaption>ICED 벚꽃라떼</figcaption>
        </figure>
      </a>
      <div role="dialog" aria-modal="false" aria-labelledby="dialog-1-label">
        <h3 id="dialog-1-label" class="a11y-hidden">ICED 벚꽃라떼</h3>
      </div>
    </li>
  );
}

const MenuList = () => {
  return (
    <ul class="ediya-menu reset-list">
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
    </ul>
  );
}

const App = () => {
  return (
    <main className="app-main">
      <h2 className="a11y-hidden">이디야 음료</h2>
      <MenuList />
    </main>
  );
}
export default App;
