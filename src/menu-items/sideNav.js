// assets
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// icons
const icons = {
    ConfirmationNumberOutlinedIcon,
    EmailOutlinedIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const requests = {
    id: 'group-requetsts',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'plans',
            title: 'Plans',
            type: 'item',
            url: '/plans',
            icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        }
        // ,
        // {
        //     id: 'requests',
        //     title: 'firstPage',
        //     type: 'item',
        //     url: '/requests',
        //     icon: icons.ConfirmationNumberOutlinedIcon,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'templates',
        //     title: 'secondPage',
        //     type: 'item',
        //     url: '/templates',
        //     icon: icons.EmailOutlinedIcon,
        //     breadcrumbs: false
        // }
    ]
};

export default requests;
