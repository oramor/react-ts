import { MainMenuItem, IMainMenuItem } from "../MainMenuItem/MainMenuItem";

export interface IMainMenuProps {
    items: IMainMenuItem[];
}

export function MainMenu(props: IMainMenuProps) {
    const menuItems = props.items.map(item => {
        const value: IMainMenuItem = {
            title: item.title,
        };

        return <MainMenuItem {...value}/>
    });

    return (
        <div id="MainMenu">
            <ul>
                {menuItems}
            </ul>
        </div>
    )
}