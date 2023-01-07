import styles from './Card.module.css';

const Card = (props: any) => {
    return (
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    )
};

export default Card;