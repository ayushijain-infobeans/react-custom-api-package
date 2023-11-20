# react-custom-api-package

`react-custom-api-package` is a simple and customizable API package for React applications. It allows you to add, remove and edit items while using get,delete and post API 

## Installation

In your application `package.json` file, add the following line in the dependencies:

```bash
"dependencies": {
   "react-custom-api-package": "git+https://github.com/ayushijain-infobeans/react-custom-api-package"
}
```
After that run:

```bash
npm install
# or
npm i
```
## Usages

```
Use the useFetch to interact with the API  in your components:
```bash
import { useFetch } from "react-cart-package";

const Test = () => {
  let token = "abcdwiefqeib";

  const postData = {
    name: "prya",
    salary: "12378",
    age: "23",
    id: 28,
  };
  const { data, loading, error, fetchData, handleCRUD } = useCustomHook();

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/todos/1");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Hooks</h1>
      <p>
        {data.id} : {data.title}
      </p>
      <button
        onClick={() =>
          handleCRUD(
            "https://dummy.restapiexample.com/api/v1/create",
            "POST",
            postData
          )
        }
      >
        Add User
      </button>
      <button
        onClick={() =>
          handleCRUD(
            "https://dummy.restapiexample.com/api/v1/update/21",
            "PUT",
            postData
          )
        }
      >
        Edit User
      </button>
      <button
        onClick={() =>
          handleCRUD(
            "https://dummy.restapiexample.com/api/v1/delete/719",
            "DELETE",
            postData
          )
        }
      >
        Delete
      </button>
      {/* Render your data and provide UI for creating, updating, and deleting items */}
    </div>
  );
};
```
## License
This package is licensed under the MIT License.
