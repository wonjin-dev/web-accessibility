/** CheckBox */
interface CheckBoxProps {
	name: string;
	option: string;
	isChecked: boolean;
	onCheckBoxClick: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({
	name,
	option,
	isChecked,
	onCheckBoxClick,
}) => {
	return (
		<label htmlFor={name} onClick={onCheckBoxClick}>
			<input
				type='checkbox'
				id={name}
				checked={isChecked}
				onChange={onCheckBoxClick}
			/>
			<p>{option}</p>
		</label>
	);
};

/** Field using CheckBox */
interface CheckBoxFieldProps {
	title: string;
	options: string[];
}

const CheckBoxField: FC<CheckBoxFieldProps> = ({ options, title }) => {
	const [test, setTest] = useState<boolean>(false);

	return (
		<fieldset>
			<legend>{title}</legend>
			{options.map((option, i) => {
				return (
					<CheckBox
						key={i}
						name={`${title}-${option}`}
						option={option}
						isChecked={test}
						onCheckBoxClick={() => setTest(!test)}
					/>
				);
			})}
		</fieldset>
	);
};
