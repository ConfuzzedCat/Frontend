import "./App.css";
import upper from "./file1";
import { text1, text2, text3 } from "./file1";
import person from "./file2";
import { males, females } from "./file2";
import { MultiWelcome } from "./file3";

function App() {
  const { firstName, email } = person;
  let s = "Welcome to 3rd Semester, Frontend.";
  console.log([...males, ...females]);
  console.log([...males, "Kurt", "Helle", ...females, "Tina"]);
  const names = [...males, "Kurt", "Helle", ...females, "Tina"];

  const personV2 = {
    ...person,
    friends: [...males, ...females],
    phone: "+45 12345678",
  };

  console.log(personV2);

  function getRandomKey(str) {
    let ret = str + Math.random();
    console.log(ret);
    return ret;
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h2>Lille opgave</h2>
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <p>{s}</p>
      </div>
      <div className="textbox">
        <p>{s}</p>
      </div>
      <h2>Exercise 1</h2>
      <p>{upper("uppercase me!")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Exercise 2</h2>
      <div>
        <p>Person:</p>
        <p>firstname: {firstName}</p>
        <p>email: {email}</p>
      </div>
      <h2>Exercise 3</h2>
      <p>{names.map((name) => `${name}, `)}</p>
      <p>{names.join(", ")}</p>

      <ul>
        {names.map((name) => (
          <li key={getRandomKey(name)}>{name}</li>
        ))}
      </ul>

      <h2>Exercise 4</h2>
      <p>MultiWelcome</p>
      <MultiWelcome/>
    </>
  );
}

export default App;
