import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

function Call() {

    const {roomId} = useParams();

    const myMeeting = async(element) => {

        const appID = 1364501568;
        const serverSecret = "e4152b8ffd3c915a2cb17e1b5b29bfd2";
    
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Yugal Yadav");
    
        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
            sharedLinks:[
                {
                    name:"copy link",
                    url:`http://localhost:3000/call/${roomId}`
                }
            ]
        })
    }
   

  return (
    <div ref={myMeeting}></div>
  )
}

export default Call