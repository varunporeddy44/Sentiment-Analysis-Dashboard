import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ChatShell from "../containers/shell/ChatShell";
function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`dashboard-tabpanel-${index}`}
            aria-labelledby={`dashboard-tab-${index}`}
            {...other}>
            {value === index && (
                <Box>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `dashboard-tab-${index}`, "aria-controls": `dashboard-tabpanel-${index}`};
}
const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor:"black"
    },
    backgroundColor: {
        color:"whitesmoke"
    },
    root: {
        flexGrow: 1,
        width: "96%",
        backgroundColor: theme.palette.background.paper,
           '& .MuiBox-root': {
      padding: '0px !important'
    },
    '& .MuiTabs-root': {
      marginLeft: "0px !important",
      minHeight: "28px !important"
    },  
    '& .MuiTab-root': {
      minHeight: "25px !important"
    },
    '& .PrivateTabIndicator-root-14': {
      bottom: "0px !important"
    }
       },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [value,
        setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                 style={{
                    backgroundColor:'#F5F5F5'
            }}
                value={value}
                onChange={handleChange}
                classes={{
                indicator: classes.indicator,
            }}
                variant="scrollable"
                scrollButtons="auto">
                <Tab
                    style={{
                    padding: 0,
                   
                }}
                    {...a11yProps(0)}/>
            </Tabs>
            <TabPanel
                value={value}
                index={0}
                style={{
                padding: 0,
                margin: 0
            }}>
                <ChatShell/>
            </TabPanel>
        </div>
    );
}