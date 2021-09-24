import {
		WordSoundArea,
		Word,
		Sound,
		Phonetics,
		DefArea,
		Def,
		Example,
		Container,
		DefType
	} from './styled';
const Page = ({data}) => {

	const handleAudioClick = () => {
		document.querySelector('audio').play();
	}

	return (
		<>
			<audio src={data[0].phonetics[0].audio} />
			<WordSoundArea>
				<Word>{data[0].word}</Word>
				<Phonetics>{data[0].phonetics[0].text}</Phonetics>
				<Sound onClick={handleAudioClick}><i className="fas fa-volume-up"></i></Sound>
			</WordSoundArea>
					<DefArea>
					{data[0].meanings.length > 0 &&
						data[0].meanings.map((item, index)=>(
							<Container key={index}>
								<DefType>{data[0].meanings[index].partOfSpeech}</DefType>

								<Def>
									<span>Definition:</span> {data[0].meanings[index].definitions[0].definition}
								</Def>

								<Example>
									<span>Example</span>: {data[0].meanings[index].definitions[0].example}
								</Example>
							</Container>
							))
					}
					</DefArea>
			</>
		);
}
export default Page;