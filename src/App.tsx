import ReactDOM from 'react-dom/client';
import { MainMenu, IMainMenuProps } from "./components/MainMenu/MainMenu";
import { Logo } from "./components/Logo/Logo";

const obj: IMainMenuProps = {
    items: [
        { title: 'Главная'},
        { title: 'Товары'},
    ]
}

const logoNode = <Logo />;
const mainMenuNode = <MainMenu {...obj} />;

const wrapper = document.getElementById('root');
if (wrapper) {
    const root = ReactDOM.createRoot(wrapper);
    root.render(logoNode);
    root.render(mainMenuNode);
}
