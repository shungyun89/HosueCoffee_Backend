import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import HomeNewComponent from './HomeNewComponent';
import HomeActivityComponent from './HomeActivityComponent';

function homeNewActivity() {

   
        
    
    return (
        <div class="aside">
            <HomeNewComponent />
            {/* <div class="new">
                <h1>NEWS</h1>
                <div class="allNew">
                    <div class="new1 row">
                        <h5 class="col">台北店公休公告</h5>
                        <h5 class="newTime col">2022/06/17</h5>
                    </div>
                    <div class="new1 row">
                        <h5 class="col">台中店公休公告</h5>
                        <h5 class="newTime col">2022/06/17</h5>
                    </div>
                    <div class="new1 row">
                        <h5 class="col">台南店公休公告</h5>
                        <h5 class="newTime col">2022/06/17</h5>
                    </div>
                    <div class="new1 row">
                        <h5 class="col">高雄總店公休公告</h5>
                        <h5 class="newTime col">2022/06/17</h5>
                    </div>
                </div>
            </div> */}

            <HomeActivityComponent />
            {/* <div class="activity">
                <h1>ACTIVITY</h1>
                <div class="box1">
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                </div>
            </div> */}
        </div>
    )
}



export default homeNewActivity