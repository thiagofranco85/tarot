import { useEffect, useState } from "react";

function InputText({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <input type="text" className="bg-amber-200" onChange={onChange} />;
}

function OverView({ inputText }: { inputText: string }) {
  return (
    <div>
      <h2>Digitando:</h2>
      <p>{inputText}</p>
    </div>
  );
}

async function getData(): Promise<[]> {
  const response = await fetch('http://localhost:3001/lenormand')
  const data = await response.json();
  return data
}

export function MeuComponente() {
  const [inputText, setInputText] = useState("");
  const [users, setUsers] = useState<typeof users>([]);

  useEffect(() => {

    getData().then(data => {
      setUsers(data);
    });

  }, []);

  function onChangeInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  return (
    <div>
      <InputText onChange={onChangeInputText} />
      <OverView inputText={inputText} />

      {users.length > 0 && (
        <div>
          <h2>Usuários:</h2>
          <ul>
            {users.map((carta: any) => (
              <li key={carta.id}>{carta.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
