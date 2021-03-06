import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const QuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const TitleText = styled.strong`
	color: ${(props) => props.theme.textColor};
	font-size: 2vw;
	margin: 120px 0;

	@media only screen and (max-width: 480px) {
		font-size: 32px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 28px;
	}
`;

const Question = styled.div`
	padding: 0px 24px;
	width: 50vw;
	height: 64px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.pointColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 24px;
	color: ${(props) => props.theme.textColor};
	margin-bottom: 8px;
	@media only screen and (max-width: 480px) {
		width: 80vw;
		height: 40px;
		border-radius: 12px;
		font-size: 18px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		width: 60vw;
		height: 52px;
		border-radius: 16px;
		font-size: 20px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1500px) {
		width: 60vw;
		height: 52px;
		border-radius: 16px;
		font-size: 16px;
	}
`;
const Answer = styled.div`
	padding: 0px 24px;
	width: 50vw;
	height: 80px;
	border-radius: 20px;
	background-color: #353535;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 20px;
	color: ${(props) => props.theme.pointColor};
	margin-bottom: 32px;
	@media only screen and (max-width: 480px) {
		width: 80vw;
		height: 140px;
		border-radius: 12px;
		font-size: 16px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		width: 60vw;
		height: 170px;
		border-radius: 16px;
		font-size: 16px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1500px) {
		width: 60vw;
		height: 100px;
		border-radius: 16px;
		font-size: 16px;
	}
`;
const QnA = () => {
	return (
		<section>
			<QuestionContainer>
				<TitleText>?????? ?????? ??????</TitleText>

				<Question>
					<strong>Q : ???????????? ???????????? ????????????????</strong>
				</Question>
				<div>
					<Answer>
						<strong>
							A : ?????? ?????? '????????? ?????? ???????????????'?????????. <br /> Just????????????
							???????????? ?????? ????????? ?????? ??????????????? ????????? ???????????? ????????? ??????
							?????????.
						</strong>
					</Answer>
				</div>
				<Question>
					<strong>Q : ???????????? ?????? ????????? ???????????????</strong>
				</Question>
				<div>
					<Answer>
						<strong>
							A : ???????????? ????????? ?????? ??????????????? ????????? ?????? ???????????? ????????????
							?????? ????????????. <br /> ????????? ???????????? ???????????? ?????? ????????????
							???????????? ???????????? ????????????.
						</strong>
					</Answer>
				</div>
				<Question>
					<strong>Q : ????????? ?????? ????????? ????????????</strong>
				</Question>
				<div>
					<Answer>
						<strong>
							A : ??? ????????? Flutter(Getx), ?????????????????? React??? ??? ???????????????.
							???????????? ???????????? ????????????
						</strong>
					</Answer>
				</div>
			</QuestionContainer>
		</section>
	);
};

export default QnA;
