import React from 'react';
import './groupbylist.scss';
import Divider from '@material-ui/core/Divider';

function Groupbylist(){

    return (
        <div id="groupbylist">
            <span
            style = {{padding:12,paddingLeft:0}}
            >
                CUSTOMER
            </span>
            <div
            style = {{padding:12,paddingLeft:0}}
            >
                BY OWNER
            </div>
            <div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                All
            </div>
            <div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                Your Conversations
            </div>
            <div
            style = {{padding:12,paddingLeft:0}}
            >
                BY CATEGORY
            </div>
            <div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                General
            </div>
            <div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                Leads
            </div><div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                Reviews
            </div><div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                Tours
            </div>
            <Divider/>
            <div
            style = {{
                padding:12,
                fontSize:15
            }}
            >
                TEAM
            </div>
        </div>
    );
}

export default Groupbylist;