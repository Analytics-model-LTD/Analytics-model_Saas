// assets
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SvgIcon from '@material-ui/core/SvgIcon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FeedIcon from '@mui/icons-material/Feed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// icons
const icons = {
    ConfirmationNumberOutlinedIcon,
    EmailOutlinedIcon,
    SettingsIcon,
    AttachFileIcon,
    FeedIcon,
    CreditCardIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const requests = {
    id: 'group-requetsts',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'myinsight',
            title: 'My insight',
            type: 'item',
            url: '/myfeed',
            icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myfeed',
            title: 'My Feed',
            type: 'item',
            url: '/myfeed',
            icon: icons.FeedIcon,
            breadcrumbs: false
        },
        {
            id: 'integrationsourcestable',
            title: 'Integrationsourcestable',
            type: 'item',
            url: '/integrationsources',
            icon: icons.AttachFileIcon,
            breadcrumbs: false
        },
        {
            id: 'integrationsources',
            title: 'My Connections',
            type: 'item',
            url: '/integrationsources/table',
            icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'plans',
            title: 'Plans',
            type: 'item',
            url: '/plans',
            icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        // {
        //     id: 'billing',
        //     title: 'Billing',
        //     type: 'item',
        //     url: '/billing',
        //     icon: icons.ConfirmationNumberOutlinedIcon,
        //     breadcrumbs: false
        // },
       
   
     
        // {
        //     id: 'myinsight',
        //     title: 'My insight',
        //     type: 'item',
        //     url: '/myfeed',
        //     icon: icons.ConfirmationNumberOutlinedIcon,
        //     breadcrumbs: false
        // },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/myfeed',
            icon: icons.SettingsIcon
            ,
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: icons.CreditCardIcon,
            breadcrumbs: false
        },
        // {
        //     id: 'addconnection',
        //     title: 'Addconnection',
        //     type: 'item',
        //     url: '/integrationsources/add-connection',
        //     icon: icons.ConfirmationNumberOutlinedIcon,
        //     breadcrumbs: false
        // }
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
