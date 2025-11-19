import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "../../components/button/Button";
import { Error } from "../../components/error/Error";
import { LoadingGif } from "../../components/loading-gif/loadingGif";
import { Select } from "../../components/select/Select";
import { Text } from "../../components/text/Text";
import { TextArea } from "../../components/textarea/TextArea";
import { PageTitle } from "../../layout-components/PageTitle";
import { getDeckCards, getFormatedSubjects, playLenormand, playTarot } from "../../services/http/http";
import type { DeckType } from "../../types/DeckType";


type SendFormData = {
  subject: string;
  question: string;
  [key: `card-${string}`]: string;
  "deck-image": FileList;
};


export function DeckForm({ deckType }: { deckType: DeckType }) {

  const [deckCards, setDeckCards] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedSubjectArray, setSelectedSubjectArray] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState } = useForm<SendFormData>();

  const { errors } = formState;
  const navigate = useNavigate();


  async function sendForm(formData: SendFormData) {
    console.log(formData);

    setIsSubmitting(true);

    try {
      const paramsObject = {
        question: formData.question,
        subjects: selectedSubjectArray,
        cards: Object.values(selectedCards)
      };

      const response = deckType === "lenormand" ? await playLenormand(paramsObject) : await playTarot(paramsObject);

      //setResponseApi(response.data);
      navigate('/answer', { state: { response: response.data, origin: deckType } });

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setIsSubmitting(false);
    }


  }

  function handleSelectedSubject(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedSubject(event.target.value);
  }

  function handleSelectedCards(event: React.ChangeEvent<HTMLSelectElement>) {

    setSelectedCards(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  }

  function getOtherCardsSelected(cardName: string) {
    return Object.values(selectedCards).filter(name => name !== cardName);
  }

  useEffect(() => {
    getDeckCards(deckType)
      .then((data) => setDeckCards(data))
      .catch((error) => console.error('Erro ao carregar cartas:', error))
      .finally(() => setIsLoading(false));


    getFormatedSubjects()
      .then((data) => setSubjects(data))
      .catch(errors => console.error('Erro ao carregar assuntos:', errors))
      .finally(() => setIsLoading(false));
  }, [deckType])

  useEffect(() => {
    if (selectedSubject !== "") {
      const subjectArray = selectedSubject.split("-").map(item => item.trim());
      setSelectedSubjectArray(subjectArray);
    }
  }, [selectedSubject])

  return (
    <>

      <PageTitle>{deckType}</PageTitle>

      <form onSubmit={handleSubmit(sendForm)}>

        <Text as="h2" variant="title-xs" className="text-center">
          1. Escolha a formação da sua jogada.
        </Text>

        <Select
          size="lg"
          {...register("subject", {
            required: "Selecione a formação das cartas"
          })}
          disabled={isLoading}
          onChange={handleSelectedSubject}
        >


          <option value="">{isLoading ? 'Carregando...' : 'Selecione a ordem das cartas'}</option>
          {subjects.map(subject => {
            return (<option key={subject} value={subject}>{subject}</option>)
          })}
        </Select>
        {errors.subject && <Error>{errors.subject.message}</Error>}


        <Text as="h2" variant="title-xs" className="text-center mt-3">
          2. Digite a pergunta que você fez às cartas.
        </Text>
        <TextArea
          size="sm"
          placeholder="Como vai ser o meu dia hoje?"
          {...register("question", {
            required: "A pergunta é obrigatória",
            minLength: {
              value: 10,
              message: "A pergunta deve ter no mínimo 10 caracteres"
            },
            maxLength: {
              value: 500,
              message: "A pergunta deve ter no máximo 500 caracteres"
            }
          })}
        ></TextArea>
        {errors.question && <Error>{errors.question.message}</Error>}


        {selectedSubjectArray.map((subject, index) => (
          <React.Fragment key={subject}>
            <Text as="h2" variant="title-xs" className="text-center mt-3">
              {index + 3}. Selecione a carta <Text as="strong" variant="title-xs" weight="bold">{subject}</Text>.
            </Text>

            <Select
              id={`card-${subject}`}
              size="lg"
              {...register(`card-${subject}`, {
                required: `Selecione a carta ${subject}`
              })}
              disabled={isLoading}
              onChange={handleSelectedCards}
              value={selectedCards[`card-${subject}`]}
            >
              <option value="">{isLoading ? 'Carregando...' : `Selecione uma carta ${subject}`}</option>
              {deckCards.map((card: string, index: number) => {
                const isDisabled = getOtherCardsSelected(selectedCards[`card-${subject}`]).includes(card);
                return (<option key={card} value={card} disabled={isDisabled}>{index + 1} - {card}</option>)
              })}
            </Select>
            {errors[`card-${subject}`] && <Error>{errors[`card-${subject}`]?.message}</Error>}
          </React.Fragment>
        ))}

        <Button type="submit" size={"lg"} className="w-50 m-auto block" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>

        {isSubmitting && <LoadingGif />}




        {/*}
        <Text as="h2" variant="title-xs" className="text-center mt-3">
          ou envie uma foto com a tiragem.
        </Text>

        <label
          htmlFor="deck-image"
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
          id="deck-image"
          accept="image/jpg,image/jpeg,image/png"
          className="hidden"
          {...register("deck-image")}
          onChange={handleSelectImage}
        />
        */}
      </form>
    </>
  );
}
