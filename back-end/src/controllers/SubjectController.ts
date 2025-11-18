import { Subjects } from "@/entities/types/enums/Subjects";

export function getSubjects(): string[] {

    const list = Object.values(Subjects);
    return list;    
}

export function getFormatedSubjects(): string[] {
    const list = [
        Subjects.Answer,
        `${Subjects.Answer} - ${Subjects.ComplementAnswer}`,
        `${Subjects.Answer} - ${Subjects.ComplementAnswer} - ${Subjects.Advice}`,
        `${Subjects.Past} - ${Subjects.Present} - ${Subjects.Future}`,
        `${Subjects.Advantage} - ${Subjects.Obstacle} - ${Subjects.Trend}`,
        `${Subjects.CurrentSituation} - ${Subjects.Action} - ${Subjects.Result}`  
    ]

    return list;
}
 