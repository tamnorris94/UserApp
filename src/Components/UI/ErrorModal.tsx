import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import { IError } from '../../Interfaces/IError';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { isPropertySignature } from 'typescript';

type Props = {error: IError};

const Backdrop = (props: any) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirmError}/>
    )
}

const ModalOverlay = (props: any) => {
    return (
        <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.errorTitle}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirmError}>OK</Button>
                </footer>
            </Card>
    )
}

const ErrorModal = (props: any) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirmError={props.onConfirmError}/>, document.getElementById('backdrop-root')!)}
            {ReactDOM.createPortal(<ModalOverlay errorTitle={props.errorTitle} errorMessage={props.errorMessage} onConfirmError={props.onConfirmError}/>, document.getElementById('overlay-root')!)}
            
        </Fragment>
        )
}

// const ErrorModal: React.FC<Props> = (props) => {
//     return (
//         <div>
//             <div className={styles.backdrop} onClick={props.error.onConfirmError}/>
//             <Card className={styles.modal}>
//                 <header className={styles.header}>
//                     <h2>{props.error.errorTitle}</h2>
//                 </header>
//                 <div className={styles.content}>
//                     <p>{props.error.errorMessage}</p>
//                 </div>
//                 <footer className={styles.actions}>
//                     <Button onClick={props.error.onConfirmError}>OK</Button>
//                 </footer>
//             </Card>
//         </div>
//         )
// }

export default ErrorModal;