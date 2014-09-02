API.chatLog('Enabled [BetterPlug]!', true);

    var autoWoot = true;
    var autoMeh = false;
    var afk = false;
    
    API.on(API.CHAT_COMMAND, useCommand);
    API.on(API.CHAT, useChat);

    API.on(API.CHAT, doActions);
    API.on(API.USER_SKIP, doActions);
    API.on(API.USER_JOIN, doActions);
    API.on(API.USER_LEAVE, doActions);
    API.on(API.VOTE_UPDATE, doActions);
    API.on(API.GRAB_UPDATE, doActions);
    API.on(API.ROOM_SCORE_UPDATE, doActions);
    API.on(API.DJ_UPDATE, doActions);
    API.on(API.MOD_SKIP, doActions);
    API.on(API.WAIT_LIST_UPDATE, doActions);
    API.on(API.CHAT_COMMAND, doActions);
    API.on(API.HISTORY_UPDATE, doActions);
    API.on(API.ADVANCE, doActions);

    function useCommand(value){
        if(value === '/help'){
            API.chatLog('Available Commands:', false);
            API.chatLog('/autowoot - Enable/Disable AutoWoot', false);
            API.chatLog('/automeh - Enable/Disable AutoMeh', false);
            API.chatLog('/afk - Enable/Disable AFK Mode (WIP)', false);
        }else if(value === '/autowoot'){
            if(autoWoot === true){
                API.chatLog('[BetterPlug] Disabled AutoWoot!', false);
                autoWoot = false;
                doActions();
            }else{
                if(autoMeh === true){
                    API.chatLog('Disabled AutoMeh - Cannot run AutoWoot & AutoMeh at same time!', true);
                    autoMeh = false;
                }
                API.chatLog('[BetterPlug] Enabled AutoWoot!', false);
                autoWoot = true;
                doActions();
            }
        }else if(value === '/automeh'){
            if(autoMeh === true){
                API.chatLog('[BetterPlug] Disabled AutoMeh!', false);
                autoMeh = false;
                doActions();
            }else{
                if(autoWoot === true){
                    API.chatLog('Disabled AutoWoot - Cannot run AutoWoot & AutoMeh at same time!', true);
                    autoWoot = false;
                }
                API.chatLog('[BetterPlug] Enabled AutoMeh!', false);
                autoMeh = true;
                doActions();
            }
        }else if(value === '/afk'){
            if(afk === false){
                API.chatLog('You are no longer AFK!', false);
            }else{
                API.chatLog('You are now AFK!', false);
            }
        }
    }

    function doActions(){
        if(autoWoot === true){
            $("#woot").click();
        }else if(autoMeh === true){
            $("#meh").click();
        }else{
            API.chatLog('[BetterPlug] Warning: No AutoWoot OR AutoMeh enabled!', true);
        }
    }
 
    function useChat(chat) {
        if(chat.type === 'mention'){

        }
    }
