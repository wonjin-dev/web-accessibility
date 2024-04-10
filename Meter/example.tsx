interface ProgressBarProps {
	currentProgress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ currentProgress }) => {
	return (
		<Container>
			<Gage
				max={100}
				value={currentProgress}
				aria-valuetext={`it progressed ${currentProgress} percent`}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={currentProgress}
			/>
			<Percent>{`${currentProgress}%`}</Percent>
		</Container>
	);
};

export default ProgressBar;

const Container = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
`;

const Gage = styled.progress`
	width: 100%;
	height: 0.25rem;
	outline: none;
	border: none;
	border-radius: 0.125rem;

	::-webkit-progress-bar {
		border-radius: 0.125rem;
		background-color: grey;
	}

	::-webkit-progress-value {
		border-radius: 0.125rem;
		background: linear-gradient(92deg, #00c7ae, #03b9c9);
		transition: width 0.6s ease;
	}

	::-moz-progress-bar {
		border-radius: 0.125rem;
		background: linear-gradient(92deg, #00c7ae, #03b9c9);
	}
`;

const Percent = styled.span`
	width: 2.6875rem;
	padding-left: auto;
	text-align: end;
	color: #00c7ae;
	font-size: 0.875rem;
	font-weight: 700;
`;
