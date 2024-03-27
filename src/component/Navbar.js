import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  return (
    <div>
      {/* 로그인 */}
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      {/* 로고 */}
      <div className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg'
        />
      </div>
      {/* 메뉴 */}
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text'></input>
        </div>
      </div>
    </div>
  );
};
