import React from 'react';

const LoginIcon = ({ width = 24, height = 24, fill = '#F8F8F8' }) => {
    return (
        <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 24.5v-2.667h9.333V3.167H12.5V.5h9.333c.734 0 1.361.261 1.884.783.522.523.783 1.15.783 1.884v18.666c0 .734-.261 1.361-.783 1.884a2.568 2.568 0 0 1-1.884.783H12.5zm-2.667-5.333L8 17.233l3.4-3.4H.5v-2.666h10.9L8 7.767l1.833-1.934L16.5 12.5l-6.667 6.667z"
                fill={fill}
            />
        </svg>
    );
};

export default LoginIcon;
