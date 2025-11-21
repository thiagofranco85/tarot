import axios from "axios";
import { env } from "./../env/index";

export class IAGemini {
  private _question: string;
  private _answer: string = "";
  private _contentType: string = "application/json";
  private _AI_GEMINI_API_KEY: string = env.AI_GEMINI_API_KEY!;
  private _uri: string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${this._AI_GEMINI_API_KEY}`;

  constructor(question: string) {
    this._question = question;
  }

  get answer(): string {
    return this._answer;
  }

  async sendRequest(): Promise<string> {
    const questionJson = {
      contents: [
        {
          parts: [
            {
              text: this._question,
            },
          ],
        },
      ],
      generationConfig: {
        "temperature": 1.2,  // Gemini 2.5 e 3 aguentam temperatura mais alta sem alucinar
        "topK": 64,
        "topP": 0.95
      }
    };
    const response = await axios.post(this._uri, 
      questionJson, 
      {
        headers: { "Content-Type": this._contentType },
      });

    

    this._answer = response.data.candidates[0].content.parts[0].text;

    return this._answer;
  }
}
 
