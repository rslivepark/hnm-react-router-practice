import React from 'react';
import App from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Login from '../page/Login';
import { useNavigate } from 'react-router-dom';



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

  const navigate = useNavigate();
  
	const goToLogin = () => {
		navigate('/login');
	};

	const search = (event) => {
		if (event.key === 'Enter') {
			// 입력한 검색어를 읽어와서
			let keyword = event.target.value
			
			// url을 바꿔준다
			navigate(`/?q=${keyword}`);
			
		}
	}
  return (
		<div>
			{/* 로그인 */}
			<div>
				<div className="login-button" onClick={goToLogin}>
					<FontAwesomeIcon icon={faUser} />
					<div>로그인</div>
				</div>
			</div>
			{/* 로고 */}
			<div className="nav-section">
				<img
					width={100}
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
				/>
			</div>
			{/* 메뉴 */}
			<div className="menu-area">
				<ul className="menu-list">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
				{/* 검색어 입력 */}
				<div className="search-box">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input type="text" onKeyDown={(event)=>search(event)}></input>
				</div>
			</div>
		</div>
	);
};
