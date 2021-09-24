import {
		HomeArea,
		SearchArea,
		SearchInput,
		CardArea,
		HistoryButton,
		HistoryArea
	} from './styled';
	import {useState, useEffect} from 'react';
	import api from '../../api';
	import Cards from '../../components/Cards';
	import {useDispatch, useSelector} from 'react-redux';
	let timer;
const Page = () => {
	const dispatch = useDispatch();
	const his = useSelector(state => state.hist.history);
	const [word, setWord] = useState('');
	const [status, setStatus] = useState(false);
	const [defList, setDefList] = useState([]);
	const getWordInfo = async () => {
		let {data: json} = await api.get(`/entries/en/${word}`);//Com o await, so vai para o codigo de baixo depois que a req acontecer, se dar erro por falta de net, entao a req nao aconteceu, lanca uma exececao e nao vai para o codigo de baixo
		setDefList(json);
	}

	const handleClickButton = () => {
		setStatus(!status);
	}
	
	useEffect(()=>{
		clearTimeout(timer);//Se vc nao fazer isso, a cada vez que o onChange for disparado, ele vai criar um novo timer e mesmo que o usuario nao parar de digitar a req sera feita
		timer = setTimeout(()=>{
			if (word !== '') {
					dispatch({
					type: 'ADD_TO_HISTORY',
					payload: {
						word
					}
				});
				getWordInfo();
			} else {
				setDefList([]);	
			}
		}, 2000);
		// eslint-disable-next-line
	},[word]);

	return (
			<HomeArea>
				<SearchArea>
					<SearchInput type="text" placeholder="Type here an english word"
					value={word} onChange={e=>setWord(e.target.value)}/>
				</SearchArea>

				<HistoryButton title="Last Searches">
					<i className="fas fa-history" onClick={handleClickButton}></i>
				</HistoryButton>

				{his.length > 0 && status &&
						<HistoryArea>
							{
								his.slice(0, 4).map((i,k)=>(
								<span key={k}>{i}</span>
							))
						}
						</HistoryArea>
				}

				<CardArea>
					{defList.length > 0 && 
						<Cards data={defList}/>
					}
				</CardArea>

			</HomeArea>
		);
}
export default Page;