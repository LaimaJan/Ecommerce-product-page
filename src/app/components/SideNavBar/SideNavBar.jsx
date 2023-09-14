import PropTypes from 'prop-types';
import './SideNavBar.css';

export default function SideNavBar({ toggleSideNav, closeSideNav }) {
	const openSideNav = toggleSideNav;

	const handleCloseClick = () => {
		closeSideNav();
	};
	return (
		<div className={`sidenav-container ${openSideNav ? 'show' : ''}`}>
			<div className={`sidenav ${openSideNav ? 'show' : ''}`}>
				<button className="close-button" onClick={handleCloseClick}>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#69707D"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<div className="navigation-menu">
					<ul>
						<li>
							<a href="#">Collections</a>
						</li>
						<li>
							<a href="#">Men</a>
						</li>
						<li>
							<a href="#">Women</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

SideNavBar.propTypes = {
	toggleSideNav: PropTypes.func.isRequired,
	closeSideNav: PropTypes.func.isRequired,
};
