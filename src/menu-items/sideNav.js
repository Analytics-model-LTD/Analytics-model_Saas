// assets
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FeedIcon from '@mui/icons-material/Feed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Myconnection  from '../assets/images/icons/myconnectionimg.svg';
import newinsight from '../assets/images/icons/newinsight.svg'
import myfeed from '../assets/images/icons/myfeed.svg';
import intigrationtable from '../assets/images/icons/integrationtable.svg';
import setting from '../assets/images/icons/setting.svg';
import billing from '../assets/images/icons/biling.svg'
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
            id: 'newInsight',
            title: 'New Insight',
            type: 'item',
            url: '/insight',
            icon: newinsight,
            breadcrumbs: false
        },
        {
            id: 'myfeed',
            title: 'Feed',
            type: 'item',
            url: '/myfeed',
            icon: myfeed,
            breadcrumbs: false
        },

        {
            id: 'integrationsourcestable',
            title: 'Connections',
            type: 'item',
            url: '/integrationsources',
            icon: Myconnection,
            breadcrumbs: false
        },
        {
            id: 'integrationsources',
            title: 'Tracking Metrics',
            type: 'item',
            url: '/integrationsources/table',
            icon: intigrationtable,
            breadcrumbs: false
        },
        {
            id: 'plans',
            title: 'Plans',
            type: 'item',
            url: '/plans',
            icon: intigrationtable,
            //url: '/plans',
            // icon: intigrationtable,
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
            // url: '/myfeed',
           // url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
          //  url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'myinsight',
            // title: 'My insight',
            type: 'item',
            // url: '/myfeed',
            //url: '/myfeed',
            // icon: icons.ConfirmationNumberOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/users/user-detail/',
            icon: setting,
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: billing,
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
