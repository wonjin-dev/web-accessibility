interface AccordionPanelProps {
	index: number;
	isActive: boolean;
	content: ReactNode;
	isMoreThanSixNode: boolean;
}

const AccordionPanel: FC<AccordionPanelProps> = ({
	index,
	isActive,
	content,
	isMoreThanSixNode,
}) => {
	return (
		<div
			id={`panel${index}`}
			role={isMoreThanSixNode ? '' : 'region'}
			aria-labelledby={`heading${index}`}
			style={{
				display: isActive ? 'block' : 'none',
			}}
		>
			{content}
		</div>
	);
};

export default AccordionPanel;
