import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "assets/Image/msPark.jpg";

const SquareImg = styled.img`
	width: 600px;
	object-fit: scale-down;
	margin-right: 160px;
	@media only screen and (max-width: 480px) {
		margin: 40px auto;
		width: 70vw;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		margin: 40px auto;
		width: 70vw;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		width: 40vw;
		margin-right: 60px;
	}
`;

const MumoContainer = styled.section`
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		margin: 0px auto;
	}
`;

const TextContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: 480px) {
		height: 100px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		height: 200px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		height: 300px;
	}
`;

const Point = styled.strong`
	color: ${(props) => props.theme.pointColor};
`;

const MumoDiscription = styled.p`
	font-size: 24px;
	font-weight: 200;
	@media only screen and (max-width: 480px) {
		font-size: 16px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		font-size: 22px;
	}
`;

const MumoTitle = styled.div`
	font-size: 40px;
	font-weight: 600;
	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 24px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		font-size: 32px;
	}
`;

const Mumo = () => {
	return (
		<MumoContainer>
			<div>
				<SquareImg src={Image} alt="just picture"></SquareImg>
			</div>
			<div>
				<TextContainer>
					<MumoTitle>
						"<Point>????????? ??????</Point>??? ???????????????"
					</MumoTitle>
					<MumoDiscription>
						<Point>?????????</Point>??? 10????????? ??????
						<br /> <Point>??????</Point>????????? ????????? ????????????
						<br />
						????????? ?????? ????????? ????????? ?????? ?????? ????????? ?????????.
					</MumoDiscription>
				</TextContainer>
			</div>
		</MumoContainer>
	);
};

export default Mumo;
