import styles from "./Box.module.scss";

function Box(props) {
    return (
        <div 
            className={[styles.box, props.dark ? styles.dark : styles.light, props.className].join(" ")}
        >
            {props.children}
        </div>
    );
}

export default Box;