import React from 'react';

type Props = {
    text: string;
};
const Title: React.FC<Props> = ({ text }) => {
    return <h2>{text}</h2>;
};

export default Title;
