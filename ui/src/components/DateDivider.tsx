
import './DateDivider.scss';


export const DateDivider = ({ date }) => {
    return (
        <div class="date-divider-container">
            <time class="date-divider-date">{date}</time>
            <div class="date-divider-divider" aria-hidden="true" />
        </div>
    );
};