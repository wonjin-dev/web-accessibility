interface ImageButtonProps {
	img: string;
	role: string;
	onClick: () => void;
}

const ImageButton: FC<ImageButtonProps> = ({ img, role, onClick }) => {
	return <input type='image' src={img} alt={role} onClick={onClick} />;
};

// const ImageButton: FC<ImageButtonProps> = ({img, role, onClick}) => {
//   return (
//     <button onClick={onClick}>
//       <img src={img} alt={role} />
//     </button>
//   );
// };

export default ImageButton;
