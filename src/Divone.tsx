import React, { ReactNode } from 'react';
import DivTwo from './Divtwo';

type Props = {
    tardis: string;
    fn?: () => void;
    children?: ReactNode;
}

const DivOne: React.FC<Props> = ({ tardis, fn, children }) => {
    // const childrenWithProps = React.Children.map(children, child => {
    //     if (React.isValidElement(child)) {
    //         return React.cloneElement(child, { fn , tardis});
    //       }
    //       return child;
    // });
    return(
        <div>
            <DivTwo tardis={tardis} fn={fn} />
        </div>
    )
}

export default DivOne;