const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

let axiosLink='https://crudcrud.com/api/adf1e667415b46548ac5640b40647a75/mydata'
function getTodos() {
  // Write your code here
  axios.get(axiosLink)
  .then((res) => console.log(res.data))
  .catch((err)=>console.log(err)) 
}

function postTodo() {
  // Write your code here
  axios.post(axiosLink, {
    title: 'first Post',
    completed:false
  })
  .then((res) => console.log(res.data))
  .catch((err)=>console.log(err))
}

function putTodo() {
  // Write your code here
}

function deleteTodo() {
  // Write your code here
}
