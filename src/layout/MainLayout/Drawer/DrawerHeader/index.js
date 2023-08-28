import PropTypes from 'prop-types';
import { Box ,Grid} from '@mui/material'
// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip, Typography } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';
import { createTheme } from '@mui/material/styles';
import logo from 'assets/images/icons/Analytics Model Playground (Copy)/1440px/Feed/download 1.png'
// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open} sx={{ backgroundColor: "#1E87F0" }}>
            <Stack direction="row" spacing={1} alignItems="center" >
             
                <Grid sx={{display:"flex"}}>
                 <img src={logo} alt="logo" />
                 </Grid>
                 <div>
                 <Typography sx={{color:'#FFF'}}>Analytics</Typography>
                 <Typography sx={{mt:'-6px  ',color:'#FFF'}}>Model</Typography>
                 </div>
                {/* <Typography variant="h3">DEMO</Typography> */}
                {/* <Logo /> */}
                {/* <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    target="_blank"
                    clickable
                /> */}
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;
