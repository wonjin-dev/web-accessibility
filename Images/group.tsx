type ImageType = {
	id: string;
	src: string;
	desc: string;
};

interface ImageGroupProps {
	group: {
		id: string;
		node: ReactNode;
	};
	imgs: ImageType[];
}

const ImageGroup: FC<ImageGroupProps> = ({ group, imgs }) => {
	return (
		<figure role='group' aria-labelledby={group.id}>
			<figcaption id={group.id}>{group.node}</figcaption>

			{imgs.map((img) => {
				return (
					<figure role='group' aria-labelledby={img.id}>
						<figcaption id={img.id}>
							<img src={img.src} alt={img.desc} />
						</figcaption>
					</figure>
				);
			})}
		</figure>
	);
};

export default ImageGroup;
