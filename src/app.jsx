/*
 * @Author: yuze.xia 
 * @Date: 2018-12-20 16:53:00 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-12-21 01:20:16
 */

import React from 'react';
import ReactDOM from 'react-dom';


import 'font-awesome/css/font-awesome.min.css';

// 引入css文件
import './index.css';
import './index.scss';


ReactDOM.render(
    <div>
        <h1>hello webpack</h1>,
        <i className="fa fa-address-book"></i>
    </div>,
    document.getElementById('app')
)