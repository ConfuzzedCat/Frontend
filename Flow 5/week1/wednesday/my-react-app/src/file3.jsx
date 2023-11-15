export function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}
export function MultiWelcome() {
    return (
        <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
    </div>
  );
}
