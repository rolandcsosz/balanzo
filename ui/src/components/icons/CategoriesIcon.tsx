import './Icon.scss'
import { IconProps } from './IconProps';

export const CategoriesIcon = ({ isActive, isFilled }: IconProps) => {
    if (isFilled) {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.425 17.0687V27.0687H25.425V17.0687H15.425ZM2.92505 27.0687H12.925V17.0687H2.92505V27.0687ZM2.92505 4.56865V14.5687H12.925V4.56865H2.92505ZM20 2.93115L12.925 9.99365L20 17.0687L27.075 9.99365L20 2.93115Z" class={isActive ? "active" : "inactive"} />
            </svg>

        );
    }

    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6.46865L23.5375 10.0062L20 13.5437L16.4625 10.0062L20 6.46865ZM10.425 7.06865V12.0687H5.42505V7.06865H10.425ZM22.925 19.5687V24.5687H17.925V19.5687H22.925ZM10.425 19.5687V24.5687H5.42505V19.5687H10.425ZM20 2.93115L12.925 9.99365L20 17.0687L27.075 9.99365L20 2.93115ZM12.925 4.56865H2.92505V14.5687H12.925V4.56865ZM25.425 17.0687H15.425V27.0687H25.425V17.0687ZM12.925 17.0687H2.92505V27.0687H12.925V17.0687Z" class={isActive ? "active" : "inactive"} />
        </svg>
    );
};
