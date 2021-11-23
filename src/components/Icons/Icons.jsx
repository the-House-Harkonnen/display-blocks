import React from 'react';
import { useThemeContext } from '../../contexts/themeContext';

const BurgerIcon = () => {
  return (
    <svg
      width='22'
      height='17'
      viewBox='0 0 22 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 0H22V2.75H0V0ZM0 6.875H22V9.625H0V6.875ZM0 13.75H22V16.5H0V13.75Z'
        fill='#F0F2F4'
      />
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.125 17.25C2.125 17.25 0.75 17.25 0.75 15.875C0.75 14.5 2.125 10.375 9 10.375C15.875 10.375 17.25 14.5 17.25 15.875C17.25 17.25 15.875 17.25 15.875 17.25H2.125ZM9 9C10.094 9 11.1432 8.5654 11.9168 7.79182C12.6904 7.01823 13.125 5.96902 13.125 4.875C13.125 3.78098 12.6904 2.73177 11.9168 1.95818C11.1432 1.1846 10.094 0.75 9 0.75C7.90598 0.75 6.85677 1.1846 6.08318 1.95818C5.3096 2.73177 4.875 3.78098 4.875 4.875C4.875 5.96902 5.3096 7.01823 6.08318 7.79182C6.85677 8.5654 7.90598 9 9 9Z'
        fill='#F0F2F4'
        fillOpacity='0.8'
      />
    </svg>
  );
};

const HomeIcon = () => {
  const [{ theme }] = useThemeContext();
  return (
    <svg
      style={{
        fill: theme.color,
      }}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.7889 8.39059L8.35293 1.95934C8.30659 1.91291 8.25155 1.87607 8.19095 1.85094C8.13036 1.8258 8.0654 1.81287 7.9998 1.81287C7.93421 1.81287 7.86925 1.8258 7.80866 1.85094C7.74806 1.87607 7.69302 1.91291 7.64668 1.95934L1.21074 8.39059C1.02324 8.57809 0.916992 8.83278 0.916992 9.0984C0.916992 9.64996 1.36543 10.0984 1.91699 10.0984H2.59512V14.6875C2.59512 14.964 2.81855 15.1875 3.09512 15.1875H6.9998V11.6875H8.7498V15.1875H12.9045C13.1811 15.1875 13.4045 14.964 13.4045 14.6875V10.0984H14.0826C14.3482 10.0984 14.6029 9.99371 14.7904 9.80465C15.1795 9.41403 15.1795 8.78121 14.7889 8.39059Z'
        fill=''
      />
    </svg>
  );
};

const BakersIcon = () => {
  const [{ theme }] = useThemeContext();
  return (
    <svg
      style={{
        fill: theme.color,
      }}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 14.5C7 14.5 6 14.5 6 13.5C6 12.5 7 9.5 11 9.5C15 9.5 16 12.5 16 13.5C16 14.5 15 14.5 15 14.5H7ZM11 8.5C11.7956 8.5 12.5587 8.18393 13.1213 7.62132C13.6839 7.05871 14 6.29565 14 5.5C14 4.70435 13.6839 3.94129 13.1213 3.37868C12.5587 2.81607 11.7956 2.5 11 2.5C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5C8 6.29565 8.31607 7.05871 8.87868 7.62132C9.44129 8.18393 10.2044 8.5 11 8.5Z'
        fill=''
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.216 14.4999C5.06776 14.1878 4.99382 13.8455 5 13.4999C5 12.1449 5.68 10.7499 6.936 9.77994C6.30909 9.58677 5.65595 9.49231 5 9.49994C1 9.49994 0 12.4999 0 13.4999C0 14.4999 1 14.4999 1 14.4999H5.216Z'
        fill=''
      />
      <path
        d='M4.5 8.5C5.16304 8.5 5.79893 8.23661 6.26777 7.76777C6.73661 7.29893 7 6.66304 7 6C7 5.33696 6.73661 4.70107 6.26777 4.23223C5.79893 3.76339 5.16304 3.5 4.5 3.5C3.83696 3.5 3.20107 3.76339 2.73223 4.23223C2.26339 4.70107 2 5.33696 2 6C2 6.66304 2.26339 7.29893 2.73223 7.76777C3.20107 8.23661 3.83696 8.5 4.5 8.5Z'
        fill=''
      />
    </svg>
  );
};

const BlocksIcon = () => {
  const [{ theme }] = useThemeContext();
  return (
    <svg
      style={{
        fill: theme.color,
      }}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.9645 4.54004L8.18672 1.87338C8.12822 1.8463 8.06452 1.83228 8.00005 1.83228C7.93559 1.83228 7.87189 1.8463 7.81339 1.87338L2.03561 4.54004C1.95846 4.57575 1.89318 4.63282 1.84749 4.70451C1.8018 4.77619 1.77762 4.85948 1.77783 4.94449V12.5C1.77762 12.585 1.8018 12.6683 1.84749 12.74C1.89318 12.8117 1.95846 12.8688 2.03561 12.9045L7.81339 15.5712C7.87189 15.5982 7.93559 15.6123 8.00005 15.6123C8.06452 15.6123 8.12822 15.5982 8.18672 15.5712L13.9645 12.9045C14.0416 12.8688 14.1069 12.8117 14.1526 12.74C14.1983 12.6683 14.2225 12.585 14.2223 12.5V4.94449C14.2225 4.85948 14.1983 4.77619 14.1526 4.70451C14.1069 4.63282 14.0416 4.57575 13.9645 4.54004ZM8.00005 7.12226L3.2845 4.94449L8.00005 2.76671L12.7156 4.94449L8.00005 7.12226ZM13.3334 12.2156L8.4445 14.4734V7.8956L13.3334 5.63782V12.2156Z'
        fill=''
      />
    </svg>
  );
};

const ChartsIcon = () => {
  const [{ theme }] = useThemeContext();
  return (
    <svg
      style={{
        fill: theme.color,
      }}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.875 12.875H3.125V3.125C3.125 3.05625 3.06875 3 3 3H2.125C2.05625 3 2 3.05625 2 3.125V13.875C2 13.9438 2.05625 14 2.125 14H13.875C13.9438 14 14 13.9438 14 13.875V13C14 12.9312 13.9438 12.875 13.875 12.875ZM4.25 11.875H12.625C12.6938 11.875 12.75 11.8188 12.75 11.75V4.9375C12.75 4.825 12.6141 4.77031 12.5359 4.84844L9.25 8.13438L7.29063 6.19688C7.26713 6.17361 7.23541 6.16056 7.20234 6.16056C7.16928 6.16056 7.13756 6.17361 7.11406 6.19688L4.16094 9.15938C4.14947 9.17087 4.14039 9.18451 4.13422 9.19953C4.12805 9.21455 4.12492 9.23064 4.125 9.24687V11.75C4.125 11.8188 4.18125 11.875 4.25 11.875Z'
        fill=''
      />
      <path
        d='M13.875 12.875H3.125V3.125C3.125 3.05625 3.06875 3 3 3H2.125C2.05625 3 2 3.05625 2 3.125V13.875C2 13.9438 2.05625 14 2.125 14H13.875C13.9438 14 14 13.9438 14 13.875V13C14 12.9312 13.9438 12.875 13.875 12.875ZM4.25 11.875H12.625C12.6938 11.875 12.75 11.8188 12.75 11.75V4.9375C12.75 4.825 12.6141 4.77031 12.5359 4.84844L9.25 8.13438L7.29063 6.19688C7.26713 6.17361 7.23541 6.16056 7.20234 6.16056C7.16928 6.16056 7.13756 6.17361 7.11406 6.19688L4.16094 9.15938C4.14947 9.17087 4.14039 9.18451 4.13422 9.19953C4.12805 9.21455 4.12492 9.23064 4.125 9.24687V11.75C4.125 11.8188 4.18125 11.875 4.25 11.875Z'
        fill=''
      />
    </svg>
  );
};

const EcosystemIcon = () => {
  const [{ theme }] = useThemeContext();
  return (
    <svg
      style={{
        fill: theme.color,
      }}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.66667 2C3.99067 2 1 4.99067 1 8.66667C1 12.3427 3.99067 15.3333 7.66667 15.3333C11.3427 15.3333 14.3333 12.3427 14.3333 8.66667C14.3333 4.99067 11.3427 2 7.66667 2ZM2.33333 8.66667C2.33333 8.06733 2.43733 7.492 2.62067 6.954L3.66667 8L5 9.33333V10.6667L6.33333 12L7 12.6667V13.954C4.374 13.624 2.33333 11.3813 2.33333 8.66667ZM11.8867 11.9153C11.4513 11.5647 10.7913 11.3333 10.3333 11.3333V10.6667C10.3333 10.313 10.1929 9.97391 9.94281 9.72386C9.69276 9.47381 9.35362 9.33333 9 9.33333H6.33333V7.33333C6.68696 7.33333 7.02609 7.19286 7.27614 6.94281C7.52619 6.69276 7.66667 6.35362 7.66667 6V5.33333H8.33333C8.68696 5.33333 9.02609 5.19286 9.27614 4.94281C9.52619 4.69276 9.66667 4.35362 9.66667 4V3.726C11.6187 4.51867 13 6.43333 13 8.66667C12.9999 9.84313 12.6082 10.9861 11.8867 11.9153Z'
        fill=''
      />
    </svg>
  );
};

export {
  BakersIcon,
  BlocksIcon,
  ChartsIcon,
  EcosystemIcon,
  HomeIcon,
  BurgerIcon,
  UserIcon,
};
