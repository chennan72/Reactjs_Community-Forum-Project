import React, {Component} from 'react';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        src='https://images.chinatimes.com/newsphoto/2019-08-22/900/20190822003681.jpg'
                        alt='Northeastern University'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;
