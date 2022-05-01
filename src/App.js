import Get from './API/Get';
import ListCard from './Component/ListCard';
import { useDispatch } from 'react-redux'
import { addPost } from './store/slise/PostSlise';

function App() {

  const add = (res) => dispatch(addPost(res))
  const dispatch = useDispatch()
  async function response() {
    const result = await Get.getAll()
    console.log(result)
    add(result)
  }
  response()
  return (
    <div>
      <ListCard />
    </div>
  );
}

export default App;
