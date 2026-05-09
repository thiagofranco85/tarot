import { Play } from '@/entities/Play'
import { ICard } from '@/entities/interfaces/ICard'
import { DeckType } from '@/entities/types/enums/DeckType'
import { Subjects } from '@/entities/types/enums/Subjects'
import { beforeEach, describe, expect, it } from 'vitest'

// Card stub simples para usar nos testes
function makeCard(name: string): ICard {
  return { name, deckType: DeckType.Tarot }
}

describe('Play', () => {
  describe('constructor', () => {
    it('deve criar um id automaticamente quando nenhum id é fornecido', () => {
      const play = new Play({ numberOfCards: 1, question: 'Qual o caminho?' })
      expect(play.getId()).toBeTruthy()
      expect(typeof play.getId()).toBe('string')
    })

    it('deve usar o id fornecido quando informado', () => {
      const customId = 'meu-id-customizado'
      const play = new Play({ id: customId, numberOfCards: 1, question: 'Qual o caminho?' })
      expect(play.getId()).toBe(customId)
    })

    it('deve gerar ids diferentes para duas instâncias sem id fornecido', () => {
      const play1 = new Play({ numberOfCards: 1, question: 'Pergunta 1' })
      const play2 = new Play({ numberOfCards: 1, question: 'Pergunta 2' })
      expect(play1.getId()).not.toBe(play2.getId())
    })

    it('deve armazenar a pergunta corretamente', () => {
      const question = 'O que o futuro reserva?'
      const play = new Play({ numberOfCards: 1, question })
      expect(play.getQuestion()).toBe(question)
    })

    it('deve iniciar com lista de cartas vazia', () => {
      const play = new Play({ numberOfCards: 2, question: 'Pergunta' })
      expect(play.getCards()).toHaveLength(0)
    })

    it('deve iniciar com lista de assuntos vazia', () => {
      const play = new Play({ numberOfCards: 2, question: 'Pergunta' })
      expect(play.getSubjects()).toHaveLength(0)
    })
  })

  describe('verifyNumberOfCards (via construtor)', () => {
    it('deve aceitar numberOfCards igual ao limite máximo (3)', () => {
      expect(() => new Play({ numberOfCards: 3, question: 'Pergunta' })).not.toThrow()
    })

    it('deve aceitar numberOfCards igual a 1', () => {
      expect(() => new Play({ numberOfCards: 1, question: 'Pergunta' })).not.toThrow()
    })

    it('deve lançar erro quando numberOfCards for maior que 3', () => {
      expect(() => new Play({ numberOfCards: 4, question: 'Pergunta' })).toThrow(
        "You can't play with more than 3 cards"
      )
    })
  })

  describe('getCards() — imutabilidade', () => {
    it('deve retornar uma cópia da lista de cartas', () => {
      const play = new Play({ numberOfCards: 1, question: 'Pergunta' })
      const card = makeCard('O Mago')
      play.addCard(Subjects.Answer, card)

      const cards = play.getCards() as ICard[]
      cards.push(makeCard('A Imperatriz'))

      // A adição externa não deve afetar a lista interna
      expect(play.getCards()).toHaveLength(1)
    })
  })

  describe('getSubjects() — imutabilidade', () => {
    it('deve retornar uma cópia da lista de assuntos', () => {
      const play = new Play({ numberOfCards: 1, question: 'Pergunta' })
      play.addCard(Subjects.Answer, makeCard('O Mago'))

      const subjects = play.getSubjects() as Subjects[]
      subjects.push(Subjects.Advice)

      expect(play.getSubjects()).toHaveLength(1)
    })
  })

  describe('addCard()', () => {
    let play: Play<ICard>

    beforeEach(() => {
      play = new Play({ numberOfCards: 3, question: 'Pergunta' })
    })

    it('deve adicionar uma carta corretamente', () => {
      play.addCard(Subjects.Answer, makeCard('O Mago'))
      expect(play.getCards()).toHaveLength(1)
      expect(play.getSubjects()).toHaveLength(1)
    })

    it('deve lançar erro ao adicionar mais cartas do que o limite de numberOfCards', () => {
      const play1 = new Play({ numberOfCards: 1, question: 'Pergunta' })
      play1.addCard(Subjects.Answer, makeCard('O Mago'))

      expect(() => play1.addCard(Subjects.Advice, makeCard('A Imperatriz'))).toThrow(
        "You can't add more than 1 cards"
      )
    })

    it('deve lançar erro ao adicionar a mesma carta duas vezes', () => {
      play.addCard(Subjects.Answer, makeCard('O Mago'))

      expect(() => play.addCard(Subjects.Advice, makeCard('O Mago'))).toThrow(
        "You can't add the same card twice"
      )
    })

    it('deve lançar erro ao adicionar o mesmo assunto duas vezes', () => {
      play.addCard(Subjects.Answer, makeCard('O Mago'))

      expect(() => play.addCard(Subjects.Answer, makeCard('A Imperatriz'))).toThrow(
        "You can't add the same subject twice"
      )
    })

    it('deve aceitar até 3 cartas com assuntos distintos', () => {
      play.addCard(Subjects.Past, makeCard('O Mago'))
      play.addCard(Subjects.Present, makeCard('A Imperatriz'))
      play.addCard(Subjects.Future, makeCard('O Carro'))

      expect(play.getCards()).toHaveLength(3)
      expect(play.getSubjects()).toHaveLength(3)
    })
  })

  describe('buildCompleteQuestion()', () => {
    it('deve construir a pergunta completa com carta e assunto', () => {
      const play = new Play({ numberOfCards: 1, question: 'O que me espera?' })
      play.addCard(Subjects.Answer, makeCard('O Mago'))

      const result = play.buildCompleteQuestion()
      expect(result).toContain('O que me espera?')
      expect(result).toContain(Subjects.Answer)
      expect(result).toContain('O Mago')
    })

    it('deve lançar erro quando nenhuma carta foi adicionada', () => {
      const play = new Play({ numberOfCards: 1, question: 'Pergunta' })
      expect(() => play.buildCompleteQuestion()).toThrow('No cards added to the play')
    })

    it('deve construir a pergunta com múltiplas cartas separadas por vírgula e ponto final', () => {
      const play = new Play({ numberOfCards: 2, question: 'O que me espera?' })
      play.addCard(Subjects.Past, makeCard('O Mago'))
      play.addCard(Subjects.Future, makeCard('A Imperatriz'))

      const result = play.buildCompleteQuestion()
      expect(result).toContain('Passado: O Mago,')
      expect(result).toContain('Futuro: A Imperatriz.')
    })
  })
})
