import React, {useState} from "react";

const ComImageSlider = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const renderImages = () => {
		const goToPrevious = () => {
			const isFirstImage = currentIndex === 0
			const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
			setCurrentIndex(newIndex)
		}

		const goToNext = () => {
			const isLastImage = currentIndex === images.length - 1
			const newIndex = isLastImage ? 0 : currentIndex + 1
			setCurrentIndex(newIndex)
		}

		return (
			<div className="flex flex-row items-center p-[10px]">
				<div className="btn btn-circle btn-outline" onClick={goToPrevious}>❮</div>
				<picture>
					<source srcSet={images[currentIndex]} type="image/webp" />
					<img src={images[currentIndex]} className="p-[10px]" alt="Image"/>
				</picture>
				<div className="btn btn-circle btn-outline" onClick={goToNext}>❯</div>
			</div>
		)
	}

	return (
		<div className="m-auto">{images && renderImages()}</div>
	)
};

export default ComImageSlider;
