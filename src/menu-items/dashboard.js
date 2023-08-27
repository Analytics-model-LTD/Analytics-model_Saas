// assets
import { DashboardOutlined } from '@ant-design/icons';
import { Dashboard } from  'assets/images/icons/Dashboardicon.svg'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
// icons
const icons = {
    SpaceDashboardIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.SpaceDashboardIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
