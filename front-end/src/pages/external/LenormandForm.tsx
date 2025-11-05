import { useForm } from "react-hook-form";
import { Select } from "../../components/select/Select";
import { Text } from "../../components/text/Text";
import { TextArea } from "../../components/textarea/TextArea";
import { PageTitle } from "../../layout-components/PageTitle";

export function LenormandForm() {
  type SendFormData = {
    question: string;
    "lernomand-card": string;
    "lenormand-image": FileList;
  };

  const { register, handleSubmit, formState } = useForm<SendFormData>();

  const { errors } = formState;

  console.log(errors);

  function sendForm(values: SendFormData) {
    console.log(values);
  }

  return (
    <>
      <PageTitle>Lenormand</PageTitle>
      <Text as="h2" variant="title-xs" className="text-center">
        1. Digite a pergunta que você fez às cartas.
      </Text>

      <form onSubmit={handleSubmit(sendForm)}>
        <TextArea
          size="sm"
          placeholder="Como vai ser o meu dia hoje?"
          {...register("question", { required: "A pergunta é obrigatória" })}
        ></TextArea>
        {errors.question && <span>{errors.question.message}</span>}

        <Text as="h2" variant="title-xs" className="text-center">
          2. Selecione a carta que saiu.
        </Text>

        <Select size="lg" {...register("lernomand-card")}>
          <option value="">Selecione uma carta</option>
          <option value="1">01 - Cavaleiro</option>
          <option value="2">02 - Trevo</option>
          <option value="3">03 - Navio</option>
        </Select>

        <Text as="h2" variant="title-xs" className="text-center">
          ou envie uma foto com a tiragem.
        </Text>

        <label
          htmlFor="lenormand-image"
          className="flex items-center justify-center gap-2 w-full bg-black/40 rounded-2xl px-4 py-3 text-white text-base/6 my-2 cursor-pointer hover:bg-background-1/90 transition-colors border-2 border-dashed border-white/20 hover:border-white/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <span>Escolher arquivo</span>
        </label>
        <input
          type="file"
          id="lenormand-image"
          accept="image/jpg,image/jpeg,image/png"
          className="hidden"
          {...register("lenormand-image")}
        />
      </form>
    </>
  );
}
