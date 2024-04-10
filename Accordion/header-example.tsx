interface AccordionHeaderProps {
	index: number;
	disableCollapse: boolean;
	isExpanded: boolean;
	onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
	onAccordionHeaderClick: () => void;
	header: ReactNode;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({
	index,
	disableCollapse,
	isExpanded,
	header,
	onKeyDown,
	onAccordionHeaderClick,
}) => {
	return (
		<header>
			<button
				className='accordion-header'
				aria-controls={`panel${index}`}
				aria-expanded={isExpanded}
				aria-disabled={disableCollapse}
				onKeyDown={onKeyDown}
				onClick={onAccordionHeaderClick}
			>
				{header}
			</button>
		</header>
	);
};

export default AccordionHeader;
