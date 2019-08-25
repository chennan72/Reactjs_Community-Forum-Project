import React, {Component} from 'react';
import {Content, DetailWrapper, Header} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store';

class Detail extends Component {

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(Detail);
