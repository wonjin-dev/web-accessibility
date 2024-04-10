import AccordionPanel from './panel-example';
import AccordionHeader from './header-example';

interface AccordionItempProps {
	title: string;
	content: string;
	disableCollapse?: boolean;
}

const DUMMY: AccordionItempProps[] = [
	{ title: '제목 1', content: '내용 1' },
	{ title: '제목 2', content: '내용 2', disableCollapse: true },
	{ title: '제목 3', content: '내용 3' },
];

const Accordion: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const accordionHeadersRef = useRef<Array<HTMLButtonElement | null>>([]);

	const toggleAccordion = (index: number) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const focusNextAccordion = (currentIndex: number): void => {
		const nextIndex = currentIndex === null ? 0 : currentIndex + 1;

		if (accordionHeadersRef.current[nextIndex]) {
			accordionHeadersRef.current[nextIndex]?.focus();
		}
	};

	const focusPreviousAccordion = (currentIndex: number): void => {
		console.log('?');

		const previousIndex = currentIndex === null ? 0 : currentIndex - 1;

		console.log('?', currentIndex);

		if (accordionHeadersRef.current[previousIndex]) {
			accordionHeadersRef.current[previousIndex]?.focus();
		}
	};

	const focusFirstAccordion = (): void => {
		if (accordionHeadersRef.current[0]) {
			accordionHeadersRef.current[0]?.focus();
		}
	};

	const focusLastAccordion = (): void => {
		const lastIndex = accordionHeadersRef.current.length - 1;

		if (accordionHeadersRef.current[lastIndex]) {
			accordionHeadersRef.current[lastIndex]?.focus();
		}
	};

	// 키보드 이벤트 관련
	const handleKeyDown = (
		e: KeyboardEvent<HTMLButtonElement>,
		index: number
	) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleAccordion(index);
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			focusNextAccordion(index);
		}

		if (e.key === 'ArrowUp') {
			e.preventDefault();
			focusPreviousAccordion(index);
		}

		if (e.key === 'Home') {
			e.preventDefault();
			focusFirstAccordion();
		}

		if (e.key === 'End') {
			e.preventDefault();
			focusLastAccordion();
		}
	};

	return (
		<div>
			{DUMMY.map((item, index) => (
				<div key={index}>
					<AccordionHeader
						index={index}
						isExpanded={activeIndex === index}
						disableCollapse={item.disableCollapse ?? false}
						header={item.title}
						onKeyDown={(e) => handleKeyDown(e, index)}
						onAccordionHeaderClick={() => toggleAccordion(index)}
					/>
					<AccordionPanel
						index={index}
						isActive={index === activeIndex}
						content={item.content}
						isMoreThanSixNode={DUMMY.length >= 6}
					/>
				</div>
			))}
		</div>
	);
};

export default Accordion;
