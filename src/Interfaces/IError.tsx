export interface IError {
    errorTitle: string;
    errorMessage: string;
    onConfirmError?(): void;
}