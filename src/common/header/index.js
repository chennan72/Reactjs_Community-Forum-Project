import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Adition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component {

    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        HOT
                        <SearchInfoSwitch>
                            other topics?
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        return (<HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download App</NavItem>
                <NavItem className='right'>Log in</NavItem>
                <NavItem className='right'>Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={this.props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={this.props.focused ? 'focused' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span
                        className={this.props.focused ? 'focused iconfont' : 'iconfont'}
                    >
                            &#xe62b;

                </span>
                    {this.getListArea()}
                </SearchWrapper>
            </Nav>
            <Adition>
                <Button className='write'>
                    Write your post
                </Button>
                <Button className='reg'>Sign in</Button>
            </Adition>
        </HeaderWrapper>);
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); //return一個「容器組件」
