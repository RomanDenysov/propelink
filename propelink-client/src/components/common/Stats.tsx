import React from "react";
import Flex from "src/assets/styles/Flex";
import StatsData from "src/data/DummyData";
import styled from "styled-components";

const StatsContainer = styled.div`
	height: fit-content;
	position: absolute;
	bottom: -6rem;
	padding: 0 1rem;
`;
const StatItemCard = styled.div`
	width: 8rem;
	height: 10rem;
	margin: auto;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 1rem;
	gap: 1rem;
	border-radius: 5px;
`;
const ItemTitle = styled.h3`
	color: black;
	font-size: 1.2rem;
	font-weight: 600;
	text-align: center;
	line-height: 100%;
`;
const ItemCount = styled.span`
	color: black;
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	line-height: 100%;
`;

const StatItem: React.FC = () => {
	return (
		<>
			{StatsData.StatsData.map((item) => (
				<StatItemCard key={item.id}>
					<ItemTitle>{item.descr}</ItemTitle>
					<ItemCount>{item.counts}</ItemCount>
				</StatItemCard>
			))}
		</>
	);
};

const Stats = () => {
	return (
		<StatsContainer>
			<Flex align="center" justify="center" gap="1rem">
				<StatItem />
			</Flex>
		</StatsContainer>
	);
};

export default Stats;
