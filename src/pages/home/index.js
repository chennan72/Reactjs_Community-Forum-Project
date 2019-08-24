import React, {Component} from 'react';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import axios from 'axios';
import {connect} from "react-redux";

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

    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action);
        }).catch(() => {
            console.log('Error');
        })
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    }
});

export default connect(null, mapDispatch)(Home);
