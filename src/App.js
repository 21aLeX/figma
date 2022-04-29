import Get from './API/Get';
import Card from './Card';
import PostForm from './Component/PostForm';

function App() {
  

  // async function response () {
  //   await Get.getAll()
  // }
  // response()
  return (
    <div>
      <Card />
      <PostForm/>
    </div>
  );
}

export default App;
