import React from 'react';
import logo from './logo.svg';
import { Button, setHotkeysDialogProps } from "@blueprintjs/core";
import './App.css';
import JapanMap from './JapanMap'

function Card(props) {

    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);

    return (
        <div>
            <div className="tweet" id="card">
                <div className="body-container">
                    <div className="status-display">
                        <span className="display-name">{props.displayName}</span>
                    </div>
                    <div className="content">{props.content}</div>
                    <div className="status-action">
                        <span onClick={toggleLike}>{liked ? '🤟' : '♡'}</span>
                    </div>

                    <div>
                        <JapanMap clicked={props.clicked}/> 
                    </div>
                    

                    <div id="atashi-buttons"> {/* これアタシだボタン */}
                        <label>
                            <input type="radio" name="radio-1" required="" />
                            <span class="button">自分のこと？</span>
                        </label>
                        <label>
                            <input type="radio" name="radio-1" />
                            <span class="button">知り合いにいるかも？</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Card;
