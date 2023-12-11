import React, { ReactNode, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

type CloseModalFunction = (isOpen: boolean) => void;

interface ModalProps {
	children: ReactNode;
	closeModal: CloseModalFunction;
}

const ModalAnimation = keyframes`
    from{
        transform: scale(0);
    }
    to {
        transform: scale(1);;
    }
`;

const ModalBackground = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(2px);
	user-select: none;

	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	transition: all 0.3s ease;
`;
const ModalContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 2rem;

	position: relative;

	background-color: white;
	border-radius: 5px;
	z-index: 5;
	transition: all 0.3s ease;
	animation: ${ModalAnimation} 0.3s ease forwards;
`;
const ModalCloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;

	border: none;
	background-color: transparent;

	cursor: pointer;
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: black;
		transform: rotate(45deg);
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: black;
		transform: rotate(135deg);
	}
`;

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const handleCloseModal = () => {
		closeModal(false);
	};

	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		// Проверяем, был ли клик выполнен внутри контента окна
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			handleCloseModal();
		}
	};
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleCloseModal();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<React.Fragment>
			<ModalBackground onClick={handleBackgroundClick}>
				<ModalContent ref={modalRef}>
					<ModalCloseButton
						onClick={handleCloseModal}
					></ModalCloseButton>
					{children}
				</ModalContent>
			</ModalBackground>
		</React.Fragment>
	);
};

export default Modal;
