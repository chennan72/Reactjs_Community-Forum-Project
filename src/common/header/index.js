import React from 'react';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Adition, Button, SearchWrapper} from './style';

const Header = (props) => {
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
                    in={props.focused}
                    classNames="slide"
                >
                    <NavSearch
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                    ></NavSearch>
                </CSSTransition>
                <span
                    className={props.focused ? 'focused iconfont' : 'iconfont'}
                >
                            &#xe62b;
                        </span>
            </SearchWrapper>
        </Nav>
        <Adition>
            <Button className='reg'>Sign in</Button>
            <Button className='write'>
                Write your post
            </Button>
        </Adition>
    </HeaderWrapper>)
}

// class Header extends Component {
//
//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo/>
//                 <Nav>
//                     <NavItem className='left active'>Home</NavItem>
//                     <NavItem className='left'>Download App</NavItem>
//                     <NavItem className='right'>Log in</NavItem>
//                     <NavItem className='right'>Aa</NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             timeout={200}
//                             in={this.props.focused}
//                             classNames="slide"
//                         >
//                             <NavSearch
//                                 className={this.props.focused ? 'focused' : ''}
//                                 onFocus={this.props.handleInputFocus}
//                                 onBlur={this.props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <span
//                             className={this.props.focused ? 'focused iconfont' : 'iconfont'}
//                         >
//                             &#xe62b;
//                         </span>
//                     </SearchWrapper>
//                 </Nav>
//                 <Adition>
//                     <Button className='reg'>Sign in</Button>
//                     <Button className='write'>
//                         Write your post
//                     </Button>
//                 </Adition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
