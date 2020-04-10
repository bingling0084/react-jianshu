import React, { Component, createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper,
    Logo, Nav, NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper, 
    SearchInfo, 
    SearchInfoTitle,
    SearchInfoToggle,
    SearchInfoItem
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';



class Header extends Component {
    constructor(props) {
        super(props);
        this.spinIcon = createRef();
    }
 
    render() {
        const { 
            focused, 
            mouseIn,
            list, 
            handleInputFocus, 
            handleInputBlur, 
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const pageList = [];
        const jsList = list.toJS();
        const getListArea = () => {
            if((focused || mouseIn) && jsList.length) {
                for (let i=page*10; i<(page+1)*10 && i<jsList.length; i++) {
                    pageList.push(
                        <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                    );
                }
                return (
                    <SearchInfo
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <SearchInfoTitle>热门搜索
                            <SearchInfoToggle
                                onClick={() => {handleChangePage(page, totalPage, this.spinIcon.current)}}
                            >
                                <i ref={this.spinIcon} className='iconfont spin'>&#xe870;</i>
                                换一批
                            </SearchInfoToggle>
                        </SearchInfoTitle>
                        <div>{pageList}</div>
                    </SearchInfo>
                )
            }
            return null;
        }
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>
                        <a href='/'><i className='iconfont'>&#xe632;</i></a>
                    </NavItem>
                    <NavItem className='left'>
                        <i className='iconfont'>&#xe6db;</i>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right logo'></NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe61e;</i>
                        { getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='write'>
                        <i className='iconfont'>&#xe60e;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            !list.size && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(page < totalPage - 1) {
                dispatch(actionCreators.changePage(page+1));
            }else
                dispatch(actionCreators.changePage(0));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);