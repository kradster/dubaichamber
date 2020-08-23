import React, { useState } from 'react'
import './Live.scss'
// import logo from '../../Assets/bg.png'
import logo from '../../Assets/white.png'
import poll from '../../Assets/poll.png'
import support from '../../Assets/Support.png'
import send from '../../Assets/send.png'
import { Link } from 'react-router-dom'

const Live = () => {
    const [ShowPolls, setShowPolls] = useState(false);
    const [ShowAsk, setShowAsk] = useState(true)
    return (
        <div className="Live">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <main>
                <section className="speakers">
                    <div className="speaker-area">
dfgndngd
                    </div>
                    <div className="actionsbar">
                        <div className="action">
                            <span>LEAVE</span>
                        </div>
                        <div className="right">
                        <div  className="action right">
                            <span onClick={()=>{setShowPolls(true)}}>Poll</span>
                            {
                                ShowPolls && (
                                    <ActionPopup 
                                    img={poll}
                                    label="Poll"
                                    close={()=>{setShowPolls(false)}}
                                    ><PollsQuestion/>
                                    </ActionPopup>
                                )
                            }
                        </div>
                        <div className="action right">
                            <span onClick={()=>{setShowAsk(true)}}>Ask a question</span>
                            {
                                ShowAsk && (
                            <ActionPopup 
                           img={support}
                           label="Ask a question"
                           close={()=>{setShowAsk(false)}}
                           >
                               <AskQuestion/>
                           </ActionPopup>
                           )}
                        </div>

                        </div>
                    </div>
                </section>
                <section className="chats">
                <div className="chats"></div>
                <div className="input">
                    <input type="text" value="enter msg here"/>
                    <img src={send} alt="" />
                </div>
                </section>
            </main>
            
        </div>
    )
}

export default Live


export const ActionPopup = ({img,label,close,children}) =>{
    return (
        <div className="actionpopup">
                                <div className="poll-nav">
                                    <img src={img} alt=""/>
                                    {label}
                                    <span onClick={close} className="close">&times;</span>
                                </div>
                                {
                                    children
                                }
                            </div>
    )
}

export const PollsQuestion =  ()=>{
    return (
        <div className="PollsQuestion">
                                <div className="question">
                                    Why did you decide to attend this event ? 
                                </div>
                                <ul>
                                    <li>I want to learn new thing</li>
                                    <li>Speaker line-up</li>
                                    <li>Networking opportunities</li>
                                    <li>My boss made me</li>
                                </ul>
                               </div>
    )
}

export const AskQuestion =  ()=>{
    return (
        <div className="AskQuestion">
                                <textarea placeholder="start typing your question here" name="" id="" cols="30" rows="10"></textarea>
                                <button>SUBMIT</button>
                               </div>
    )
}