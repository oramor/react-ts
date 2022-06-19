export interface IMainMenuItem {
    title: string;
}

export function MainMenuItem(props: IMainMenuItem) {
    return <li>{props.title}</li>
}