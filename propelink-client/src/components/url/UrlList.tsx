import React, { useState } from "react";
import Flex from "src/assets/styles/Flex";
import Modal from "src/assets/styles/Modal";
import StyledButton from "src/assets/styles/StyledButton";
import HomeData from "src/data/DummyData";
import styled from "styled-components";

interface UrlItemProps {
	item?: {
		id: number;
		short: string;
		link: string;
		clicks: number;
	};
}

const ItemForm = styled.form`
	width: 100%;
	height: 100%;
`;
const ItemTitle = styled.h2`
	font-size: 1rem;
	font-weight: 700;
	line-height: 100%;
	border: 2px solid black;
	border-radius: 5px;
	padding: 0.5rem;
	width: 100%;
	min-height: 3rem;
	padding: 0.5rem;
	font-size: 1.2rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ItemBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;
const ItemDescr = styled.input`
	font-size: 1rem;
	font-weight: 500;
	line-height: 100%;
	min-height: 3rem;
	padding: 0.5rem;
	font-size: 1.2rem;
	border-radius: 5px;
`;
const ItemCount = styled.span`
	border: 2px solid black;
	font-size: 1rem;
	font-weight: 700;
	line-height: 100%;
	width: 100%;
	min-height: 3rem;
	padding: 0.5rem;
	font-size: 1.2rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const UrlItem: React.FC<UrlItemProps> = ({ item }) => {
	return (
		<ItemForm key={item?.id}>
			<Flex direction="column" align="center" justify="center" gap="2rem">
				<ItemTitle>{item?.short}</ItemTitle>
				<ItemBox>
					<ItemDescr placeholder={item?.link} />
					<StyledButton special>Edit</StyledButton>
				</ItemBox>
				<ItemCount>Clicks on link: {item?.clicks}</ItemCount>
			</Flex>
		</ItemForm>
	);
};

const UrlList = () => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const handleOpenModal = (item: any) => {
		setSelectedItem(item);
		setOpenModal(true);
	};
	return (
		<>
			{HomeData.HomeData.map((item: any) => (
				<>
					{openModal && selectedItem ? (
						<Modal closeModal={() => setOpenModal(false)}>
							<UrlItem item={selectedItem} />
						</Modal>
					) : (
						<button
							onClick={() => {
								handleOpenModal(item);
							}}
						>
							{item.short}
						</button>
					)}
				</>
			))}
		</>
	);
};

export default UrlList;
