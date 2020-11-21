import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { conversationChanged, newMessageAdded, conversationDeleted, conversationsRequested } from '../../store/actions';
import ConversationSearch from '../../components/conversation/conversation-search/ConversationSearch';
import NoConversations from '../../components/conversation/no-conversations/NoConversations';
import ConversationList from '../../components/conversation/conversation-list/ConversationList';
import NewConversation from '../../components/conversation/new-conversation/NewConversation';
import ChatTitle from '../../components/chat-title/ChatTitle';
import MessageList from '../message/MessageList';
import ChatForm from '../../components/chat-form/ChatForm';
import Groupbylist from '../../components/groupbylist/groupbylist'

import './ChatShell.scss';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'95vh',
    },
  }));
  
  
const ChatShell = ({ 
    conversations, 
    selectedConversation, 
    conversationChanged,
    onMessageSubmitted,
    onDeleteConversation,
    loadConversations
}) => {
    useEffect(() => {
        loadConversations();
    }, [loadConversations]);

    let conversationContent = (
        <>
            <NoConversations></NoConversations>
        </>
    );

    if (conversations.length > 0) {
        conversationContent = (
            <>
                <MessageList conversationId={selectedConversation.id} />
            </>
        );
    }
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container item xs={12}>
                <React.Fragment>
                    <Grid item xs>
                        <Paper
                        style={{backgroundColor:"#e6e6e6"}}
                        className={classes.paper}>
                            <Groupbylist/>
                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        <div id="chat-container">
                            <ConversationSearch conversations={conversations} />
                            <ConversationList
                                onConversationItemSelected={conversationChanged}
                                conversations={conversations}
                                selectedConversation={selectedConversation} />
                            <NewConversation />
                            <ChatTitle 
                                selectedConversation={selectedConversation}
                                onDeleteConversation={onDeleteConversation} />
                            {conversationContent}
                            <ChatForm 
                                selectedConversation={selectedConversation}
                                onMessageSubmitted={onMessageSubmitted} />
                        </div>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        conversations: state.conversationState.conversations,
        selectedConversation: state.conversationState.selectedConversation
    };
};
  
const mapDispatchToProps = dispatch => ({
    conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
    onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText)); },
    onDeleteConversation: () => { dispatch(conversationDeleted()); },
    loadConversations: () => { dispatch(conversationsRequested())}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);