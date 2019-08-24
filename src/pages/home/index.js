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
                        src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566637464168&di=38f46390a9dc5dd134c744b4458b5ac1&imgtype=jpg&src=http%3A%2F%2Fjinshiliuxue.net%2Fuploads%2Fimage%2F20170215%2F1487134638.jpg'
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
