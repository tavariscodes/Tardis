import React, { ReactNode } from 'react';
import DivThree from './Divthree';

type Props = {
    tardis: string;
    fn?: () => void;
    children?: ReactNode;
}

const DivTwo: React.FC<Props> = ({ tardis, fn, children}) => {
    return(
        <div>
            <DivThree tardis={tardis} fn={fn}/>
            <DivThree tardis={tardis} fn={fn}/>
        </div>
    )
}

export default DivTwo;