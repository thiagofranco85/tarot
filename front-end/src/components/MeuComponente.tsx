import { useState } from "react";

function InputText({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <input type="text" onChange={onChange} />;
}

function OverView({ inputText }: { inputText: string }) {
  return (
    <div>
      <h2>Digitando:</h2>
      <p>{inputText}</p>
    </div>
  );
}

export function MeuComponente() {
  const [inputText, setInputText] = useState("");

  function onChangeInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  return (
    <div>
      <InputText onChange={onChangeInputText} />
      <OverView inputText={inputText} />
    </div>
  );
}
