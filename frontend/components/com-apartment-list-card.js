import React, {useState} from "react";

const ComApartmentListCard = ({ propertyAddress, propertyPrice, propertySize, propertyRoomNumber, propertyImages }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	
	const renderImages = () => {
		const goToPrevious = () => {
			const isFirstImage = currentIndex === 0
			const newIndex = isFirstImage ? propertyImages.length - 1 : currentIndex - 1
			setCurrentIndex(newIndex)
		}
		
		const goToNext = () => {
			const isLastImage = currentIndex === propertyImages.length - 1
			const newIndex = isLastImage ? 0 : currentIndex + 1
			setCurrentIndex(newIndex)
		}
		
		return (
			<div className="flex flex-row items-center p-[10px]">
				<div className="btn btn-circle" onClick={goToPrevious}>❮</div>
				<picture>
					<source srcSet={propertyImages[currentIndex]} type="image/webp" />
					<img src={propertyImages[currentIndex]} className="p-[10px]" alt="Apartment Image"/>
				</picture>
				<div className="btn btn-circle" onClick={goToNext}>❯</div>
			</div>
		)
	}

	return (
		<div className="apartment-card flex flex-row rounded-[16px] bg-[#F2F2F2]">
			<div className="w-1/2">{propertyImages && renderImages()}</div>
			<div className="w-1/2">
				<ul className="card-text-section p-[20px] h-full">
					<li className="pb-[10px]">{propertyAddress}</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<picture>
								<source srcSet="" type="image/webp" />
								<img src="" className="object-contain h-[24px] w-[24px]" alt="Price Image"/>
							</picture>
							<div className="ml-[10px]">{propertyPrice}</div>
						</div>
					</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<picture>
								<source srcSet="" type="image/webp" />
								<img src="" className="object-contain h-[24px] w-[24px]" alt="Size Image"/>
							</picture>
							<div className="ml-[10px]">{propertySize}</div>
						</div>
					</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<picture>
								<source srcSet="" type="image/webp" />
								<img src="" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
							</picture>
							<div className="ml-[10px]">{propertyRoomNumber}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default ComApartmentListCard;
