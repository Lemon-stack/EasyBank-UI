import logoWhite from "../assets/icons/logo-white.svg"

import IconFacebook from "../assets/icons/social-media/icon-facebook.jsx"
import IconYoutube from "../assets/icons/social-media/icon-youtube.jsx"
import IconTwitter from "../assets/icons/social-media/icon-twitter.jsx"
import IconPinterest from "../assets/icons/social-media/icon-pinterest.jsx"
import IconInstagram from "../assets/icons/social-media/icon-instagram.jsx"

export default function HomeFooter() {
	return (
		<footer className=" bg-DarkBlue text-white p-12 text-center sm:text-left">
			<div className="mx-auto max-w-[70rem] flex flex-col sm:flex-row justify-between ">
				<div className="flex gap-10 lg:gap-32 flex-col sm:flex-row">
					<div className="flex flex-col justify-between items-center gap-4">
						<img src={logoWhite} alt="" className="max-w-[10rem] sm:max-w-none" />
						<nav>
							<ul className="flex gap-3 sm:gap-4 flex-wrap justify-center">
								<li><a href="https://www.facebook.com" title="Facebok" target="_blank" rel="noopener noreferrer">
									<IconFacebook />
								</a></li>
								<li><a href="https://www.youtube.com" title="Youtube" target="_blank" rel="noopener noreferrer">
									<IconYoutube />
								</a></li>
								<li><a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
									<IconTwitter />
								</a></li>
								<li><a href="https://www.pinterest.com" title="Pinterest" target="_blank" rel="noopener noreferrer">
									<IconPinterest />
								</a></li>
								<li><a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">
									<IconInstagram />
								</a></li>
							</ul>
						</nav>
					</div>
					<nav>
						<ul className="grid xsm:grid-cols-2 gap-4 lg:gap-x-24 mb-6 sm:mb-0">
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">About Us</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">Contact</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">Blog</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">Careers</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">Support</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105 font-light" href="#">Privacy Policy</a></li>
						</ul>
					</nav>
				</div>
				<div className="flex flex-col my-4 sm:my-0 gap-2 sm:items-end">
					<button className="btn-primary max-w-sm mx-auto sm:mx-0">Request Invite</button>
					<small className="opacity-75">© Easybank. All Rights Reserved</small>
				</div>
			</div>
		</footer>
	)
}