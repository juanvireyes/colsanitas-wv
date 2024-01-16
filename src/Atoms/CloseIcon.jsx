import React from "react";

const CloseIcon = ({ estilo }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="18" fill="#0071A3" fillOpacity="0.2" />
            <path d="M23.9766 13.8516L19.2891 18.5391L23.9375 23.1875C24.3281 23.5391 24.3281 24.125 23.9375 24.4766C23.5859 24.8672 23 24.8672 22.6484 24.4766L17.9609 19.8281L13.3125 24.4766C12.9609 24.8672 12.375 24.8672 12.0234 24.4766C11.6328 24.125 11.6328 23.5391 12.0234 23.1484L16.6719 18.5L12.0234 13.8516C11.6328 13.5 11.6328 12.9141 12.0234 12.5234C12.375 12.1719 12.9609 12.1719 13.3516 12.5234L18 17.2109L22.6484 12.5625C23 12.1719 23.5859 12.1719 23.9766 12.5625C24.3281 12.9141 24.3281 13.5 23.9766 13.8516Z" fill="#002F87" />
        </svg>
    );
};

export { CloseIcon };