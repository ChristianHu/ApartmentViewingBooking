import React, {useState} from "react";
import Image from "next/image"

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
				<div className="btn btn-circle btn-outline" onClick={goToPrevious}>❮</div>
				<picture>
					<source srcSet={propertyImages[currentIndex]} type="image/webp" />
					<img src={propertyImages[currentIndex]} className="p-[10px]" alt="Apartment Image"/>
				</picture>
				<div className="btn btn-circle btn-outline" onClick={goToNext}>❯</div>
			</div>
		)
	}

	return (
		<div className="apartment-card flex flex-col md:flex-row rounded-[16px] bg-[#F2F2F2]">
			<div className="m-auto h-1/2 md:w-1/2">{propertyImages && renderImages()}</div>
			<div className="h-1/2 md:w-1/2">
				<ul className="card-text-section p-[20px] h-full">
					<li className="pb-[10px] text-lg font-bold">{propertyAddress}</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<Image width="24" height="24" src="/icon_price.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
							<div className="ml-[10px] font-semibold">{propertyPrice}</div>
						</div>
					</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<Image width="24" height="24" src="/icon_size.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
							<div className="ml-[10px]">{propertySize}</div>
						</div>
					</li>
					<li>
						<div className="flex flex-row pb-[5px]">
							<Image width="24" height="24" src="/icon_rooms.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
							<div className="ml-[10px]">{propertyRoomNumber}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default ComApartmentListCard;
