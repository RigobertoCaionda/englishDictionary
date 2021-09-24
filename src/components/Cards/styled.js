import styled from 'styled-components';
export const WordSoundArea = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Word = styled.div``;
export const Sound = styled.div`
	cursor: pointer;
`;
export const Phonetics = styled.div``;
export const Container = styled.div`
	margin-bottom: 20px;
	padding: 10px;
	box-shadow: 0px 0px 3px #ddd;
	font-size: 0.9rem;
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;
export const DefArea = styled.div`
	margin-top: 20px;
`;
export const Def = styled.div`
	margin-bottom: 10px;
	span {
		font-weight: bold;
	}
`;
export const Example = styled.div`
	span {
		font-weight: bold;
	}
`;
export const DefType = styled.div`
	margin-bottom: 10px;
	text-align: center;
	font-weight: bold;
	text-transform: capitalize;
`;