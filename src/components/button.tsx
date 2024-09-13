const Button = (props : any) => {
    return (
        <button className={props.style}>
            {props.namebtn}
        </button>
    );
}
export default Button;