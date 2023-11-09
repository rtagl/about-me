const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? 'text-white border-b border-primary-500' : 'text-[#ADB7BE]';
	return (
		<span onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white cursor-pointer ${buttonClasses}`}>
				{children}
			</p>
		</span>
	);
};

export default TabButton;
