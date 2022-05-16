import React from 'react';
import { Link } from 'react-router-dom';
import './MenuTop.scss';
import LogoPag from '../../../assets/images/png/loguito.png';
import { Button } from 'antd';
import {    
        MenuUnfoldOutlined as IconMenuAbrir, 
        MenuFoldOutlined as IconoMenuCerrar,
        PoweroffOutlined as PowerOff,

    } from '@ant-design/icons';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <Link to={'/admin'}>        
                    <img
                        className='menu-top__left-logo'
                        src={LogoPag}
                        alt='Logo Turnalia'
                    />
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    { menuCollapsed ?
                       <IconMenuAbrir/> :
                       <IconoMenuCerrar/>
                    }
                </Button>
            </div>
            <div className="menu-top__right" onClick={() => console.log("porweroff")}>
                <Button type='link'>
                    <PowerOff />
                </Button>
            </div>
        </div>
    );
}