
import './button.css';

function Button (props) {

    return (
        <div className="button">
            <p>{props.title}</p>
        </div>
    )
};

export default Button;