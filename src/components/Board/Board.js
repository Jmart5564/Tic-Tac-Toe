import { useGame } from '../../context/GameContext';

export default function Board() {
  const { square } = useGame();


  const Square = ({ num }) => {
    return <td>{square[num]}</td>;
  };

  return (
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Square num={0}/>
            <Square num={1}/>
            <Square num={2}/>
          </tr>
          <tr>
            <Square num={3}/>
            <Square num={4}/>
            <Square num={5}/>
          </tr>
          <tr>
            <Square num={6}/>
            <Square num={7}/>
            <Square num={8}/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}