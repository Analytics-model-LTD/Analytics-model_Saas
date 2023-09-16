import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AuthGuard from 'guard/AuthGuards';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Plans = Loadable(lazy(() => import('pages/plans')));
const Billing = Loadable(lazy(() => import('pages/billing')));
const Myfeed = Loadable(lazy(() => import('pages/myfeed')));
const Insight = Loadable(lazy(()=> import('pages/insight')))
const Integrationsources = Loadable(lazy(() => import('pages/integrationsource')));
const Integrationsourcestable = Loadable(lazy(() => import('pages/integrationsourcetable')));
const Addintegrationsource = Loadable(lazy(() => import('pages/Addintegrationsource')));
const Verification = Loadable(lazy(() => import('pages/verfication')));

const Requests = Loadable(lazy(() => import('pages/requests')));
const Templates = Loadable(lazy(() => import('pages/templates')));
const TemplateForm = Loadable(lazy(() => import('pages/template-form/')));
const RequestDetail = Loadable(lazy(() => import('pages/request-detail')));
const UserForm = Loadable(lazy(() => import('pages/user-detail/')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <AuthGuard component={<MainLayout />} />,
    children: [
        {
            path: '/',
            element: <AuthGuard component={<DashboardDefault />} />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <AuthGuard component={<DashboardDefault />} />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'plans',
            element: <AuthGuard component={<Plans />} />
        },
        {
            path: 'billing',
            element: <AuthGuard component={<Billing />} />
        },
        {
            path: 'integrationsources',
            element: <AuthGuard component={<Integrationsources />} />
        },
        {
            path: 'integrationsources/table',
            element: <AuthGuard component={<Integrationsourcestable />} />
        },

        {
            path: 'integrationsources/integrationsources/add-connection',
            element: <AuthGuard component={<Addintegrationsource />} />
        },
        {
            path: 'requests',
            element: <AuthGuard component={<Requests />} />
        },
        {
            path: 'requests/request-detail/:id',
            element: <AuthGuard component={RequestDetail} />
        },
        {
            path: 'templates',
            element: <AuthGuard component={<Templates />} />
        },
        {
            path: 'templates/add',
            element: <AuthGuard component={<TemplateForm />} />
        },
        {
            path: 'users/user-detail/',
            element: <AuthGuard component={<UserForm />} />
        },
        {
            path: 'myfeed',
            element: <AuthGuard component={<Myfeed />} />
        },
        {
            path: 'insight',
            element: <AuthGuard component={<Insight />} />
        }
    ]
};

export default MainRoutes;
