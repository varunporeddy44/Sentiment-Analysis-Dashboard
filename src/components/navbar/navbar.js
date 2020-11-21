import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme
            .transitions
            .create([
                "width", "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme
            .transitions
            .create([
                "width", "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    menuButton: {
        marginRight: 36
    },
    space: {
        marginRight: theme.spacing(2)
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme
            .transitions
            .create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    drawerClose: {
        transition: theme
            .transitions
            .create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [
            theme
                .breakpoints
                .up("sm")
        ]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center"
    },
    content: {
        flexGrow: 1
    }
}));

export default function EdgeDrawer(props) {
    const classes = useStyles();
    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar
                variant="elevation"
                elevation={3}
                position="relative"
                style={{
                background:"black",
                width: "100%"
            }}>
                <div style={{
                    display: "flex"
                }}>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        backgroundColor:"black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20
                    }}
                    >Inbox
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        backgroundColor:"#fb9902",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20
                    }}
                    >Dashboard
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        backgroundColor:"black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}
                    >Reviews
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                        fontSize:20,
                    }}
                    >Feedback
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}
                    >Leaderboard
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}>Insights
                    <ExpandMoreIcon/>
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}>Manage
                    <ExpandMoreIcon/>
                    </Typography>
                    <Typography
                    style={{
                        color: "black",
                        textDecoration: "none",
                        marginLeft:"auto",
                        marginRight:7,
                        backgroundColor:"#e6e6e6",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                        fontSize:20,
                    }}
                    >
                        <EditIcon fontSize="large"/>
                        New Messages
                    </Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginRight:"7px",
                        marginLeft:"7px",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}>Updates</Typography>
                    <Typography
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginRight:7,
                        marginLeft:"7px",
                        height: "54%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                        padding: 12,
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        overflowWrap: "normal",
                         
                        fontSize:20,
                    }}>Help</Typography>
                    <IconButton
                        style={{
                        marginLeft: "7px",
                        marginRight: 14,
                        color:"white",
                    }}
                        edge="end"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        >
                        <ExitToAppIcon fontSize="large"/>
                    </IconButton>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>User ID</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </AppBar>
        </div>
    );
}
