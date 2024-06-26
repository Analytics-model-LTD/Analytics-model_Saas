
import React from 'react'
import { Box, Grid, Paper, Stack, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Button, Card } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    customDivider: {
        marginTop: `${theme.spacing(6)} !important`, // Adjust the padding value as needed
        marginBottom: `${theme.spacing(4)} !important`, // Adjust the padding value as needed
    },
}));

const Plans = () => {

    const classes = useStyles();

    return <Box>

        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper elevation={0} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ color: '#17171B)' }}>
          Choose your Premium plan 
          </Typography>
        </Paper>
      </Grid>
            <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center">
                <Card elevation={0} sx={{ textAlign: "center" }}>
                    <Box sx={{ p: 2, background: '#03045e ',  }}>
                        <Typography variant="h3" sx={{color:'white'}}>Beginner</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Stack spacing={2}>
                            <List disablePadding >
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    30GB
                                                </Typography>
                                                {" Storage"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    15
                                                </Typography>
                                                {" Email Addresses"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    5
                                                </Typography>
                                                {" Domains"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    First-Class
                                                </Typography>
                                                {" Support"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                            <Divider className={classes.customDivider} />
                            <Box>
                                <Typography variant="h2">1,999$</Typography>
                                <Typography variant="h6">per month</Typography>
                            </Box>
                            <Button
                                disableElevation
                                fullWidth
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Select
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card elevation={0} sx={{ textAlign: "center" }}>
                    <Box sx={{ p: 2, background: '#1E87F0' }}>
                        <Typography variant="h3">Intermediate</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Stack spacing={2}>
                            <List disablePadding >
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    75GB
                                                </Typography>
                                                {" Storage"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    25
                                                </Typography>
                                                {" Email Addresses"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    15
                                                </Typography>
                                                {" Domains"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    First-Class
                                                </Typography>
                                                {" Support"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                            <Divider className={classes.customDivider} />
                            <Box>
                                <Typography variant="h2">3,999$</Typography>
                                <Typography variant="h6">per month</Typography>
                            </Box>
                            <Button
                                disableElevation
                                fullWidth
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Select
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card elevation={0} sx={{ textAlign: "center" }}>
                    <Box sx={{ p: 2, background: '#03045e ', }}>
                        <Typography variant="h3" sx={{color:'white'}}>Advanced</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Stack spacing={2}>
                            <List disablePadding >
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    100GB
                                                </Typography>
                                                {" Storage"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    50
                                                </Typography>
                                                {" Email Addresses"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    25
                                                </Typography>
                                                {" Domains"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ textAlign: "center" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    First-Class
                                                </Typography>
                                                {" Support"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                            <Divider className={classes.customDivider} />
                            <Box>
                                <Typography variant="h2">5,999$ </Typography>
                                <Typography variant="h6">per month</Typography>
                            </Box>
                            <Button
                                disableElevation
                                fullWidth
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                               Select
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
        </Grid>

    </Box>

}

export default Plans