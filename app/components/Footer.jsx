import Image from 'next/image';
import Logo from '../../public/images/cloud-logo.png';

const Footer = () => {
	return (
		<footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
			<div className="flex container mx-auto justify-between">
				<Image src={Logo} height={100} alt="logo" />
			</div>
		</footer>
	);
};

export default Footer;
