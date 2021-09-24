import styled from 'styled-components';
export const HomeArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0;
`;
export const SearchArea = styled.div`
	width: 600px;
	@media (max-width: 600px) {
		width: 100%;
		padding: 0 10px;
	}
`;
export const SearchInput = styled.input`
	width: 100%;
	outline: 0;
	padding: 10px;
	font-size: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
`;
export const CardArea = styled.div`
	width: 600px;
	margin-top: 20px;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0px 0px 3px #ddd;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
export const HistoryButton = styled.div`
	margin-top: 20px;
	width: 600px;
	display: flex;
	justify-content: flex-end;
	font-size: 2rem;
	cursor: pointer;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
export const HistoryArea = styled.div`
	width: 600px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 0px 3px #ddd;
	margin-top: 20px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;