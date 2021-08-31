import React, { ReactNode } from 'react';

type Props = {
    tardis: string;
    fn?: () => void;
    children?: ReactNode;
}

const DivThree: React.FC<Props> = ({ tardis, fn, children }) => {
    return(
        <div>
            <h3 onClick={fn}>{tardis}</h3>
        </div>
    )
}

export default DivThree;